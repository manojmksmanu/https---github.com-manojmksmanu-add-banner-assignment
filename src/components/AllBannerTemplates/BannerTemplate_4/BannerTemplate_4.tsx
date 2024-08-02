import React from "react";
interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const BannerTemplate_4: React.FC<BannerProps> = ({
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
          <h2 className="text-white text-xl font-bold text-center w-40 mt-5 pl-2 h-14 overflow-hidden">
            {title}
          </h2>
          <p className="pl-2 text-xs text-slate-700 w-40 text-center mt-2">
            {description}
          </p>
        </div>
        <div className="w-32 h-32 rounded-full absolute flex justify-end left-3 bottom-4  mt-4">
          {image && (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </div>
        {/* <div className="absolute flex justify-end left-3 bottom-4">
          <img className="w-32 h-32 rounded-full" src={image} alt={title} />
        </div> */}
        <div className="p-2 pb-4 flex justify-end">
          <span className="bg-slate-300 rounded-md p-2 text-xs ">{cta}</span>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate_4;
