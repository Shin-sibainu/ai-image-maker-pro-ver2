import React, { SetStateAction } from "react";

type SidebarProps = {
  setActiveArea: React.Dispatch<SetStateAction<string>>;
  activeArea: string;
};

const Sidebar = ({ setActiveArea, activeArea }: SidebarProps) => {
  return (
    <div className="px-4 py-4 flex flex-col">
      <div
        onClick={() => setActiveArea("home")}
        className={`${
          activeArea === "home" ? "bg-slate-400" : "hover:bg-slate-400"
        } duration-150 px-2 py-4 cursor-pointer rounded-md`}
      >
        <p className="font-semibold">Home</p>
      </div>
      <div
        onClick={() => setActiveArea("textToImage")}
        className={`${
          activeArea === "textToImage" ? "bg-slate-400" : "hover:bg-slate-400"
        } duration-150 px-2 py-4 cursor-pointer rounded-md`}
      >
        <p className="font-semibold">テキストからAI画像生成</p>
      </div>
      <div
        onClick={() => setActiveArea("imageToImage")}
        className={`${
          activeArea === "imageToImage" ? "bg-slate-400" : "hover:bg-slate-400"
        } duration-150 px-2 py-4 cursor-pointer rounded-md`}
      >
        <p className="font-semibold">画像からAI画像生成</p>
      </div>
    </div>
  );
};

export default Sidebar;
