import Link from 'next/link';
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa';

export default function Page() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 h-full p-5 text-black">
            <div className="text-left font-bold text-lg">
              <span className="text-green-500">Posts</span>Api
            </div>
            <div className="py-5">
              <h2 className="text-3xl font-bold text-green-500 mb-7 m-5">
                Create Your Account
              </h2>

              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>

                  <FaRegUser className="text-gray-400 m-2" />
                  <input type="name" name="name" placeholder="Name" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-5'>
                  <FaRegEnvelope className="text-gray-400 m-2 " />
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
                  REGISTER
                </a>
                <div className='mt-5 text-xs flex justify-between items-center text-green flex justify-between'>
                  <p>Already have an account?</p>
                  <Link href="/login" className='mx-2 p-1 px-4 bg-white border rounded-xl hover:scale-110 duration-300 hover:bg-green-500 hover:text-white  text-green-500'>Login</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl flex flex-col justify-center rounded-br-2xl px-12">
            <h2 className="text-3xl font-bold mb-2">Get started now</h2>
            <div className="border-2 w-full border-white inline-block mb-2"></div>
            <p className="mb-10">Join to share your ideas with the world!</p>
            {/* <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
                Sign Up
              </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}