import { Route,Routes } from "react-router-dom"
import AppLayout from "./layout/app-layout"
import Login from "./pages/login/login"
import Home from "./pages/home/home"
import Category from "./pages/category/category"
import Banner from "./pages/banners/banner"
import Product from "./pages/products/product"
import CategoryCreate from "./pages/category/category-create"
function App() {
  

  return (
   <Routes>
    <Route path="/" element={<Login/>}/>
      <Route path="/app" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="category" element={<Category/>}/>
        <Route path="banner" element={<Banner/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="category/create" element={<CategoryCreate/>}/>
      </Route>
   </Routes>
  )
}

export default App
