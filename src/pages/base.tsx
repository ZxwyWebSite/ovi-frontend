import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Base() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
