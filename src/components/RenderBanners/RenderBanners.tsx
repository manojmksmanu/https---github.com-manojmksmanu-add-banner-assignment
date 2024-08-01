import React,{useState,useEffect} from "react";
import BannerTemplate_1 from "../AllBannerTemplates/BannerTemplate_1/BannerTemplate_1";
import BannerTemplate_2 from "../AllBannerTemplates/BannerTemplate_2/BannerTemplate_2";
import BannerTemplate_3 from "../AllBannerTemplates/BannerTemplate_3/BannerTemplate_3";
import BannerTemplate_4 from "../AllBannerTemplates/BannerTemplate_4/BannerTemplate_4";

interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({
  id,
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
     const [NumOfBanners, setNumOfBanners] = useState([]);
     useEffect(() => {
       const fetchBanners = async () => {
         const response = await fetch("/banners.json");
         const data = await response.json();
         setNumOfBanners(data.length);
       };

       fetchBanners();
     }, []);
    console.log(NumOfBanners)
  switch (id) {

    case 1:
      return (
        <BannerTemplate_1
          id={id}
          title={title}
          description={description}
          cta={cta}
          image={image}
          background={background}
        />
      );
      break;
    case 2:
      return <BannerTemplate_2 />;
      break;
    case 3:
      return <BannerTemplate_3 />;
      break;
    case 4:
      return <BannerTemplate_4 />;
      break;
    default:
      break;
  }
};

export default BannerImageComp;
