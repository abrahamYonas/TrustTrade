/* eslint-disable @typescript-eslint/no-unused-vars */

import { Route, Routes } from 'react-router-dom';

import { Home, VerifyProduct } from './pages';
import { Navbar } from './components/navbar';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      {/* <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div> */}
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<VerifyProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default App