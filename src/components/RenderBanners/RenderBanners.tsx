import React, { useState, useEffect } from "react";
import BannerParent_1 from "../AllBannerTemplates/BannerTemplate_1/BannerParent_1";
import BannerParent_2 from "../AllBannerTemplates/BannerTemplate_2/BannerParent_2";
import BannerParent_3 from "../AllBannerTemplates/BannerTemplate_3/BannerParent_3";
import BannerParent_4 from "../AllBannerTemplates/BannerTemplate_4/BannerParent_4";
interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const BannerImageComp: React.FC<BannerProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
}) => {
  const [numOfBanners, setNumOfBanners] = useState<number>(0);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch("/banners.json");
      const data = await response.json();
      setNumOfBanners(data.length);
    };

    fetchBanners();
  }, []);

  switch (id) {
    case 1:
      return (
        <BannerParent_1
          id={id}
          title={title}
          description={description}
          cta={cta}
          image={image}
          background={background}
        />
      );
    case 2:
      return (
        <BannerParent_2
          id={id}
          title={title}
          description={description}
          cta={cta}
          image={image}
          background={background}
        />
      );
    case 3:
      return (
        <BannerParent_3
          id={id}
          title={title}
          description={description}
          cta={cta}
          image={image}
          background={background}
        />
      );
    case 4:
      return (
        <BannerParent_4
          id={id}
          title={title}
          description={description}
          cta={cta}
          image={image}
          background={background}
        />
      );
    default:
      return null;
  }
};

export default BannerImageComp;
