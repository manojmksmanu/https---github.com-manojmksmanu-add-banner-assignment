import { useState, useEffect } from "react";
import RenderBanners from "../RenderBanners/RenderBanners";
const BannerList = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch("/banners.json");
      const data = await response.json();
      setBanners(data);
    };

    fetchBanners();
  }, []);
  console.log(banners);
  return (
    <div className="banner-list flex flex-col">
      {banners.map((banner, i) => (
        <RenderBanners
          key={i}
          id={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
        />
      ))}
    </div>
  );
};

export default BannerList;
