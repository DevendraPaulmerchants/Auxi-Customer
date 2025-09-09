import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
;
function Layout() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(60vh)] p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
