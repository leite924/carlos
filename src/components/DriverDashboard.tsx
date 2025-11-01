import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Truck, CalendarCheck } from "lucide-react";

// Dados de exemplo que seriam carregados de uma API para o motorista logado
const driverData = {
  assignedTruck: {
    model: "VW Constellation 24.280",
    plate: "ABC1D23",
  },
  serviceOrders: [
    {
      id: "OS-001",
      client: "Construtora Alfa",
      status: "Em Andamento",
      date: "25/10/2023",
    },
    {
      id: "OS-004",
      client: "Construtora Alfa",
      status: "Pendente",
      date: "26/10/2023",
    },
     {
      id: "OS-008",
      client: "Obras Delta",
      status: "Pendente",
      date: "27/10/2023",
    },
  ],
};

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Concluída":
      return "default";
    case "Em Andamento":
      return "secondary";
    case "Pendente":
      return "destructive";
    default:
      return "outline";
  }
};

export const DriverDashboard = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Seu Caminhão
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{driverData.assignedTruck.plate}</div>
            <p className="text-xs text-muted-foreground">
              {driverData.assignedTruck.model}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Serviços Pendentes</CardTitle>
            <CalendarCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {driverData.serviceOrders.filter(o => o.status !== 'Concluída').length}
            </div>
            <p className="text-xs text-muted-foreground">
              ordens de serviço para executar
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Minhas Ordens de Serviço</CardTitle>
            <CardDescription>
              Suas próximas tarefas agendadas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {driverData.serviceOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.client}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};