import React, { useState } from "react";
import BannerTemplate_1 from "./BannerTemplate_1";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs/EditBannerTemplateBs";
import { useModal } from "@/context/ModalContext";
const BannerParent_1 = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  const { isModalOpen, openModal, closeModal, type } = useModal();
  const [bannerTitle, setTitle] = useState(title);
  const [bannerDescription, setDescription] = useState(description);
  const [bannerCta, setCta] = useState(cta);
  const [bannerImage, setImage] = useState<string | null>(image);
  const [bannerBackground, setBackground] = useState(background);
  return (
    <div>
      {type === 1 ? (
        <EditBannerTemplateBs
          title={bannerTitle}
          setTitle={setTitle}
          description={bannerDescription}
          setDescription={setDescription}
          cta={bannerCta}
          setCta={setCta}
          image={bannerImage}
          setImage={setImage}
          background={bannerBackground}
          setBackground={setBackground}
        >
          <BannerTemplate_1
            id={id}
            title={bannerTitle}
            description={bannerDescription}
            cta={bannerCta}
            image={bannerImage}
            background={bannerBackground}
          />
        </EditBannerTemplateBs>
      ) : (
        <></>
      )}

      <BannerTemplate_1
        id={id}
        title={bannerTitle}
        description={bannerDescription}
        cta={bannerCta}
        image={bannerImage}
        background={bannerBackground}
      />
    </div>
  );
};

export default BannerParent_1;
