import { useLocation } from 'react-router-dom'

import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'
import FileListing from '../components/FileListing'

export default function List() {
  const query = { path: decodeURIComponent(useLocation().pathname?.slice(1)).split('/') }

  return (
    <div className="mx-auto w-full max-w-5xl py-4 sm:p-4">
      <nav className="mb-4 flex items-center justify-between px-4 sm:px-0 sm:pl-1">
        <Breadcrumb query={query} />
        <SwitchLayout />
      </nav>
      <FileListing query={query} />
    </div>
  )
}
