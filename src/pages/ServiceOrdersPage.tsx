import DashboardLayout from "@/components/DashboardLayout";
import { AddServiceOrderDialog } from "@/components/AddServiceOrderDialog";

const ServiceOrdersPage = () => {
  return (
    <DashboardLayout title="Ordens de Serviço">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Gerenciar Ordens de Serviço</h1>
        <div className="ml-auto">
          <AddServiceOrderDialog />
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