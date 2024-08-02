import React from "react";
interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const BannerTemplate_2: React.FC<BannerProps> = ({
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
        <div className="relative flex flex-col items-center">
          <h2 className="text-white text-xl font-bold text-center w-40 mt-2 pl-2">
            {title}
          </h2>
          <p className="pl-2 text-xs text-white w-40 text-center">
            {description}
          </p>
        </div>
        <div className="w-[290px] h-28 overflow-hidden absolute bottom-11 left-9 ">
          {image && (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover "
            />
          )}
        </div>
        <div className="p-2 pb-4 absolute bottom-2 left-8 cursor-pointer">
          <span className="text-slate-700 text-xs ">{cta}</span>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate_2;
