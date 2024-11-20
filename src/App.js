import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Login from "./pages/LoginPage"
import Signup from "./pages/SignupPage"
import Dashboard from "./pages/DashboardPage";
import PostManagePage from "./pages/PostManagePage";
import PostAddPage from "./pages/PostAddPage";
import PostEditPage from "./pages/PostEditPage";
import UserManagePage from "./pages/UserManagePage";
import UserAddPage from "./pages/UserAddPage";
import UserChangePasswordPage from "./pages/UserChangePasswordPage";
import UserEditPage from "./pages/UserEditPage";
import SinglePostPage from "./pages/SinglePostPage";

function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/postmanagepage" element={<PostManagePage />} />
          <Route path="/postaddpage" element={<PostAddPage />} />
          <Route path="/posteditpage" element={<PostEditPage />} />
          <Route path="/usermanagepage" element={<UserManagePage />} />
          <Route path="/useraddpage" element={<UserAddPage />} />
          <Route path="/userchangepasswordpage" element={<UserChangePasswordPage />} />
          <Route path="/usereditpage" element={<UserEditPage />} />
          <Route path="/singlepostpage" element={<SinglePostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
