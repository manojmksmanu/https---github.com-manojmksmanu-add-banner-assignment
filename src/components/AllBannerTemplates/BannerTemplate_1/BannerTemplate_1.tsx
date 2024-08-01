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

const BannerTemplate_1: React.FC<BannerProps> = ({
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
      className="w-80 h-72"
      style={{
        background: `url(${background})`,
        width: "400px",
        height: "400px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow:"hidden"
      }}
    >
      <img className="w-40 h-40 rounded-full" src={image} alt={title} />
      <h2 className="text-white">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default BannerTemplate_1;
