import { useState } from 'react'
import { FiShoppingCart, FiUser, FiHeart, FiSearch, FiSettings, FiMenu } from 'react-icons/fi'
import Sidebar from './components/Sidebar'
import NavbarItems from './components/Navbar/navbarItems';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import Footer from './components/FooterSection';
import ShopSection from './components/ShopSection';


function App() {
  const [cartCount] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="bg-theme-gradient text-white py-2">
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
        <div className="container mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <button className="text-gray-700 hover:text-primary  " onClick={() => setIsSidebarOpen(true)}>
              <FiMenu size={24} />
            </button>

            <div>
              <img
                src="https://themes.pixelstrap.com/multikart/assets/images/marijuana/logo.png"
                alt="Naturekart Logo"
                className="w-40 h-30"
              />
            </div>

            <div className="flex items-center space-x-4">
            <button className="text-gray-700  md:hidden" >
              <FiMenu size={24} />
            </button>
              <button className="text-gray-700 hover:text-primary">
                <FiSearch size={20} />
              </button>
              <button className="text-gray-700 hover:text-primary">
                <FiSettings size={20} />
              </button>
      
              <div className="relative">
                <button className="text-gray-700 hover:text-primary">
                  <FiShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t   w-full"></div>
      </header>

      <NavbarItems />

      <HeroSection />
      <ShopSection/>
      <BlogSection/>
      <Footer/>

    </div>
  )
}

export default App