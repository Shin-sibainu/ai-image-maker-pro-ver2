"use client";

import { supabase } from "@/app/utils/supabaseClient";
import Image from "next/image";
import React from "react";

const Signup = () => {
  const handleSubmit = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="mt-10 mx-auto w-full flex items-center justify-center flex-col">
      <h2 className="font-bold text-3xl mb-6">新規登録</h2>
      <div className="shadow-md rounded-sm bg-white py-4 px-6 w-full sm:max-w-lg lg:max-w-xl text-center">
        {/* コンテナの最大幅をスモールサイズではmax-w-lg、ラージサイズではmax-w-xlに設定 */}
        <div>
          <p className="text-xl font-medium">AI画像生成ツールProへようこそ！</p>
        </div>

        <div className="my-4">
          <button
            onClick={handleSubmit}
            className="flex justify-center w-4/5 gap-2 items-center bg-slate-900 mx-auto px-4 py-2 rounded-md"
          >
            <Image src="/google.png" width={30} height={30} alt="google_icon" />
            <span className="text-white">Googleで新規登録</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
