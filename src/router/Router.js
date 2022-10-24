import { createBrowserRouter } from 'react-router-dom'
import Home from '../component/Home/Home';
import Error from '../component/Error/Error';


import Main from '../layout/Main';




const router = createBrowserRouter([{
    path: '/',

    element: <Main></Main>,


    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
       
        element:<Home></Home>
      },

      {
        path: '/home',
       
        element: <Home></Home>
      }
    
    ]
}


    
    
])


export default router
