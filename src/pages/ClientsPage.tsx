import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const ClientsPage = () => {
  return (
    <DashboardLayout title="Clientes">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Gerenciar Clientes</h1>
        <div className="ml-auto">
          <Button size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Adicionar Cliente
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Nenhum cliente cadastrado
          </h3>
          <p className="text-sm text-muted-foreground">
            Adicione seu primeiro cliente para começar a criar ordens de serviço.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientsPage;