import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    
    <Navbar className='shadow-lg'>
      <Navbar.Toggle className='ml-3' />

      <Navbar.Brand>
        <img src={logo} className="mr-3 h-9 sm:h-9" alt="Company Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-serif">ARCANA CANDLES</span>
      </Navbar.Brand>
      
      <div className="flex md:order-2">
        <Button className='w-12 h-10 lg:hidden mr-3' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <Button className='w-12 h-10 sm:inline mr-3' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='pinkToOrange'>Sign In</Button>
        </Link> 
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/products">Products</Navbar.Link>
        <Navbar.Link href="/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/about">About Us</Navbar.Link>
      </Navbar.Collapse>

      <form>
        <TextInput
          type='text'
          placeholdProductser='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

    </Navbar>
  );
}