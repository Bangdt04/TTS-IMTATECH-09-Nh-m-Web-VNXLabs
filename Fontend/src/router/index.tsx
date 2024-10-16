import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import LayoutCLient from "@/layout/LayoutCLient";
import HomePage from "@/page/HomePage";
import Profile from "@/components/client/Profile";
import ProductDetailPage from "@/pages/client/product-detail/ProductDetailPage";
import AddPost from "@/page/Post/add";
import EditPost from "@/page/Post/edit";
import PostList from "@/page/Post/list";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutCLient />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/posts/add" element={<AddPost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
          <Route path="/posts" element={<PostList />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
