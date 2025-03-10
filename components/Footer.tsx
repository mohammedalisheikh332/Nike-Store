'use client'


import { FaMapMarkerAlt } from 'react-icons/fa';




export default function Footer() {


    return (
        <footer className="relative  bg-black text-gray-400  pt-32 py-8">


            {/* Footer Content */}
            <div className="w-10/12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <ul className="space-y-2">
                            <li className="font-medium text-white">FIND A STORE</li>
                            <li><a href="/fourcompo/member">BECOME A MEMBER</a></li>
                            <li><a href="/fourcompo/member">SIGN UP FOR EMAIL</a></li>
                            <li><a href="/fourcompo/first">SEND US FEEDBACK</a></li>
                            <li><a href="/fourcompo/discount"></a>STUDENT DISCOUNTS<a /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li className="font-medium text-white">GET HELP</li>
                            <li><a href="/order-status">Order Status</a></li>
                            <li><a href="/delivery">Delivery</a></li>
                            <li><a href="/returns">Returns</a></li>
                            <li><a href="/payment-options">Payment Options</a></li>
                            <li><a href="/contact-nike">Contact Us On Nike.com Inquiries</a></li>
                            <li><a href="/contact-other">Contact Us On All Other Inquiries</a></li>
                        </ul>

                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li className="font-medium text-white">ABOUT NIKE</li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/investors">Investors</a></li>
                            <li><a href="sustainability">Sustainability</a></li>
                        </ul>
                    </div>
                    <div className="flex space-x-4 text-xl text-gray-400">
                        <img src="/twitter.png" className='w-[30px] h-[30px]' alt="" />
                        <img src="/facebook.png" className='w-[30px] h-[30px]' alt="" />
                        <img src="/youtube.png" className='w-[30px] h-[30px]' />
                        <img src="/instagram.png" className='w-[30px] h-[30px]' />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
                    <div className='sm:flex block sm:ml-[0px] ml-[-50px]'>
                        <p className="text-sm mt-4 items-center sm:mt-0 flex text-white font-semibold mr-5"><span className='items-center mr-2'><FaMapMarkerAlt /></span> India</p>
                        <p className="text-sm text-gray-500">© 2023 Nike, Inc. All Rights Reserved</p>
                    </div>
                    <div className="hidden sm:flex text-sm space-x-6">
                        <a href="#" className="hover:text-white">Guides</a>
                        <a href="#" className="hover:text-white">Terms of Sale</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Nike Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

