import ReactDOM from 'react-dom/client'
import './assets/styles.scss'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
])

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
