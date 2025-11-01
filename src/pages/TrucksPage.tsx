import DashboardLayout from "@/components/DashboardLayout";
import { AddTruckDialog } from "@/components/AddTruckDialog";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Dados de exemplo
const allTrucks = [
  { id: "1", plate: "ABC1D23", model: "VW Constellation 24.280", driverId: "carlos@soneto45.com" },
  { id: "2", plate: "XYZ5F67", model: "Scania R450", driverId: "joao@soneto45.com" },
  { id: "3", plate: "QWE9R87", model: "Volvo FH 540", driverId: "pedro@soneto45.com" },
];

const TrucksPage = () => {
  const { user } = useAuth();

  const trucks = user?.role === "MOTORISTA"
    ? allTrucks.filter(truck => truck.driverId === user.email)
    : allTrucks;

  return (
    <DashboardLayout title="Caminhões">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {user?.role === "MOTORISTA" ? "Meu Caminhão" : "Gerenciar Frota"}
        </h1>
        {user?.role !== "MOTORISTA" && (
          <div className="ml-auto">
            <AddTruckDialog />
          </div>
        )}
      </div>
      
      {trucks.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trucks.map(truck => (
            <Card key={truck.id}>
              <CardHeader>
                <CardTitle>{truck.plate}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{truck.model}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              {user?.role === "MOTORISTA" ? "Nenhum caminhão atribuído" : "Nenhum caminhão cadastrado"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {user?.role !== "MOTORISTA" && "Comece adicionando o primeiro caminhão da sua frota."}
            </p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default TrucksPage;