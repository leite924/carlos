import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Package2,
  Users,
  Truck,
  FileText,
  Wrench,
  BarChart,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { UserNav } from "./UserNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const allNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home, roles: ["SUPERADMIN", "ADMIN", "MOTORISTA"] },
  { href: "/trucks", label: "Caminhões", icon: Truck, roles: ["SUPERADMIN", "ADMIN", "MOTORISTA"] },
  { href: "/service-orders", label: "Ordens de Serviço", icon: FileText, roles: ["SUPERADMIN", "ADMIN", "MOTORISTA"] },
  { href: "/clients", label: "Clientes", icon: Users, roles: ["SUPERADMIN", "ADMIN"] },
  { href: "/maintenance", label: "Manutenção", icon: Wrench, roles: ["SUPERADMIN", "ADMIN"] },
  { href: "/reports", label: "Relatórios", icon: BarChart, roles: ["SUPERADMIN", "ADMIN"] },
  { href: "/settings", label: "Configurações", icon: Settings, roles: ["SUPERADMIN"] },
];

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null; // ou uma tela de loading
  }

  const navItems = allNavItems.filter(item => item.roles.includes(user.role));

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Soneto 4.5</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                    location.pathname === item.href
                      ? "bg-muted text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Button size="sm" className="w-full" onClick={logout}>
              Sair
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">{title}</h1>
          </div>
          <UserNav />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;