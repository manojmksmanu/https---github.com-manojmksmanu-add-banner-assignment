import React, { useState, useEffect } from "react";
import BannerTemplate_2 from "./BannerTemplate_2";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs/EditBannerTemplateBs";
import { useModal } from "@/context/ModalContext";
import { toast } from "react-toastify";
interface BannerParentProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}
const BannerParent_1: React.FC<BannerParentProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
}) => {
  const [bannerTitle, setTitle] = useState<string>(title);
  const [bannerDescription, setDescription] = useState<string>(description);
  const [bannerCta, setCta] = useState<string>(cta);
  const [bannerImage, setImage] = useState<string>(image);
  const { type } = useModal();
  console.log(image, typeof image);
  // Function to save the current state to local storage
  const save = () => {
    const bannerData = {
      id: id,
      title: bannerTitle,
      description: bannerDescription,
      cta: bannerCta,
      image: bannerImage,
      background,
    };
    localStorage.setItem(`banner_${id}`, JSON.stringify(bannerData));
    toast.success("Your Banner Is Saved");
  };

  // Check local storage on component mount
  useEffect(() => {
    const storedBanner = localStorage.getItem(`banner_${id}`);
    if (storedBanner) {
      const { title, description, cta, image } = JSON.parse(storedBanner);
      setTitle(title);
      setDescription(description);
      setCta(cta);
      setImage(image);
    }
  }, [id]);
  const isEditMode = type === id;
  return (
    <div>
      {isEditMode && (
        <EditBannerTemplateBs
          title={bannerTitle}
          setTitle={setTitle}
          description={bannerDescription}
          setDescription={setDescription}
          cta={bannerCta}
          setCta={setCta}
          image={bannerImage}
          setImage={setImage}
          save={save} // Pass the save function
        >
          <BannerTemplate_2
            id={id}
            title={bannerTitle}
            description={bannerDescription}
            cta={bannerCta}
            image={bannerImage}
            background={background}
          />
        </EditBannerTemplateBs>
      )}

      <BannerTemplate_2
        id={id}
        title={bannerTitle}
        description={bannerDescription}
        cta={bannerCta}
        image={bannerImage}
        background={background}
      />
    </div>
  );
};

export default BannerParent_1;
