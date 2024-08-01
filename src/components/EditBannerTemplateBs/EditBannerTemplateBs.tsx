import React, { FC, useState } from "react";
import BannerTemplate_1 from "../AllBannerTemplates/BannerTemplate_1/BannerTemplate_1";
import { useModal } from "@/context/ModalContext";

interface ModalProps {
  isOpen: boolean;
  setTitle: (title: string) => void;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  description: string;
  cta: string;
  image: File;
  background: string;
  setDescription: (description: string) => void;
  setCta: (cta: string) => void;
  setImage: (image: File) => void;
  setBackground: (background: string) => void;
}

const EdiBannerTemplate: FC<ModalProps> = ({
  title,
  description,
  cta,
  image,
  background,
  setTitle,
  setDescription,
  setCta,
  setImage,
  setBackground,
  children,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  if (!isModalOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50 ">
      <div>
        <div className="bg-white rounded-lg shadow-lg w-full xl:max-h-full  max-w-screen-sm lg:max-h-[500px]  mx-2 overflow-x-hidden overflow-auto p-4">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Edit Banner</h2>
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
            <div className="flex justify-center">{children}</div>
            <div className="mt-1">
              <div className="flex  gap-2 flex-col">
                <label htmlFor="title" className="-mb-2 text-xs">
                  Set Title
                </label>
                <input
                  id="title "
                  className="border-b-2 border-slate-400 text-slate-700 focus:outline-none"
                  placeholder={title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex  gap-2 flex-col mt-3">
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
              <div className="flex flex-col  gap-2 justify-between mt-3">
               
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
              <div className="flex  gap-2 justify-between mt-3">
                <div className="mt-2">
                  <input
                    placeholder="file"
                    type="file"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdiBannerTemplate;
