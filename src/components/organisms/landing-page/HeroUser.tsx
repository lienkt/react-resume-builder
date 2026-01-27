import { Link } from "react-router"
import Logo from '../../../assets/logo.svg';

function HeroUser() {
  const isAuthenticate = true;

  return (
    <div className="pb-20 font-poppins">
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
        <a href="/"><img alt="Resume Builder Logo" className="h-11 w-auto" src={Logo} /></a>
        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
          <a href="/" className="hover:text-green-600 transition">Home</a>
          <a href="#features" className="hover:text-green-600 transition">Features</a>
          <a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a>
          <a href="#cta" className="hover:text-green-600 transition">Contact</a>
        </div>
        <div className="flex gap-2">
          <Link to="/dashboard?state=register" hidden={isAuthenticate} className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white">
            Get started
          </Link>
          <Link to="/login" hidden={isAuthenticate} className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900">
            Login
          </Link>
          <Link to="/dashboard" hidden={!isAuthenticate} className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white">
            Dashboard
          </Link>
        </div>
        <button className="md:hidden active:scale-90 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" className="lucide lucide-menu">
            <path d="M4 5h16M4 12h16M4 19h16"></path>
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default HeroUser