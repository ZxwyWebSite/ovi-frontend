import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useLocation, useNavigate } from 'react-router-dom'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { matchProtectedRoute } from '../utils/protectedRouteHandler'
import useLocalStorage from '../utils/useLocalStorage'

const Auth: FC<{ redirect: string }> = ({ redirect }) => {
  const authTokenPath = matchProtectedRoute(redirect)

  const location = useLocation()
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  const [_, setPersistedToken] = useLocalStorage(authTokenPath, '')

  const { t } = useTranslation()

  return (
    <div className="mx-auto flex max-w-sm flex-col space-y-4 md:my-10">
      <div className="mx-auto w-3/4 md:w-5/6">
        <img src={'/images/fabulous-wapmire-weekdays.png'} alt="authenticate" width={912} height={912} />
      </div>
      <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{t('Enter Password')}</div>

      <p className="text-sm font-medium text-gray-500">
        {t('This route (the folder itself and the files inside) is password protected. ') +
          t('If you know the password, please enter it below.')}
      </p>

      <div className="flex items-center space-x-2">
        <input
          className="flex-1 rounded border border-gray-600/10 p-2 font-mono focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:focus:ring-blue-700"
          autoFocus
          type="password"
          placeholder="************"
          value={token}
          onChange={e => {
            setToken(e.target.value)
          }}
          onKeyPress={e => {
            if (e.key === 'Enter' || e.key === 'NumpadEnter') {
              setPersistedToken(token)
              navigate(location.pathname)
            }
          }}
        />
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400"
          onClick={() => {
            setPersistedToken(token)
            navigate(location.pathname)
          }}
        >
          <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  )
}

export default Auth
