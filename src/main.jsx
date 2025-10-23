import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './root/Root.jsx';
import Home from './Home/Home.jsx';
import Plants from './Plants/Allplantcard.jsx';
import Login from './login-register/Login.jsx';
import Register from './login-register/Register.jsx';
import Authprovider from './authprovider/Authprovider.jsx';
import Privaterouter from './privaterouter/Privaterouter.jsx';
import Userinfo from './userinfo/Userinfo.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Privaterouter><Home /></Privaterouter>,
      },
      {
        path: "/plant",
        element: <Privaterouter><Plants /></Privaterouter>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
      ,{
        path:'/userinfo',
        element:<Privaterouter><Userinfo></Userinfo></Privaterouter>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Authprovider>
      <RouterProvider router={router} />,
     </Authprovider>
  </StrictMode>,
)
