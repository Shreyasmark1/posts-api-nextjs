import {FaFacebook,FaLinkedin,FaGoogle,FaRegEnvelope,FaRegUser} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';

export default function Page() {

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <head>
        <title>create next app</title>
        <link  rel="icon" href="/favicon.ico" />
      </head>


     <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 text-black">
          <div className="text-left font-bold">
            <span className="text-green-500">Company</span>Name
          </div>
         <div className="py-10">
          <h2 className="text-3xl font-bold text-green-500 mb-7 m-5">
            Create Your Account
          </h2>
         
          <div className='flex flex-col items-center'>
            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
              
              <FaRegUser className="text-gray-400 m-2" />
              <input type="name" name="name" placeholder="Name" className="bg-gray-100 outline-none text-sm flex-1" />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-4'>
              <FaRegEnvelope className="text-gray-400 m-2 " />
              <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
             
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-8'>
              <MdLockOutline className="text-gray-400 m-2 " />
              <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
              </div>
              <div className='flex justify-between w-64 mb-8'>
                <label className='flex items-center text-xs'><input type="checkbox" name="remember" className="mr-1"/>Remember me</label>
                {/* <a href="#" className='text-xs'>Forgot Password?</a> */}
              </div>
              <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">
         REGISTER
            </a>
          </div>
         </div>
          </div>

        {/* sign in section */}
        <div className="w-2/5 p-5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 "  >
          <img  className=" rounded-tr-2xl rounded-br-2xl object-fit:contain " src="https://i.pinimg.com/236x/44/44/22/4444221f2b6f0f0ad5ed47aa79178243.jpg"></img>
          
          </div>
      </div>
     </main> 
    </div>
    </>
  );
}