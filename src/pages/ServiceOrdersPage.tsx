import DashboardLayout from "@/components/DashboardLayout";
import { AddServiceOrderDialog } from "@/components/AddServiceOrderDialog";
import { useAuth } from "@/context/AuthContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Dados de exemplo
const allOrders = [
  { id: "OS-001", client: "Construtora Alfa", status: "Em Andamento", driverId: "carlos@soneto45.com" },
  { id: "OS-002", client: "Engenharia Beta", status: "Concluída", driverId: "joao@soneto45.com" },
  { id: "OS-003", client: "Obras Gama", status: "Pendente", driverId: "pedro@soneto45.com" },
  { id: "OS-004", client: "Construtora Alfa", status: "Pendente", driverId: "carlos@soneto45.com" },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Concluída": return "default";
    case "Em Andamento": return "secondary";
    case "Pendente": return "destructive";
    default: return "outline";
  }
};

const ServiceOrdersPage = () => {
  const { user } = useAuth();

  const orders = user?.role === "MOTORISTA"
    ? allOrders.filter(order => order.driverId === user.email)
    : allOrders;

  return (
    <DashboardLayout title="Ordens de Serviço">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">
          {user?.role === "MOTORISTA" ? "Minhas Ordens de Serviço" : "Gerenciar Ordens de Serviço"}
        </h1>
        {user?.role !== "MOTORISTA" && (
          <div className="ml-auto">
            <AddServiceOrderDialog />
          </div>
        )}
      </div>
      
      {orders.length > 0 ? (
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.client}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              {user?.role === "MOTORISTA" ? "Nenhuma ordem de serviço para você" : "Nenhuma ordem de serviço encontrada"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {user?.role !== "MOTORISTA" && "Crie a sua primeira ordem de serviço para começar."}
            </p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ServiceOrdersPage;