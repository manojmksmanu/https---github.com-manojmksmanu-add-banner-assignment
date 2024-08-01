import React from "react";
import BannerTemplate_4 from "./BannerTemplate_4";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs/EditBannerTemplateBs";
import { useModal } from "@/context/ModalContext";
const BannerParent_4 = ({
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
      {type === 4 ? (
        <EditBannerTemplateBs>
          <BannerTemplate_4
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
      <BannerTemplate_4
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

export default BannerParent_4;
