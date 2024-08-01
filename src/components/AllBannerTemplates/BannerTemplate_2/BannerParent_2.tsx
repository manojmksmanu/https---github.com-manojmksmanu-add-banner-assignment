import React from "react";
import BannerTemplate_2 from "./BannerTemplate_2";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs/EditBannerTemplateBs";
import { useModal } from "@/context/ModalContext";
const BannerParent_2 = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  const { isModalOpen, openModal, closeModal,type } = useModal();

  return (
    <div>
      {type === 2 ? (
        <EditBannerTemplateBs>
          <BannerTemplate_2
            id={id}
            title={title}
            description={description}
            cta={cta}
            image={image}
            background={background}
          />
        </EditBannerTemplateBs>
      ) : (
        ""
      )}
      <BannerTemplate_2
        id={id}
        title={title}
        description={description}
        cta={cta}
        image={image}
        background={background}
      />
    </div>
  );
};

export default BannerParent_2;
