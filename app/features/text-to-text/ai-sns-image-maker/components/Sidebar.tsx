import AIStyleCardList from "@/app/features/ai-elements/components/sidebar/AIStyleCardList";
import TextInput from "@/app/features/ai-elements/components/sidebar/TextInput";
import React from "react";

type SidebarProps = {
  handleClick: () => void;
  setCustomPrompt: React.Dispatch<React.SetStateAction<string>>;
  setStyleTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  progress: number;
  isComplete: boolean;
};

const Sidebar = ({
  handleClick,
  setCustomPrompt,
  setStyleTitle,
  setDescription,
  progress,
  isComplete,
}: SidebarProps) => {
  const calculateGradient = () => {
    // 進捗度に応じて色相を変化（薄緑から薄紫へ）
    const hueStart = 120; // 薄緑の色相
    const hueEnd = 270; // 薄紫の色相
    const hue = hueStart + (hueEnd - hueStart) * (progress / 100);
    const colorProgress = `hsl(${hue}, 75%, 65%)`; // 彩度75%、明度65%に設定

    // グラデーションの設定
    const gradient = `linear-gradient(to right, ${colorProgress} ${progress}%, hsl(${hueStart}, 75%, 65%) ${progress}%)`;

    return {
      background: gradient,
      transition: "background 0.5s ease", // グラデーションの変化を滑らかに
    };
  };

  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-center">
        <h2 className="text-xl text-white font-bold">
          SNSアイコン画像メーカー
        </h2>
      </div>
      <div className="mt-5">
        <TextInput setCustomPrompt={setCustomPrompt} />
      </div>

      <div>
        <p className="text-white mb-2">スタイル</p>
        <AIStyleCardList
          setStyleTitle={setStyleTitle}
          setDescription={setDescription}
        />
      </div>

      <div className="mt-5">
        <button
          onClick={handleClick}
          style={calculateGradient()} // 進捗度に基づくスタイルを適用
          className="bg-green-300 px-3 py-4 rounded-md font-bold hover:bg-green-400 duration-200"
        >
          生成する(あとn回まで無料)
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
