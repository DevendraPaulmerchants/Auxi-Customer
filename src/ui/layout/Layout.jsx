import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-[calc(60vh)] px-10 py-4">
      <Outlet />
    </div>
  )
}

export default Layout
