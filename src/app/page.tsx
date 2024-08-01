"use client";
import BannerImageComp from "../components/BannerImzComp/BannerImzComp";
import { useState, useEffect } from "react";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs/EditBannerTemplateBs";
import { UserProvider } from "../context/ModalContext";
const HomePage = () => {
  return (
    <UserProvider>
      <div className=" flex items-center flex-col">
        <h1 className="mt-2 font-bold text-xl">Create Your Brand's Banner </h1>
        <p className="text-[15px] mb-2">We are for you</p>
        <div className="w-[80%] mt-2 mb-10">
          <BannerImageComp />
        </div>
      </div>
    </UserProvider>
  );
};

export default HomePage;
