import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,useLocation ,Routes, Route} from 'react-router-dom';
import { Course } from './Pages/Course';
import { CourseCategory } from './Pages/CourseCategory';
import { Products } from './Pages/Products';
import { Banner } from './Components/Banner/Banner';
import { Item } from './Components/Item/Item';
import { Popular } from './Components/Popular/Popular';
import { Partners } from './Components/Partners/Partners';
import { Footer } from './Components/Footer/Footer';
import banner1 from './Components/Assets/image.png'
import banner2 from './Components/Assets/banner.jpg'
import { LoginSignup } from './Pages/LoginSignup';
import { Login } from './Pages/Login';
import { ProductLiked } from './Pages/ProductLiked';
import { Teacher } from './Pages/Teacher';


// function App() {
//   //  const location = useLocation();
//   // const state = location.state;
//   // const background = state?.backgroundLocation || null;

//   return (
//     <div>
//       <BrowserRouter>
//     <Navbar></Navbar>
//     <Routes>
//       <Route path='/' element={<Course/>}></Route>
//       <Route path='/class' element={<CourseCategory banner={banner1} category="class"/>}></Route>
//       <Route path='/community' element={<CourseCategory banner={banner2} category="community"/>}></Route>
//       <Route path='/teacher' element={<Teacher banner={banner1} />}></Route>
//       <Route path='/about' element={<CourseCategory banner={banner1} category="about"/>}></Route>
//       <Route path='/productLiked' element={<ProductLiked banner={banner1}/>}></Route>
//       <Route path="/product/:productId" element={<Products />}> </Route>   
//       <Route path='/loginSignup' element={<LoginSignup></LoginSignup>}></Route>
//       <Route path='/Login' element={<Login></Login>}></Route>
//     </Routes>
//     <Footer></Footer>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;

function AppContent() {
    const location = useLocation();
    const noNavbarRoutes = ['/login'];

    const hideNavbar = noNavbarRoutes.includes(location.pathname);
    return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
      <Route path='/' element={<Course/>}></Route>
      <Route path='/class' element={<CourseCategory banner={banner1} category="class"/>}></Route>
      <Route path='/community' element={<CourseCategory banner={banner2} category="community"/>}></Route>
      <Route path='/teacher' element={<Teacher banner={banner1} />}></Route>
      <Route path='/about' element={<CourseCategory banner={banner1} category="about"/>}></Route>
      <Route path='/productLiked' element={<ProductLiked banner={banner1}/>}></Route>
      {/* <Route path='/product' element={<Products></Products>}>
        <Route path=':productId' element={<Products></Products>}/>
      </Route> */}
      <Route path="/product/:productId" element={<Products />}> </Route>   
      <Route path='/loginSignup' element={<LoginSignup></LoginSignup>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
    </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
}
export default function App() {
   return (
    <div>
      <BrowserRouter>
      
    <AppContent />
  
    </BrowserRouter>
    </div>
  );
}
