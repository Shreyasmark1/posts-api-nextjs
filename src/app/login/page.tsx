'use client';

import Image from 'next/image';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import req from '../../assets/reg.png';
import Link from 'next/link';

export default function Page() {

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5  h-full p-5 text-black">
              <div className="text-left font-bold text-lg">
                <span className="text-green-500">Posts</span>Api
              </div>
              <div className="py-5">
                <h2 className="text-3xl font-bold text-green-500 mb-7">
                  Login in to Continue
                </h2>
                {/* <div className="border-2 w-10 border-green-500 inline-block mb-2"></div> */}
                <div className='flex flex-col items-center'>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                  </div>
                  <div className='bg-gray-100 w-64 p-2 flex items-center mb-4'>
                    <MdLockOutline className="text-gray-400 m-2 " />
                    <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                  </div>
                  <div className='flex justify-between w-64 mb-5'>
                    <label className='flex items-center text-xs'><input type="checkbox" name="remember" className="mr-1" />Remember me</label>
                    <a href="#" className='text-xs'>Forgot Password?</a>
                  </div>
                  {/* <div className='mt-4 grid grid-cols-3 items-center text-gray-400'>
                    <hr className='border-gray-400 px-9' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='border-gray-400 px-9  w-24 mb-19 ' />
                  </div> */}
                  <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white ">
                    Sign In
                  </a>
                  <div className='mt-5 text-xs flex justify-between items-center text-green flex justify-between mb-17 '>
                    <p>Don&apos;t have an account?</p>
                    <Link href="/register" className='mx-2 p-1 px-4 bg-white border rounded-xl hover:scale-110 duration-300 hover:bg-green-500 hover:text-white  text-green-500'>Register</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* sign in section */}
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl flex flex-col justify-center rounded-br-2xl px-12"  >
              <Image
                src={req}
                // onError={() => console.log("failed to load image")}
                // loader={() => `https://i.pinimg.com/236x/44/44/22/4444221f2b6f0f0ad5ed47aa79178243.jpg`}
                width={500}
                height={500}
                className="rounded-tr-2xl rounded-br-2xl object-fit:contain"
                alt="this is a image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}