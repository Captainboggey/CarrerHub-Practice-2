import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJob from './Components/AppliedJob/AppliedJob.jsx';
import Blog from './Components/Blog/Blog.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },{
      path: '/statistics',
      element: <Statistics></Statistics>
    },{
      path: '/appliedJob',
      element:<AppliedJob></AppliedJob>,
      loader:()=>fetch('jobs.json')
    },{
      path:'/blog',
      element:<Blog></Blog>
    },{
      path: '/job/:id',
      element:<JobDetails></JobDetails>,
      loader:()=> fetch('../public/jobs.json')
    }]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
