import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInAdmin, verifyAdminSession } from "@/lib/admin-auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let active = true;

    const check = async () => {
      const authenticated = await verifyAdminSession();
      if (!active) {
        return;
      }

      if (authenticated) {
        navigate("/admin", { replace: true });
        return;
      }

      setChecking(false);
    };

    void check();

    return () => {
      active = false;
    };
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const success = await signInAdmin(email, password);
    if (!success) {
      setError("Invalid email or password.");
      return;
    }

    const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/admin";
    navigate(from, { replace: true });
  };

  if (checking) {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <div className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Loading admin</div>
      </div>
    );
  }

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
            Sign in with your private admin email and password. The credentials are verified on the server,
            not in the browser, so they are not exposed in the frontend bundle.
          </p>
        </div>

        <Card className="border-2 border-secondary shadow-bold">
          <CardHeader>
            <CardTitle className="font-display text-3xl uppercase">Enter Admin</CardTitle>
            <CardDescription>Use your private email and password to continue.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
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
