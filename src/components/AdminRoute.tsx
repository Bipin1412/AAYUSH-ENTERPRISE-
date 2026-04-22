import { useEffect, useState, type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { verifyAdminSession } from "@/lib/admin-auth";

type AdminRouteProps = {
  children: ReactNode;
};

const AdminRoute = ({ children }: AdminRouteProps) => {
  const location = useLocation();
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let active = true;

    const check = async () => {
      const authenticated = await verifyAdminSession();
      if (!active) {
        return;
      }

      setAllowed(authenticated);
      setChecking(false);
    };

    void check();

    return () => {
      active = false;
    };
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <div className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Checking session</div>
      </div>
    );
  }

  if (!allowed) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default AdminRoute;
