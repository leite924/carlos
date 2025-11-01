import DashboardLayout from "@/components/DashboardLayout";
import { AddTruckDialog } from "@/components/AddTruckDialog";

const TrucksPage = () => {
  return (
    <DashboardLayout title="Caminhões">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Gerenciar Caminhões</h1>
        <div className="ml-auto">
          <AddTruckDialog />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Nenhum caminhão cadastrado
          </h3>
          <p className="text-sm text-muted-foreground">
            Comece adicionando o primeiro caminhão da sua frota.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrucksPage;