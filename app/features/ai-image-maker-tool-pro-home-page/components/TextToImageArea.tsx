import Image from "next/image";
import Link from "next/link";
import React from "react";

const TextToImageArea = () => {
  return (
    <div className="px-6 py-6">
      <div>
        <h2 className="text-xl font-semibold">テキストからAI画像生成</h2>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 py-4 gap-5">
        <div className="mx-auto">
          <Link href={"/text-to-image/sns-icon-maker"} className="group">
            {/* ここでaタグにクラス名を適用 */}
            <Image
              src="/ai-home-page/sns-icon-maker-thumbnail.png"
              alt="sns-icon-maker"
              width={360}
              height={180}
              className="rounded-t-md"
            />
            <div className="py-2 bg-slate-300 rounded-b-md shadow-lg group-hover:shadow-none duration-150">
              <p className="text-center font-semibold">SNSアイコンメーカー</p>
            </div>
          </Link>
        </div>
        {/* <div className="mx-auto">
          <Link
            href={"/text-to-image/youtube-thumbnail-maker"}
            className="group"
          >
            <Image
              src="/ai-home-page/youtube-thumnail-maker-thumbnail.png"
              alt="sns-icon-maker"
              width={360}
              height={180}
              className="rounded-t-md"
            />
            <div className="py-2 bg-slate-300 rounded-b-md shadow-lg group-hover:shadow-none duration-150">
              <p className="text-center font-semibold">
                Youtubeサムネイルメーカー
              </p>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default TextToImageArea;
