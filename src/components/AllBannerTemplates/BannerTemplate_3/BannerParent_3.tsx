import React from "react";
import BannerTemplate_3 from "./BannerTemplate_3";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs/EditBannerTemplateBs";
import { useModal } from "@/context/ModalContext";
const BannerParent_3 = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  const { isModalOpen, openModal, closeModal, type } = useModal();

  return (
    <div>
      {type === 3 ? (
        <EditBannerTemplateBs>
          <BannerTemplate_3
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
      <BannerTemplate_3
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

export default BannerParent_3;
