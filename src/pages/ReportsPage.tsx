import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const ReportsPage = () => {
  return (
    <DashboardLayout title="Relatórios">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Central de Relatórios</h1>
        <div className="ml-auto">
           <Button size="sm" disabled>
            <FileDown className="h-4 w-4 mr-2" />
            Gerar Relatório
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Nenhum relatório gerado
          </h3>
          <p className="text-sm text-muted-foreground">
            Gere relatórios sobre suas operações para obter insights.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;