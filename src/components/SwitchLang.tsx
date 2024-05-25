import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, Transition } from '@headlessui/react'

import { /*useCookies,*/ withCookies } from 'react-cookie'

import i18next, { languages } from '../i18n'

const SwitchLang = () => {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="flex items-center space-x-1.5 hover:opacity-80 dark:text-white">
          <FontAwesomeIcon className="h-4 w-4" icon="language" />
          <FontAwesomeIcon className="h-3 w-3" icon="chevron-down" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute top-0 right-0 z-20 mt-8 w-28 divide-y divide-gray-900 overflow-auto rounded border border-gray-900/10 bg-white py-1 shadow-lg focus:outline-none dark:border-gray-500/30 dark:bg-gray-900 dark:text-white">
            {languages.map(locale => (
              <Menu.Item key={locale.code} as='a'>
                <div 
                  className="m-1 cursor-pointer rounded px-2 py-1 text-left text-sm font-medium hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-600/10 dark:hover:text-blue-400"
                  onClick={() => i18next.changeLanguage(locale.code)}
                >
                  {locale.name}
                </div>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default withCookies(SwitchLang)
