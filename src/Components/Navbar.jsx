import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '/logo.png'
import logo2 from '/logo2.png'
import logo3 from '/logo3.png'

const Navbar=()=> {

  const handleClick = () => {
    const serviceSection = document.getElementById('about');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' }); 
      setIsMenuOpen(false);
    }
  }
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const currentPathname = location.pathname;
  console.log(currentPathname)


  return (
    <div className="bg-white w-full border-b-2 border-gray-300 md:h-20 h-22 z-99 flex fixed">
      <div className=" md:h-20 h-22 flex w-full items-center px-4 py-2 sm:px-6 lg:px-8 justify-between">
        
        <div className="">
         <img className='w-16 sm:w-20 ' src={logo} alt="" />
        </div>
        
        <div className='flex items-center'>
        <div className="hidden md:block pr-16">
          <ul className="flex gap-8">
            <Link to='/'><li className={`hover:text-black md:text-lg font-bold ${currentPathname === '/' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70] '}`}>Home</li></Link>           
            <Link to='/About'><li onClick={handleClick} className={`md:text-lg hover:text-black font-bold ${currentPathname === '/About' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'} `}>About Us</li></Link>
            <Link to='/Contact'><li className={`md:text-lg hover:text-black font-bold ${currentPathname === '/Contact' ? 'border-b-[3px] border-[#FBDD07] text-[#203c70]' : 'border-none text-[#203c70]'}`}>Contact Us</li></Link>   
          </ul>
        </div>
        

        <div className="border-r-2 border-black px-2">
         <img className='w-20 sm:w-28' src={logo2} alt="" />
        </div>

        <div className="px-2 ">
         <img className='w-20 sm:w-28' src={logo3} alt="" />
        </div>
        </div>

        <div className="md:hidden">
          <Menu onClick={toggleMenu} className="text-[#203c70] h-8 w-8 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className=" absolute w-full right-0 top-16  sm:top-20 z-10 origin-top-right transform p-2 transition lg:hidden cursor-pointer">
            <div className="bg-white rounded-lg shadow-lg ring-1 ring-white ring-opacity-20 ">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-end">
                  <div>
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className=" text-[#203c70]"
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-2">
                     <Link to='/'><li onClick={()=>setIsMenuOpen(false)} className={`text-lg hover:text-black font-bold  ${currentPathname === '/' ? 'text-[#FBDD07]' : ' text-[#203c70]'} `}>Home</li></Link>
                     <Link to='/#about'><li   onClick={handleClick}  className={`text-lg hover:text-black font-bold ${currentPathname === '/#about' ? ' text-[#FBDD07]' : 'text-[#203c70]'} `}>About Us</li></Link>
                     <Link to='/ContactUs'><li onClick={()=>setIsMenuOpen(false)} className={`text-lg hover:text-black font-bold ${currentPathname === '/Contact' ? ' text-[#FBDD07]' : ' text-[#203c70]'}`}>Contact Us</li></Link> 
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar