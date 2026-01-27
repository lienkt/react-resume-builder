import { Link, Outlet } from 'react-router'

import Logo from '../../../assets/logo.svg';

function MainLayout() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='shadow bg-white'>
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
          <Link to="/">
            <img src={Logo} alt="Resume Logo" className='h-11 w-auto' />
          </Link>

          <div className='flex items-center gap-4 text-sm'>
            <p className='max-sm:hidden capitalize'> Hi, Lien</p>
            <button 
              className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'
              onClick={() => {}}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
      
      <div className='max-w-7xl mx-auto px-4 py-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout