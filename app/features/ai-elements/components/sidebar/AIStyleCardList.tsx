import React, { useState } from "react";
import AIStyleCard from "./AIStyleCard";
import aiStyleCardData from "../../../text-to-text/ai-sns-image-maker/constant/ai-style-card.json";

const AIStyleCardList = ({
  setStyleTitle,
  setDescription,
}: {
  setStyleTitle: any;
  setDescription: any;
}) => {
  // 現在選択されているスタイルのタイトルを状態として管理
  const [selectedStyleTitle, setSelectedStyleTitle] = useState("");

  // 選択されたスタイルのタイトルを更新する関数
  const handleSetStyleTitle = (styleTitle: string) => {
    setSelectedStyleTitle(styleTitle); // 選択されたスタイルのタイトルを更新
    setStyleTitle(styleTitle); // 親コンポーネントまたは他の状態管理ロジックへの変更を伝達
  };

  return (
    <div className="grid grid-cols-3 gap-2 lg:gap-1 lg:gap-y-7">
      {aiStyleCardData.map((card, index) => (
        <AIStyleCard
          key={index}
          styleTitle={card.styleTitle}
          description={card.description}
          imageUrl={card.imageUrl}
          setDescription={setDescription}
          setStyleTitle={handleSetStyleTitle} // カードクリック時の処理関数を渡す
          isSelected={selectedStyleTitle === card.styleTitle} // 選択状態を伝える
        />
      ))}
    </div>
  );
};

export default AIStyleCardList;
