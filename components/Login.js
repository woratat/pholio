import React from 'react';
import Image from 'next/image';
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image 
                src="https://links.papareact.com/t4i" //********* */
                height={200}
                width={200}
                objectFit="contain"
            />
            <h1 className="p-3 bg-blue-500 rounded-full text-white text-center cursor-pointer " 
            onClick={() => signIn()}>
                Login with Facebook
            </h1>
            <LoginForm/>
        </div>
    );
}

export default Login;
