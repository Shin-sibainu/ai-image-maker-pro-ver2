import Image from "next/image";
import React, { SetStateAction } from "react";

const AIHomePage = ({
  setActiveArea,
}: {
  setActiveArea: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="px-6 py-6">
      <div>
        <h2 className="text-3xl font-semibold mb-1">AI画像生成ツールPro</h2>
        <p>
          難しいプロンプトの知識がない方でも簡単にAI画像生成ができるサービスです。
        </p>
      </div>

      {/* 区切り線を挿入 */}
      <hr className="mt-3 border-t border-gray-300" />

      <div className="grid md:grid-cols-4 md:grid-rows-2 py-4 gap-5">
        <div className="mx-auto">
          <button
            onClick={() => setActiveArea("textToImage")}
            className="group"
          >
            {/* ここでaタグにクラス名を適用 */}
            <Image
              src="/ai-home-page/text-to-image.png"
              alt="sns-icon-maker"
              width={380}
              height={380}
              className="rounded-t-md"
              priority
            />
            <div className="py-2 bg-slate-300 rounded-b-md shadow-lg group-hover:shadow-none duration-150">
              <p className="text-center font-semibold">テキスト ➡ AI画像</p>
            </div>
          </button>
        </div>
        <div className="mx-auto">
          <button
            onClick={() => setActiveArea("imageToImage")}
            className="group"
          >
            {/* ここでaタグにクラス名を適用 */}
            <Image
              src="/ai-home-page/image-to-image.png"
              alt="sns-icon-maker"
              width={360}
              height={180}
              className="rounded-t-md"
              priority
            />
            <div className="py-2 bg-slate-300 rounded-b-md shadow-lg group-hover:shadow-none duration-150">
              <p className="text-center font-semibold">画像 ➡ AI画像</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIHomePage;
