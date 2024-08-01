import React, { useState } from "react";
import EditBannerTemplateBs from "../../EditBannerTemplateBs/EditBannerTemplateBs";
interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  isOpen: boolean;
  onEdit: () => void;
  onClose: () => void;
}
const BannerTemplate_1: React.FC<BannerProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  isOpen,
  onClose,
  onEdit,
}) => {
  return (
    <div>
      <div
        className=""
        style={{
          background: `url(${background})`,
          width: "400px",
          height: "400px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="w-full h-full flex flex-col justify-between  relative">
          <div className="relative">
            <h2 className="text-white text-xl font-bold w-40 mt-2 pl-2">
              {title}
            </h2>
            <p className="pl-2 text-xs text-white w-40 break-words z-5">
              {description}
            </p>
          </div>
          <div className="absolute flex justify-end bottom-[120px] right-6">
            <img className="w-28 h-28 rounded-full" src={image} alt={title} />
          </div>
          <div className="p-2 pb-4">
            <span className="bg-slate-50 rounded-md p-2 text-xs cursor-pointer">
              {cta}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate_1;
