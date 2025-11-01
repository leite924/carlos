import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const ServiceOrdersPage = () => {
  return (
    <DashboardLayout title="Ordens de Serviço">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Gerenciar Ordens de Serviço</h1>
        <div className="ml-auto">
          <Button size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Criar Ordem de Serviço
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Nenhuma ordem de serviço encontrada
          </h3>
          <p className="text-sm text-muted-foreground">
            Crie a sua primeira ordem de serviço para começar.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ServiceOrdersPage;