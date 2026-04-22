import { useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminCredentials, isAdminAuthenticated, signInAdmin } from "@/lib/admin-auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAdminAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const success = signInAdmin(username, password);
    if (!success) {
      setError("Invalid username or password.");
      return;
    }

    const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/admin";
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,hsl(var(--primary))/0.14,transparent_34%),linear-gradient(180deg,hsl(var(--muted))_0%,hsl(var(--background))_42%)]">
      <div className="container grid min-h-screen items-center py-12 lg:grid-cols-[1.05fr_0.95fr] gap-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border-2 border-secondary bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.3em]">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Admin Login
          </div>
          <h1 className="mt-6 font-display text-5xl uppercase leading-tight md:text-7xl">
            Secure access for the website team.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Sign in to open the admin dashboard and manage the internal site controls. This first version uses
            a protected client-side session, so it is suitable for gated access but not for high-security use.
          </p>

          <div className="mt-8 grid gap-3 max-w-xl sm:grid-cols-2">
            <div className="rounded-xl border-2 border-secondary bg-card p-4">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Username</div>
              <div className="mt-1 font-semibold">{adminCredentials.username}</div>
            </div>
            <div className="rounded-xl border-2 border-secondary bg-card p-4">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Password</div>
              <div className="mt-1 font-semibold">Configured in auth file or env vars</div>
            </div>
          </div>
        </div>

        <Card className="border-2 border-secondary shadow-bold">
          <CardHeader>
            <CardTitle className="font-display text-3xl uppercase">Enter Admin</CardTitle>
            <CardDescription>Use the credentials configured for the admin area.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="admin"
                  autoComplete="username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>

              {error && (
                <div className="rounded-lg border-2 border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-12">
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
