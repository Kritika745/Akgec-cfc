import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logos/logo.png';
import logo2 from '/logos/logo2.png';
import logo3 from '/logos/logo3.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPathname = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = () => {
    if (currentPathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleServicesClick = () => {
    if (currentPathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/Services');
    }
    setIsMenuOpen(false);
  };

  const handleFacilitiesClick = () => {
    if (currentPathname === '/') {
      const facilitiesSection = document.getElementById('facilities');
      if (facilitiesSection) {
        facilitiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/COE');
    }
    setIsMenuOpen(false); 
  };

  return (
    <div className="bg-white z-30 w-full border-b-2 border-gray-300 md:h-20 h-22 z-99 flex fixed">
      <div className="md:h-20 h-22 flex w-full items-center px-4 py-2 sm:px-6 lg:px-8 justify-between">
        
        <div>
          <img className='w-16 sm:w-20' src={logo} alt="" />
        </div>
        
        <div className='flex items-center'>
          <div className="hidden md:block pr-16">
            <ul className="flex gap-8">
              <Link to='/'><li className={`hover:text-black md:text-lg font-bold ${currentPathname === '/' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'}`}>Home</li></Link>   
              <Link to='/#about'><li onClick={handleAboutClick} className={`hover:text-black md:text-lg font-bold ${currentPathname === '/#about' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'}`}>About Us</li></Link> 
              <Link><li onClick={handleServicesClick} className={`hover:text-black md:text-lg font-bold ${currentPathname === '/Services' || currentPathname === '/#services' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'}`}>Services</li></Link>
              <Link><li onClick={handleFacilitiesClick} className={`hover:text-black md:text-lg font-bold ${currentPathname === '/COE' || currentPathname === '/#facilities' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'}`}>Facilities</li></Link>
              <Link to='/Contact'><li className={`md:text-lg hover:text-black font-bold ${currentPathname === '/Contact' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'}`}>Contact Us</li></Link>  
            </ul>
          </div>

          <div className="border-r-2 border-black px-2">
            <img className='w-20 sm:w-28' src={logo2} alt="" />
          </div>

          <div className="px-2">
            <img className='w-20 sm:w-28' src={logo3} alt="" />
          </div>
        </div>

        <div className="md:hidden">
          <Menu onClick={toggleMenu} className="text-[#203c70] h-8 w-8 cursor-pointer" />
        </div>
        
        {isMenuOpen && (
          <div className="absolute w-full right-0 top-16 sm:top-20 z-10 origin-top-right transform p-2 transition lg:hidden cursor-pointer">
            <div className="bg-white rounded-lg shadow-lg ring-1 ring-white ring-opacity-20">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-end">
                  <button type="button" onClick={toggleMenu} className="text-[#203c70]">
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-2">
                    <Link to='/'><li onClick={() => setIsMenuOpen(false)} className={`text-lg hover:text-black font-bold ${currentPathname === '/' ? 'text-[#FBDD07]' : 'text-[#203c70]'}`}>Home</li></Link>
                    <Link to='/#about'><li onClick={handleAboutClick} className={`hover:text-black md:text-lg font-bold ${currentPathname === '/#about' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'}`}>About Us</li></Link> 
                    <Link><li onClick={() => { setIsMenuOpen(false); handleServicesClick(); }} className={`text-lg hover:text-black font-bold ${currentPathname === '/Services' || currentPathname === '/#services' ? 'text-[#FBDD07]' : 'text-[#203c70]'}`}>Services</li></Link>
                    <Link><li onClick={() => { setIsMenuOpen(false); handleFacilitiesClick(); }} className={`text-lg hover:text-black font-bold ${currentPathname === '/COE' || currentPathname === '/#facilities' ? 'text-[#FBDD07]' : 'text-[#203c70]'}`}>Facilities</li></Link>
                    <Link to='/ContactUs'><li onClick={() => setIsMenuOpen(false)} className={`text-lg hover:text-black font-bold ${currentPathname === '/Contact' ? 'text-[#FBDD07]' : 'text-[#203c70]'}`}>Contact Us</li></Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
