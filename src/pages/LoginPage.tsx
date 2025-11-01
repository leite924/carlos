import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = (role: "SUPERADMIN" | "ADMIN" | "MOTORISTA") => {
    let user = { name: "", email: "", role };
    switch (role) {
      case "SUPERADMIN":
        user = { name: "Super Admin", email: "super@soneto45.com", role };
        break;
      case "ADMIN":
        user = { name: "Admin", email: "admin@soneto45.com", role };
        break;
      case "MOTORISTA":
        user = { name: "Carlos (Motorista)", email: "carlos@soneto45.com", role };
        break;
    }
    login(user);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Simulação de Login</CardTitle>
          <CardDescription>Escolha um papel para acessar o painel.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" onClick={() => handleLogin("SUPERADMIN")}>
            Entrar como Super Admin
          </Button>
          <Button className="w-full" variant="secondary" onClick={() => handleLogin("ADMIN")}>
            Entrar como Admin
          </Button>
          <Button className="w-full" variant="outline" onClick={() => handleLogin("MOTORISTA")}>
            Entrar como Motorista
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;