"use client";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/logo.png';

export default function Footers() {
    
    return (
        <Footer container className="h-50 sm:h-50">
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="ml-10">
                <img src={logo} className="mr-3 h-20 sm:h-20 ml-14 mb-2" alt="Company Logo" />
                <span className="whitespace-nowrap text-lg font-semibold dark:text-white font-serif">ARCANA CANDLES</span>
                
                <div className="flex gap-5 mt-4">
                  <Footer.Icon href="https://www.facebook.com/profile.php?id=61556755573437" icon={BsFacebook} target="_blank" />
                  <Footer.Icon href="https://www.instagram.com/arcana.candles.lk/" icon={BsInstagram} target="_blank" />
                  <Footer.Icon href="#" icon={BsTwitter} target="_blank"  />
                  <Footer.Icon href="https://github.com/Avishka777" icon={BsGithub} target="_blank"  />
                  <Footer.Icon href="#" icon={BsDribbble} target="_blank" />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-0 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
                <div className='hidden lg:inline'>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">xxxxxxxxxxx</Footer.Link>
                    <Footer.Link href="#">xxxxxxxxxxx</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div className='hidden lg:inline'>
                  <Footer.Title title="Contact Us" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Mobile - +94 76 0733 387</Footer.Link>
                    <Footer.Link href="#">Email - </Footer.Link>
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
