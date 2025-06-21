import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from "react-router";
import Layout from './Layout';
import Home from './Components/Home/Home';
import './index.css'
import About from './Components/About/About';
import Algorithms from './Components/Algorithms/Algorithms';
import Contact from './Components/Contact/Contact';
import PathFindAlgoMain from './Components/Algorithms/PathFindAlgorithms/PathFindAlgoMain';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: 
    [
      {
        path: '',
        element:<Home/>
      },
      {
        path:'/about_us',
        element: <About/>
      },
      {
        path: '/algorithms',
        element: <Algorithms />
      },
      {
        path: 'contact',
        element:<Contact/>
      }
    ]
  },
  {
        path: '/algorithms/pathfinding',
        element: <PathFindAlgoMain/>
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
