import { createBrowserRouter } from 'react-router-dom'
import Home from '../component/Home/Home';
import Error from '../component/Error/Error';


import Main from '../layout/Main';
import Login from '../component/login/Login';
import Register from '../component/register/Register';
import FAQ from '../component/FAQ/FAQ';
import Blog from '../component/blog/Blog';
import Courses from '../component/courses/Courses';
import Details from '../component/details/Details';
import CheckoutRoute from '../component/Checkout route/CheckoutRoute';




const router = createBrowserRouter([{
    path: '/',

  element: <Main></Main>,
  


    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: async () =>{
          return fetch('https://my-education-process.vercel.app/courses_topics')
        },
       
        element: <Home></Home>
        
      },

      {
        path: '/home',
        loader: async () =>{
          return fetch('https://my-education-process.vercel.app/courses_topics')
        },
       
        element: <Home></Home>
      },
      {
        path: '/Courses',
        loader: async () =>{
          return fetch('https://my-education-process.vercel.app/courses_topics')
        },
        element: <Courses></Courses>
      },

      {
        path: '/details',
             
                path: '/topics/:id',
              
                loader: ({params}) => fetch(`https://my-education-process.vercel.app/topics/${params.id}`),
            
        element: <Details></Details>
      },


      {
        path: '/checkoutRout/:id',
        loader: ({params}) => fetch(`https://my-education-process.vercel.app/details/${params.id}`),

       
        element: <CheckoutRoute></CheckoutRoute>
      },
      {
        path: '/login',
       
        element: <Login></Login>
      }
      ,
      {
        path: '/register',
       
        element: <Register></Register>
      },
      {
        path: '/FAQ',
       
        element: <FAQ></FAQ>
      },
      {
        path: '/blog',
       
        element: <Blog></Blog>
      }
      

      

    
    ]
}


    
    
])


export default router
