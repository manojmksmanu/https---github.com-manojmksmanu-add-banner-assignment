import React from "react";
interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const BannerTemplate_3: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
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
        <div className="w-44 h-44  rounded-full absolute flex justify-end -right-10 -bottom-3  mt-4">
          {image && (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-full"
            />
          )}
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
