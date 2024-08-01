import { useState, useEffect } from "react";
import RenderBanners from "../RenderBanners/RenderBanners";
import EditBannerTemplateBs from "../EditBannerTemplateBs/EditBannerTemplateBs";
import EdiBannerTemplate from "../EditBannerTemplateBs/EditBannerTemplateBs";
import { useModal } from "@/context/ModalContext";
import { edgeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import { type } from "os";
const BannerList = ({}) => {
  const [banners, setBanners] = useState([]);
  const { openModal, type, setType } = useModal();

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch("/banners.json");
      const data = await response.json();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  const clickEdit = (e) => {
    openModal();
    setType(e);
  };

  return (
    <div className="flex flex-wrap gap-20 justify-normal">
      {banners.map((banner, i) => (
        <div className="w-[400px] h-[400px] relative">
          <span
            onClick={() => clickEdit(banner.id)}
            className="absolute z-20 bg-slate-200 text-slate-700 rounded-md p-1 px-2 right-2 top-2 cursor-pointer"
          >
            Edit
          </span>
          <div className="bg-slate-400 w-full h-full absolute z-10 opacity-30"></div>
          <RenderBanners
            key={i}
            id={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
          />
        </div>
      ))}
    </div>
  );
};

export default BannerList;
