import DashboardLayout from "@/components/DashboardLayout";
import { AddMaintenanceDialog } from "@/components/AddMaintenanceDialog";

const MaintenancePage = () => {
  return (
    <DashboardLayout title="Manutenção">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Controle de Manutenção</h1>
        <div className="ml-auto">
          <AddMaintenanceDialog />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Nenhum agendamento de manutenção
          </h3>
          <p className="text-sm text-muted-foreground">
            Agende a primeira manutenção para um de seus caminhões.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MaintenancePage;