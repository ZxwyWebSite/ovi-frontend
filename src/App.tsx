import React from 'react'
// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Base from './pages/base'
import List from './pages/list'
import Error from './pages/error'
import OAuthStep1 from './pages/ovi-oauth/step-1'
import OAuthStep2 from './pages/ovi-oauth/step-2'
import OAuthStep3, { loader as step3Loader } from './pages/ovi-oauth/step-3'

import '@fortawesome/fontawesome-svg-core/styles.css'
import './styles/globals.css'
import './styles/markdown-github.css'

const router = createBrowserRouter([
  {
    path: '',
    element: <Base />,
    errorElement: <Error />,
    children: [
      {
        path: 'onedrive-vercel-index-oauth',
        children: [
          {
            path: 'step-1',
            element: <OAuthStep1 />,
          },
          {
            path: 'step-2',
            element: <OAuthStep2 />,
          },
          {
            path: 'step-3',
            children: [
              {
                path: ':code',
                element: <OAuthStep3 />,
                loader: step3Loader,
              },
              {
                path: '',
                element: <OAuthStep3 />,
                loader: step3Loader,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <List />,
      },
      {
        path: '',
        element: <List />,
      },
    ],
  },
])

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
