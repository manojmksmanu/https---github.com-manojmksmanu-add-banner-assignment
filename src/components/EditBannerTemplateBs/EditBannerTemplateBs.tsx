import React, { FC, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { useModal } from "@/context/ModalContext";
import axios from "axios";

interface ModalProps {
  setTitle: (title: string) => void;
  title: string;
  children: React.ReactNode;
  description: string;
  cta: string;
  image: string;
  setDescription: (description: string) => void;
  setCta: (cta: string) => void;
  setImage: (image: string) => void;
  save: () => void;
}

const EdiBannerTemplate: FC<ModalProps> = ({
  title,
  description,
  cta,
  setTitle,
  setDescription,
  setCta,
  setImage,
  children,
  save,
}) => {
  const { isModalOpen, closeModal } = useModal();
  const componentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  // const [downloadLoading,setDownloadLoading]=useState(false)
  const [file, setFile] = useState<File | null>(null);

  // Function to handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Function to upload the image
  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bannerImages");
    formData.append("cloud_name", "dxzu6oq4p");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dxzu6oq4p/image/upload`,
        formData
      );
      setImage(response.data.secure_url);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  // UseEffect to trigger upload when file changes
  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  // Function to handle download
  let scale = 3;
  const handleDownload = () => {
    if (componentRef.current === null) {
      return;
    }
    setLoading(true); // Set loading to true
    toPng(componentRef.current, {
      cacheBust: true,
      width: componentRef.current.offsetWidth * scale,
      height: componentRef.current.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${componentRef.current.offsetWidth}px`,
        height: `${componentRef.current.offsetHeight}px`,
      },
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Banner-image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Oops, something went wrong!", err);
      })
      .finally(() => {
        setLoading(false); // Ensure loading is set to false whether success or error
      });
  };

  // Function to save and close modal
  const handleSave = () => {
    closeModal();
    // Call the save function if provided
    if (typeof save === "function") {
      save();
    }
  };

  // Ensure modal is open before rendering
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg shadow-lg w-full xl:max-h-full max-w-screen-sm lg:max-h-[500px] mx-2 overflow-x-hidden overflow-auto p-4">
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Edit Banner</h2>

            <span
              className={`bg-blue-600 text-white px-2 py-1 text-xs rounded-md cursor-pointer hover:scale-95 transition-all 
                ${loading ? "cursor-not-allowed bg-blue-300" : ""}
                `}
              onClick={handleDownload}
            >
              Download Banner
            </span>
          </div>

          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-4 flex justify-center flex-col">
          <div className="flex justify-center" ref={componentRef}>
            {children}
          </div>
          <div className="mt-1">
            <div className="flex gap-2 flex-col">
              <label htmlFor="title" className="-mb-2 text-xs">
                Set Title
              </label>
              <input
                id="title"
                className="border-b-2 border-slate-400 text-slate-700 focus:outline-none"
                placeholder={title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-col mt-3">
              <label htmlFor="desc" className="-mb-2 text-xs">
                Set Description
              </label>
              <input
                id="desc"
                className="border-b-2 border-slate-400 text-slate-700 focus:outline-none"
                placeholder={description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 justify-between mt-3">
              <label htmlFor="cta" className="-mb-2 text-xs">
                Set CTA
              </label>
              <input
                id="cta"
                className="border-b-2 border-slate-400 text-slate-700 focus:outline-none"
                placeholder={cta}
                value={cta}
                onChange={(e) => setCta(e.target.value)}
              />
            </div>
            <div className="flex mt-3">
              <div className="mt-2">
                <input
                  placeholder="file"
                  type="file"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="mt-2">
              <button
                onClick={handleSave}
                className="bg-slate-500 text-white drop-shadow-lg p-1 rounded-md hover:bg-slate-800 transition-all w-full"
              >
                Save Banner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdiBannerTemplate;
