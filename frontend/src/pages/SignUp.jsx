import logo from '../assets/logo.png';
import cover from '../assets/cover.png';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!formData.firstName || 
        !formData.lastName || 
        !formData.userName || 
        !formData.email || 
        !formData.mobile ||
        !formData.address ||
        !formData.password
    ) {
      return setErrorMessage('Please Fill Out All Fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='First Name :' />
              <TextInput type='text' placeholder='Enter First Name' id='firstName' className='mt-1' required onChange={handleChange}/>
            </div>
            <div>
              <Label value='Last Name :' />
              <TextInput type='text' placeholder='Enter Last Name' id='lastName' className='mt-1' required onChange={handleChange}/>
            </div>
            <div>
              <Label value='User Name :' />
              <TextInput type='text' placeholder='Enter User Name' id='userName' className='mt-1' required onChange={handleChange}/>
            </div>
            <div>
              <Label value='Email :' />
              <TextInput type='email' placeholder='Enter Email Address' id='email' className='mt-1' required onChange={handleChange}/>
            </div>
            <div>
              <Label value='Mobile :' />
              <TextInput type='text' placeholder='Enter Mobile Number' id='mobile' className='mt-1'required pattern="\d{10}" title="Mobile number should be 10 digits long" onChange={handleChange}/>
            </div>
            <div>
              <Label value='Address :' />
              <TextInput type='text' placeholder='Enter Home Address' id='address' className='mt-1' required onChange={handleChange}/>
            </div>
            <div>
              <Label value='Password :' />
              <TextInput type='password' placeholder='Enter Password' id='password' className='mt-1' required onChange={handleChange}/>
            </div>
            <Button
              gradientDuoTone='pinkToOrange'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}