import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
 



const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const content = <>
    <div id="Nav" className="absolute left-0 right-0 block w-full transition lg:hidden top-16 bg-slate-900">
        <ul className="p-20 text-xl text-center">
            <Link spy={true} smooth={true} to="Home">
                <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
                <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
                <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
                <li className="py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
            </Link>
        </ul>
    </div>
    </>
    return (
       <nav>
            <div className="z-50 flex justify-between px-20 py-4 text-white h-10vh lg:py-5">
                <div className="flex items-center flex-1">
                    <span className="font-serif font-bold -translate-x-10 text-3x1">
                        Alpin Apriliansyah Mohsa
                    </span>
                </div>
                <div className="justify-end flex-1 hidden font-normal lg:flex md:flex lg items center">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="transition border-b-2 cursor-pointer gover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="transition border-b-2 cursor-pointer gover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects" onClick={handleClick}>
                            <li className="transition border-b-2 cursor-pointer gover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact">
                            <li className="transition border-b-2 cursor-pointer gover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600">Contact</li>
                        </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click?<FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
       </nav>
    );
};

export default Nav;