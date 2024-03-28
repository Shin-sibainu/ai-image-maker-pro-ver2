"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async () => {
    // todo dataの処理
    // router.push("/auth/login");
  };

  return (
    <main className="p-20 bg-gray-200 w-full">
      <section className="bg-white flex flex-col items-center py-32">
        <h2 className="text-5xl">Ready to take a free trial?</h2>
        <p className="mt-7 text-3xl text-center w-10/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>

        <form
          className="border mt-20 p-16 w-6/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-2xl">Sign up for a free account</h3>

          <div className="mt-11 flex w-full max-w-2xl justify-between">
            <div className="w-5/12">
              <input
                className="border w-full h-10 placeholder:text-sm p-2"
                type="text"
                placeholder="First name"
                {...register("firstName", {
                  required: "名前は必須です",
                  minLength: {
                    value: 1,
                    message: "1文字以上入力してください",
                  },
                  maxLength: {
                    value: 20,
                    message: "20文字以内で入力してください",
                  },
                })}
              />
              {errors.firstName && (
                <span className="text-red-600 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="w-5/12">
              <input
                className="border w-full h-10 placeholder:text-sm p-2"
                type="text"
                placeholder="Last name"
                {...register("lastName", {
                  required: "名字は必須です",
                  minLength: {
                    value: 1,
                    message: "1文字以上入力してください",
                  },
                  maxLength: {
                    value: 20,
                    message: "20文字以内で入力してください",
                  },
                })}
              />
              {errors.lastName && (
                <span className="text-red-600 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          <div className=" mt-6">
            <input
              type="email"
              placeholder="Email address"
              className="block border h-10 placeholder:text-sm p-2 w-full"
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "不適切なアドレスです",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className=" mt-6">
            <input
              type="password"
              placeholder="Create password"
              className="block border h-10 placeholder:text-sm p-2 w-full"
              {...register("password", {
                required: "パスワードは必須です",
                minLength: {
                  value: 6,
                  message: "6文字以上入力してください",
                },
                maxLength: {
                  value: 30,
                  message: "30文字以内で入力してください",
                },
              })}
            />

            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <button className="mt-6 bg-sky-500 h-10 text-sm w-32 text-white rounded-md">
            Register
          </button>
        </form>
      </section>

      <div className="bg-white mt-10 flex items-center py-32 px-20">
        <p className="w-2/3 text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>

        <button className=" ml-10 bg-sky-500 h-12 text-sm w-48 text-white rounded-md">
          Join Today
        </button>
      </div>

      <div className="bg-white mt-10 flex items-center py-32 px-20">
        <p className="w-2/3 text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>

        <button className="bg-sky-500 h-12 text-sm w-48 text-white rounded-md">
          Join Today
        </button>
        <button className="ml-10 bg-white h-12 text-sm w-48 text-sky-500 rounded-md border border-sky-500">
          Contact us
        </button>
      </div>
    </main>
  );
};

export default Signup;
