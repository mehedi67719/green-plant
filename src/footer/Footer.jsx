
import React from 'react';

import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



const Footer = () => {
    


    return (
        <footer className="bg-green-800 text-white py-10 px-4 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-green-700 pb-8">
                
            
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center space-x-2 text-2xl font-bold text-white mb-3">
                        <span role="img" aria-label="leaf icon">🌿</span> 
                        <span>GreenNest</span>
                    </div>
                    <p className="text-sm text-green-200 leading-relaxed">
                        Thsiou emsintmtnt emd ealst aevnet bat hs voew isdiorve et iord qbrntd to bta tho blou dinodntiea tseks.
                    </p>
                </div>
                
               
                <div>
                    <h5 className="text-lg font-semibold mb-4 text-white">Quick Links</h5>
                    <ul className="space-y-2 text-sm text-green-200">
                        <li><a href="/about" className="hover:text-white transition duration-150">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition duration-150">Contact</a></li>
                        <li><a href="/privacy" className="hover:text-white transition duration-150">Privacy Policy</a></li>
                       
                        <li><a href="/faq" className="hover:text-white transition duration-150">FAQ</a></li> 
                    </ul>
                </div>

               
                <div>
                    <h5 className="text-lg font-semibold mb-4 text-white">Resources</h5>
                    <ul className="space-y-2 text-sm text-green-200">
                        <li><a href="/blog" className="hover:text-white transition duration-150">Blog</a></li>
                        <li><a href="/careers" className="hover:text-white transition duration-150">Careers</a></li>
                        <li><a href="/sitemap" className="hover:text-white transition duration-150">Sitemap</a></li>
                    </ul>
                </div>
                
             
                <div className="md:col-span-1">
                    <h5 className="text-lg font-semibold mb-4 text-white">Connect With Us</h5>
                    <div className="flex space-x-5 items-center">
                        <a href="https://www.facebook.com/"><FaFacebook  className='text-2xl font-bold'/></a>
                        <a href="https://www.instagram.com/"><FaInstagram className='text-2xl font-bold' /></a>
                        <a href="https://www.pinterest.com/"><FaPinterest className='text-2xl font-bold' /></a>
                    </div>
                </div>
                
            </div>
            
           
            <div className="mt-6 pt-4 text-center text-xs text-green-300">
           
                &copy; 2025 GreenNest. All rights reserved. | <span className="text-green-400">Nurture Your Sanctuary</span>
            </div>
        </footer>
    );
};

export default Footer;