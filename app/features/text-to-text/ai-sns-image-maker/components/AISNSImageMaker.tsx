"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AIImageOutputArea from "./AIImageOutputArea";
import { openai } from "../libs/opneAIClient";
//platform.openai.com/docs/guides/images/usage?context=node

const AISNSImageMaker = () => {
  //Sidebar用
  const [customPrompt, setCustomPrompt] = useState("");
  const [styleTitle, setStyleTitle] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false); // プロセスの完了状態

  //AIImageOutputArea用
  const defaultImageSrc =
    "/ai-style-image/ai-sns-image-maker/defaultAIImageIcon.png"; // デフォルト画像のパス
  const [AIImage1, setAIImage1] = useState<string>(defaultImageSrc);
  const [AIImage2, setAIImage2] = useState<string>(defaultImageSrc);
  const [isLoading, setIsLoading] = useState<boolean>(false); // ローディング状態管理用

  //test display image
  const lazyLoadImage = async () => {
    setIsComplete(false);
    setProgress(0);
    setIsLoading(true);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 10;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true); // プロセス完了をマーク
          setTimeout(() => {
            setIsComplete(false); // 完了状態をリセット
            setProgress(0); // 進捗度をリセット
          }, 2000); // 2秒後にリセット
          return 100;
        }
        return nextProgress;
      });
    }, 200);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setAIImage1("https://via.placeholder.com/150");
    setIsLoading(false);

    setProgress(100); // 進捗度を100%に設定
  };

  const createSNSAIImage = async (
    prompt: string,
    setImage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setIsLoading(true);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    if (response.data[0].url) {
      setImage(response.data[0].url);
    } else {
      console.error("Image URL is undefined");
    }
    setIsLoading(false);
  };

  const handleClick = async () => {
    // let prompt = `Create a single, distinct SNS icon image based on "${customPrompt}", embodying the style of ${description}. The icon should be optimized for social media use, centrally positioned with a plain or transparent background, ensuring it's suitable for profile pictures without any additional elements or distractions.`;
    // let prompt = `Create a single SNS icon image based on "${customPrompt}", which embodies the style of ${description}. The icon should be the only element in the image, centrally positioned on a pure white background. Ensure the output contains only one icon with no other elements or distractions, making it ideal for social media profile pictures.`;
    // let prompt = `Create a high-resolution, single SNS icon image based on "${customPrompt}", which embodies the style of ${description}. The icon, centered and isolated, should be on a pure white background, with no additional images, icons, or elements. This icon is intended for use as a standalone profile picture on social media, and should be clearly recognizable and distinct at a small size.`;
    // let prompt = `Generate a single, standalone icon for an SNS profile picture, based on "${customPrompt}", in the style of ${description}. The icon should be clearly focused in the center of a pure white background, with no other icons or elements present. It is crucial that only one icon is featured, without any repetition or additional icons.`;
    // let prompt = `Generate a single icon for an SNS profile picture, based on '${customPrompt}', styled as described in '${description}'. The icon should be clearly centered on a pure white background, with no other elements or icons present. It's essential that the focus is solely on this single icon, with no repetition or additional elements.
    // `;
    let prompt = `Create a single, visually striking image for use as an SNS profile picture, inspired by '${customPrompt}' and designed according to '${description}'. The image should be centered against a pure single color background, with no additional graphics, symbols, icon, or elements. It's crucial that the design remains focused on creating a singular, impactful visual representation suitable for an SNS account.
    `;

    // 最初の画像生成
    await createSNSAIImage(prompt, setAIImage1);
    // 2つ目の画像生成
    // await createSNSAIImage(prompt, setAIImage2); // 2つ目のプロンプトを異なるものに

    //loading(sample)
    // await lazyLoadImage();
  };

  return (
    <div className="md:flex w-full" style={{ minHeight: "calc(100vh - 68px)" }}>
      <div className="lg:w-1/4 bg-gray-700">
        <Sidebar
          handleClick={handleClick}
          setCustomPrompt={setCustomPrompt}
          setStyleTitle={setStyleTitle}
          setDescription={setDescription}
          progress={progress}
          isComplete={isComplete}
        />
      </div>
      <div
        className="lg:w-3/4 bg-slate-900 w-full flex flex-col justify-center"
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
        <AIImageOutputArea
          defaultImageSrc={defaultImageSrc}
          AIImage1={AIImage1}
          AIImage2={AIImage2}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default AISNSImageMaker;
