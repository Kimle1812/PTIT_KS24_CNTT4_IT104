import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Admin from './layout/Admin'
import UserManager from './pages/UserManager'
import ProductManager from './pages/ProductManager'
import {  } from "./App.css";
import OrderManager from './pages/OrderManager'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ProtectedRoute from './pages/ProtectedRoute'

// import Exercise0102 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE0102/Exercise0102";
// import Exercise03 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE03/Exercise03";
// import Exercise04 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE04/Exercise04";
// import Exercise05 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE05/Exercise05";
// import Exercise06 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE06/Exercise06";
// import Exercise07 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE07/Exercise07";
// import Exercise08 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE08/Exercise08";
// import Exercise0910 from "./pages/PTIT_CNTT04_IT104_SESSION25_EXERCISE0910/Exercise0910";

export default function App() {
  const routers = createBrowserRouter([
    {
      path:"/about",
      element:<About></About>
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"admin",
      element:<ProtectedRoute element={<Admin></Admin>}></ProtectedRoute>,
      children:[
        {
          path:"user",
          element:<UserManager></UserManager>

        },
        {
          path:"product",
          element:<ProductManager></ProductManager>
        },
        {
          path:"order",
          element:<OrderManager></OrderManager>
        },
        {
          path:"product/:id",
          element:<ProductDetail></ProductDetail>
        }
      ]
    }
  ])
  return (
    <div>
      React router
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

// export default function App() {
//   return (
//     <div>
//       {/* Bài 1+2 */}
//       {/* <Exercise0102></Exercise0102> */}
//       {/* Bài 3 */}
//       {/* <Exercise03></Exercise03> */}
//       {/* Bài 4 */}
//       {/* <Exercise04></Exercise04> */}
//       {/* Bài 5 */}
//       {/* <Exercise05></Exercise05> */}
//       {/* Bài 6 */}
//       {/* <Exercise06></Exercise06> */}
//       {/* Bài 7 */}
//       {/* <Exercise07></Exercise07> */}
//       {/* Bài 8 */}
//       {/* <Exercise08></Exercise08> */}
//       {/* Bài 9 */}
//       <Exercise0910></Exercise0910>
//     </div>
//   )
// }
