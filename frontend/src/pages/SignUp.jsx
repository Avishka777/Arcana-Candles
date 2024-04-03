import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cover from '../assets/cover.png';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-10'>
      <div className='flex p-3 max-w-7xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        
        {/* left */}
        <div className='flex-1 flex flex-col items-center justify-center mx-8'>
          <img src={logo} className="h-28 sm:h-36" alt="Company Logo" />
          <p className='text-lg mt-5 text-center'>
            Elevate Your Space, Enhance Your Mood, and Embrace Pure Bliss...
          </p>
          <img src={cover} className="mr-3 h-0 sm:h-80 rounded-lg shadow-2xl p-2 mt-5 min-w-max" alt="Cover Picture" />
        </div>
        
        {/* right */}
        <div className='flex-1 mx-8'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='First Name :' />
              <TextInput type='text' placeholder='Enter First Name' id='firstName' className='mt-1' required/>
            </div>
            <div>
              <Label value='Last Name :' />
              <TextInput type='text' placeholder='Enter Last Name' id='lastName' className='mt-1' required/>
            </div>
            <div>
              <Label value='User Name :' />
              <TextInput type='text' placeholder='Enter User Name' id='userName' className='mt-1' required/>
            </div>
            <div>
              <Label value='Email :' />
              <TextInput type='text' placeholder='Enter Email Address' id='email' className='mt-1' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Enter Valid Email Address"/>
            </div>
            <div>
              <Label value='Mobile :' />
              <TextInput type='text' placeholder='Enter Mobile Number' id='mobile' className='mt-1'pattern="\d{10}" title="Mobile number should be 10 digits long" />
            </div>
            <div>
              <Label value='Address :' />
              <TextInput type='text' placeholder='Enter Home Address' id='address' className='mt-1'/>
            </div>
            <div>
              <Label value='Password :' />
              <TextInput type='text' placeholder='Enter Password' id='password' className='mt-1'/>
            </div>
            <Button gradientDuoTone='pinkToOrange' type='submit'>
              Create Account
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}