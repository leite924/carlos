import DashboardLayout from "@/components/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Visão Geral</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Bem-vindo ao seu Dashboard!
          </h3>
          <p className="text-sm text-muted-foreground">
            Aqui você poderá gerenciar seus caminhões e ordens de serviço.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;