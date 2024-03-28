"use client";

import Image from "next/image";
import React from "react";
import { TailSpin } from "react-loader-spinner";

type AIImageOutputAreaProps = {
  AIImage1: string;
  AIImage2: string;
  isLoading: boolean;
  defaultImageSrc: string;
};

const AIImageOutputArea = ({
  AIImage1,
  AIImage2,
  isLoading,
  defaultImageSrc,
}: AIImageOutputAreaProps) => {
  return (
    <div>
      {isLoading && (
        <span className="text-white block text-center md:text-xl px-4 mt-4">
          画像生成中です。10~20秒ほどかかる場合があります。
        </span>
      )}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-7 px-6 py-8">
        <div className="bg-gray-600 flex justify-center items-center rounded-md max-w-full w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[574px] lg:h-[574px]">
          {isLoading ? (
            <TailSpin color="#00BFFF" height={80} width={80} />
          ) : (
            <a href={AIImage1} download={AIImage1} target="_blank">
              <Image
                src={AIImage1}
                width={AIImage1 === defaultImageSrc ? 72 : 574}
                height={AIImage1 === defaultImageSrc ? 72 : 574}
                alt="Generated AI Image or Default Icon"
                priority={true}
                crossOrigin="anonymous"
              />
            </a>
          )}
        </div>

        {/* 2つ目の画像出力箇所 */}
        <div className="bg-gray-600 flex justify-center items-center rounded-md max-w-full w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[574px] lg:h-[574px]">
          {isLoading ? (
            <TailSpin color="#00BFFF" height={80} width={80} />
          ) : (
            <a href={AIImage2} download={AIImage2} target="_blank">
              <Image
                src={AIImage2}
                width={AIImage2 === defaultImageSrc ? 72 : 574}
                height={AIImage2 === defaultImageSrc ? 72 : 574}
                alt="Generated AI Image or Default Icon"
                priority={true}
                crossOrigin="anonymous"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIImageOutputArea;
