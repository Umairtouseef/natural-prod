import { useState } from 'react'
import { FiShoppingCart, FiUser, FiHeart, FiSearch, FiSettings, FiMenu } from 'react-icons/fi'
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFold4Fill } from "react-icons/ri";
import { RiMenuUnfold2Line } from "react-icons/ri";
import Sidebar from './components/Sidebar'
import NavbarItems from './components/Navbar/navbarItems';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import Footer from './components/FooterSection';
import ShopSection from './components/ShopSection';
import SidebarMobile from './components/SidebarMobile';
import NavbarMobile from './components/Navbar/NavbarItemsMobile';


function App() {
  const [cartCount] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-hidden">

<div className="hidden lg:block">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>

    <div className="lg:hidden">
        <SidebarMobile isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
    </div>

      <div className="bg-theme-gradient text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Welcome to Our Store Naturekart</span>
          <span>Call Us: 123 - 456 - 7890</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-200">Wishlist</a>
            <a href="#" className="hover:text-gray-200">My Account</a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm ">
        <div className="container mx-auto px-8 py-8 xs:px-2 py-8">
          <div className="flex justify-between items-center">
            <button className="text-gray-700 hover:text-primary  " onClick={() => setIsSidebarOpen(true)}>
              <RiMenuUnfoldLine size={24} />
            </button>

            <div>
              <img
                src="https://themes.pixelstrap.com/multikart/assets/images/marijuana/logo.png"
                alt="Naturekart Logo"
                className="w-40 h-30"
              />
            </div>
            <button className="text-gray-700 hover:text-primary lg:hidden  " onClick={() => setIsNavbarOpen(true)}>
              <RiMenuUnfold2Line size={24} />
            </button>
            <div className="flex items-center space-x-4 hidden md:block">

              <button className="text-gray-700 hover:text-primary">
                <FiSearch size={20} />
              </button>
              <button className="text-gray-700 hover:text-primary">
                <FiSettings size={20} />
              </button>
              <button className="text-gray-700 hover:text-primary">
                <FiShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
        <div class="border-t   w-full"></div>
      <NavbarMobile isOpen={isNavbarOpen} toggleSidebar={() => setIsNavbarOpen(false)} />

      </header>

      <NavbarItems />

      <HeroSection />
      <ShopSection />
      <BlogSection />
      <Footer />

    </div>
  )
}

export default App