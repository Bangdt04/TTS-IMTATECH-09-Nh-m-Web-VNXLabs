import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRouteProfile: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  const isAuthenticated =
    (token && user?.role === "user") || user?.role === "admin";

  if (!isAuthenticated) {
    alert("Bạn cần đăng nhập để truy cập");
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRouteProfile;
