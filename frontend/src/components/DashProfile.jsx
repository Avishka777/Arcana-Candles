import { Button, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  
  return (
    
    <div className='max-w-4xl mx-auto p-3 w-full'>
      <div className='mt-10'>
          <h1 className="text-3xl text-red-600 text-center font-serif uppercase"> - Update User details - </h1>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
      </div>
      <form className='flex flex-col gap-4'>
        
        <div className='w-40 h-40 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
          <img src={currentUser.profilePicture} alt='user' className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'/>
        </div>
        <TextInput type='text' id='firstName'  placeholder='First Name' defaultValue={currentUser.firstName} />
        <TextInput type='text' id='lastName'  placeholder='Last Name' defaultValue={currentUser.lastName} />
        <TextInput type='text' id='userName'  placeholder='User Name' defaultValue={currentUser.userName} />
        <TextInput type='text' id='mobile' placeholder='Mobile Number' defaultValue={currentUser.mobile} />
        <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} />
        <TextInput type='text' id='address'  placeholder='Address' defaultValue={currentUser.address} />
        <TextInput type='password' id='password' placeholder='password' />
        
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>
            Update Details
        </Button>
      </form>
      
      <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  );
}