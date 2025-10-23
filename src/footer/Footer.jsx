// src/components/Footer.js

import React from 'react';

// Social Media আইকনের জন্য একটি সাধারণ কম্পোনেন্ট
const SocialIcon = ({ icon, url }) => (
    <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        // আইকনটিকে বড় এবং সবুজ-সাদা ট্রানজিশন দেওয়া হলো
        className="text-2xl text-green-300 hover:text-white transition duration-200"
        aria-label={icon.name}
    >
        {icon.symbol}
    </a>
);

const Footer = () => {
    
    // সোশ্যাল মিডিয়া ডেটা
    const socialMedia = [
        { name: 'Instagram', symbol: '📸', url: '#instagram' }, 
        { name: 'Facebook', symbol: '👍', url: '#facebook' }, 
        { name: 'Pinterest', symbol: '📌', url: '#pinterest' }, 
    ];

    return (
        <footer className="bg-green-800 text-white py-10 px-4 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-green-700 pb-8">
                
                {/* Column 1: Logo & Description */}
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center space-x-2 text-2xl font-bold text-white mb-3">
                        <span role="img" aria-label="leaf icon">🌿</span> 
                        <span>GreenNest</span>
                    </div>
                    <p className="text-sm text-green-200 leading-relaxed">
                        Thsiou emsintmtnt emd ealst aevnet bat hs voew isdiorve et iord qbrntd to bta tho blou dinodntiea tseks.
                    </p>
                </div>
                
                {/* Column 2: Quick Links (রিকোয়ারমেন্ট অনুযায়ী ৩টি লিঙ্ক) */}
                <div>
                    <h5 className="text-lg font-semibold mb-4 text-white">Quick Links</h5>
                    <ul className="space-y-2 text-sm text-green-200">
                        <li><a href="/about" className="hover:text-white transition duration-150">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition duration-150">Contact</a></li>
                        <li><a href="/privacy" className="hover:text-white transition duration-150">Privacy Policy</a></li>
                        {/* FAQ লিঙ্কটি অপশনাল, তাই রাখা হলো */}
                        <li><a href="/faq" className="hover:text-white transition duration-150">FAQ</a></li> 
                    </ul>
                </div>

                {/* Column 3: Resources (আগের কোড অনুযায়ী রাখা হলো) */}
                <div>
                    <h5 className="text-lg font-semibold mb-4 text-white">Resources</h5>
                    <ul className="space-y-2 text-sm text-green-200">
                        <li><a href="/blog" className="hover:text-white transition duration-150">Blog</a></li>
                        <li><a href="/careers" className="hover:text-white transition duration-150">Careers</a></li>
                        <li><a href="/sitemap" className="hover:text-white transition duration-150">Sitemap</a></li>
                    </ul>
                </div>
                
                {/* Column 4: Social Media Icons (আপনার রিকোয়ারমেন্ট অনুযায়ী) */}
                <div className="md:col-span-1">
                    <h5 className="text-lg font-semibold mb-4 text-white">Connect With Us</h5>
                    <div className="flex space-x-5">
                        {socialMedia.map((icon) => (
                            <SocialIcon key={icon.name} icon={icon} url={icon.url} />
                        ))}
                    </div>
                </div>
                
            </div>
            
            {/* Copyright Section */}
            <div className="mt-6 pt-4 text-center text-xs text-green-300">
                {/* আপনার চাওয়া কপিরাইট টেক্সট যোগ করা হলো */}
                &copy; 2025 GreenNest. All rights reserved. | <span className="text-green-400">Nurture Your Sanctuary</span>
            </div>
        </footer>
    );
};

export default Footer;