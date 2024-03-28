"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className="w-full bg-slate-900">
      <div className="py-5 sm:px-8 px-3 flex justify-between bg-slate-800 items-center">
        <Link href={"/"} className="font-bold text-white sm:text-xl">
          AI画像生成ツールPro
        </Link>

        {/* <nav>
          <ul>
            <li className="flex items-center sm:gap-6 gap-2">
              {loggedIn ? (
                <>
                  <Link
                    href={"/plans"}
                    className="text-white bg-green-500 sm:px-4 px-2 sm:py-2 py-1 rounded-md border-2 border-white-600 duration-200 hover:bg-white text-sm font-medium sm:text-base hover:text-green-600 hover:border-green-600"
                  >
                    アップグレード
                  </Link>
                  <Link href={"/profile"} className="">
                    <Image
                      src="/defaultUserIcon.png"
                      width={50}
                      height={50}
                      alt="icon_image"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={"/auth/login"}
                    className="text-white bg-black sm:px-4 px-2 sm:py-2 py-1 rounded-md border-2 border-slate-100 duration-200 hover:bg-white hover:text-black text-sm sm:text-base"
                  >
                    ログイン
                  </Link>
                  <Link
                    href={"/auth/register"}
                    className="text-black bg-white sm:px-4 px-2 sm:py-2 py-1 rounded-md border-2 border-black hover:bg-black duration-200 hover:text-white text-sm sm:text-base"
                  >
                    新規登録
                  </Link>
                </>
              )}
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
