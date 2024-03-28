"use client";

import React, { useState } from "react";
import Sidebar from "../features/ai-image-maker-tool-pro-home-page/components/Sidebar";
import TextToImageArea from "../features/ai-image-maker-tool-pro-home-page/components/TextToImageArea";
import ImageToImageArea from "../features/ai-image-maker-tool-pro-home-page/components/ImageToImageArea";
import AIHomePage from "../features/text-to-text/ai-sns-image-maker/components/AIHomePage";

const AImageMakerToolPro = () => {
  const [activeArea, setActiveArea] = useState<string>("home");

  return (
    <div className="md:flex w-full" style={{ minHeight: "calc(100vh - 68px)" }}>
      <div className="lg:w-1/5 bg-slate-300">
        <Sidebar setActiveArea={setActiveArea} activeArea={activeArea} />
      </div>
      <div
        className="lg:w-4/5 bg-slate-200 w-full flex flex-col"
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
        {/* アクティブなエリアに応じてコンポーネントを切り替える */}
        {activeArea === "home" && <AIHomePage setActiveArea={setActiveArea} />}
        {activeArea === "textToImage" && <TextToImageArea />}
        {activeArea === "imageToImage" && <ImageToImageArea />}
      </div>
    </div>
  );
};

export default AImageMakerToolPro;
