import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdminAuthenticated } from "@/lib/admin-auth";

type AdminRouteProps = {
  children: ReactNode;
};

const AdminRoute = ({ children }: AdminRouteProps) => {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default AdminRoute;
