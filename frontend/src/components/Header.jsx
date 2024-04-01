import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Header() {
    const path = useLocation().pathname;
  return (
    
    <Navbar className='border-b-2'>
      
      <Navbar.Toggle />

      <Navbar.Brand href="#">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="SLIIT Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ARCANA CANDLES</span>
      </Navbar.Brand>
      
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to='/products'>Products</Link>
        </Navbar.Link>
      </Navbar.Collapse>

      <form>
        <TextInput
          type='text'
          placeholdProductser='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2 '>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>Sign In</Button>
        </Link>
        
      </div>
      
    </Navbar>
  );
}