import React from "react";

const TextInput = ({
  setCustomPrompt,
}: {
  setCustomPrompt: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <textarea
      placeholder="AIに生成してほしい内容を記述してください。(ex. cute cat, cool girl ...)"
      name=""
      id=""
      className="resize-none w-full h-48 rounded-md focus:outline-none px-2 py-2"
      onChange={(e) => setCustomPrompt(e.target.value)}
    ></textarea>
  );
};

export default TextInput;
