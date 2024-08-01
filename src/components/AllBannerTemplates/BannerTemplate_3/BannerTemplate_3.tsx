import React from "react";
interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerTemplate_3: React.FC<BannerProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  return (
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
          <h2 className="text-slate-700 text-xl font-bold w-40 mt-2 pl-2">
            {title}
          </h2>
          <p className="pl-2 text-xs text-slate-700 w-40 mt-1">{description}</p>
        </div>
        <div className="absolute flex justify-end -right-10 -bottom-3">
          <img className="w-44 h-44 rounded-full" src={image} alt={title} />
        </div>
        <div className="p-2 pb-4">
          <span className="bg-slate-50 rounded-md p-2 font-medium text-xs cursor-pointer">
            {cta}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate_3;
