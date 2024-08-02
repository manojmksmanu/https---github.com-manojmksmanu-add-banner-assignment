import React, { useState, useEffect } from "react";
import RenderBanners from "../RenderBanners/RenderBanners";
import { useModal } from "@/context/ModalContext";
import { FaEdit } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// Define types for the banner object
interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const BannerList: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const { openModal, type, setType } = useModal();

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fetch("/banners.json");
      const data: Banner[] = await response.json();
      setBanners(data);
    };
    fetchBanners();
  }, []);

  const clickEdit = (id: any) => {
    openModal();
    setType(id);
  };

  return (
    <div className="flex flex-wrap gap-20 justify-normal">
      {banners.map((banner) => (
        <div key={banner.id} className="w-[400px] h-[400px] relative">
          <span
            onClick={() => clickEdit(banner.id)}
            className="flex absolute z-20 bg-slate-50 drop-shadow-lg text-slate-700 rounded-md p-1 px-2 right-2 top-2 cursor-pointer hover:bg-slate-300 transition-all"
          >
            <FaEdit />/<FaDownload />
          </span>
          <div className="bg-slate-400 w-full h-full absolute z-10 opacity-30"></div>
          <RenderBanners
            id={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
          />
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default BannerList;
