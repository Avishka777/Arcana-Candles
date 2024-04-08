"use client";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/logo.png';

export default function Footers() {
    
    return (
        <Footer container className="h-50 sm:h-50">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="">
                <img src={logo} className="mr-3 h-20 sm:h-20 ml-20 mb-2" alt="Company Logo" />
                <span className="whitespace-nowrap text-lg font-semibold dark:text-white font-serif ml-6">ARCANA CANDLES</span>
                
                <div className="flex gap-1 mt-2">
                  <a onClick={() => openWhatsApp('+94760733387', 'Hello, I am interested in your products.')}   target="_blank" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icon-whatsapp.png?alt=media&token=1411bd85-c589-47e5-acb7-4995942db8bd" className="sm:h-14 h-14 sm:w-auto rounded-lg p-1  " alt="Whatsapp Icon" />
                  </a>
                  <a href='https://web.facebook.com/profile.php?id=61556755573437&mibextid=ZbWKwL&_rdc=1&_rdr'  target="_blank" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icon-facebook.png?alt=media&token=15165aa2-db82-444c-8afe-299f2f0e8fd4" className="sm:h-14 h-14 sm:w-auto rounded-lg p-1 " alt="Facebook Icon" />
                  </a>
                  <a href='https://www.instagram.com/arcana.candles.lk?igsh=N3UxbWFrcDRscHl6'  target="_blank" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icon-instagram.png?alt=media&token=77874823-29e4-4822-8f1c-ce5e2b750bb6" className="sm:h-14 h-14 sm:w-auto rounded-lg p-1 " alt="Instagram Icon" />
                  </a>
                  <a href='https://www.tiktok.com/@arcana.candles.lk?_t=8kr9uO37df6&_r=1'  target="_blank" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/arcana-candles.appspot.com/o/icon-tiktok.png?alt=media&token=794ac175-9e82-4830-be15-b5b26ae5d91f" className="sm:h-14 h-14 sm:w-auto rounded-lg p-1 " alt="Tiktok Icon" />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-0 sm:mt-4 sm:grid-cols-2 sm:gap-6 ">
                <div className='hidden lg:inline'>
                  <Footer.Title title="Contact Us" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Mobile - +94 76 0733 387</Footer.Link>
                    <Footer.Link href="#">Email - brandsphere.contact@gmail.com</Footer.Link>
                    <Footer.Link href="#">Address - Colombo, Sri Lanka</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className='hidden lg:inline'>
                  <Footer.Title title="Our Policies" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Refund Policy</Footer.Link>
                    <Footer.Link href="#">Terms of Service</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between font-serif">
              <Footer.Copyright href="#" by="2024 ARCANA CANDLES . All Rights Reserved.™" />
              <p className="text-teal-600 text-sm font-serif">Designed and Developed by Avishka Rathnakumara</p>
            </div>
          </div>
        </Footer>
      );
}
