import Image from "next/image";
import React, { useState } from "react";

type AIStyleCardProps = {
  styleTitle: string;
  description: string;
  imageUrl: string;
  setStyleTitle: any;
  isSelected: boolean;
  setDescription: any;
};

const AIStyleCard = ({
  styleTitle,
  imageUrl,
  setStyleTitle,
  isSelected,
  description,
  setDescription,
}: AIStyleCardProps) => {
  const handleClick = () => {
    setStyleTitle(styleTitle);
    setDescription(description);
  };

  return (
    <div className="text-center">
      <button
        className={`inline-block ${
          isSelected ? "border-2 border-green-400 rounded-md" : ""
        }`} // 条件に基づくクラスの適用
        onClick={handleClick}
      >
        <Image
          src={imageUrl}
          width={120}
          height={110}
          alt="logo"
          className="rounded-t-md" // 画像の上部に丸みを適用
          priority
        />
        <div>
          <span className="block bg-slate-400 rounded-b-md font-medium text-base">
            {/* 丸みを適用 */}
            {styleTitle}
          </span>
        </div>
      </button>
    </div>
  );
};

export default AIStyleCard;
