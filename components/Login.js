import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/client";
import LoginForm from "./LoginForm";
import "firebase/auth";

function Login() {
  
  return (
    <div className="flex flex-col place-items-center">
    <div className="flex  place-items-center justify-center">
      <div>
      <Image
        src="https://links.papareact.com/t4i" //********* */
        height={200}
        width={200}
        objectFit="contain"
      />
      {/* <h1
        className="p-3 bg-blue-500 rounded-lg text-white text-center cursor-pointer mb-5"
        onClick={() => signIn()}
      >
        Login with Facebook
      </h1> */}
      </div>
      
      <div>
      <Image
        src="/../public/google.png"
        height={120}
        width={200}
        objectFit="contain"
      />
      {/* <h1
        className="p-3 bg-red-500 rounded-lg text-white text-center cursor-pointer mt-8"
        onClick={() => signIn()}
      >
        Login with Google
      </h1> */}
      </div>
      
    </div>

    <h1
        className="p-3 bg-indigo-300 hover:bg-indigo-500 rounded-lg text-white text-center cursor-pointer m-8 w-3/12"
        onClick={() => signIn()}
      >
        Login
      </h1>
    </div>
  );
}

export default Login;
