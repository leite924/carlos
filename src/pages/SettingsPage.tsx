import DashboardLayout from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <DashboardLayout title="Configurações">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>
              Atualize as informações do seu perfil.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" defaultValue="Usuário Admin" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="admin@soneto45.com" />
            </div>
            <Button>Salvar Alterações</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Empresa</CardTitle>
            <CardDescription>
              Gerencie as informações da sua empresa.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nome da Empresa</Label>
              <Input id="companyName" defaultValue="Minha Frota Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyCnpj">CNPJ</Label>
              <Input id="companyCnpj" defaultValue="00.000.000/0001-00" />
            </div>
            <Button>Salvar Alterações</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;