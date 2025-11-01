import DashboardLayout from "@/components/DashboardLayout";
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
import { Truck, Users, FileText } from "lucide-react";

// Dados de exemplo que seriam carregados de uma API
const kpiData = {
  totalTrucks: 12,
  activeClients: 45,
  pendingOrders: 8,
};

const recentOrders = [
  {
    id: "OS-001",
    client: "Construtora Alfa",
    truck: "M-001",
    status: "Em Andamento",
    date: "25/10/2023",
  },
  {
    id: "OS-002",
    client: "Engenharia Beta",
    truck: "M-003",
    status: "Concluída",
    date: "24/10/2023",
  },
  {
    id: "OS-003",
    client: "Obras Gama",
    truck: "M-002",
    status: "Pendente",
    date: "23/10/2023",
  },
  {
    id: "OS-004",
    client: "Construtora Alfa",
    truck: "M-005",
    status: "Concluída",
    date: "22/10/2023",
  },
];

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

const DashboardPage = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Caminhões
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.totalTrucks}</div>
            <p className="text-xs text-muted-foreground">
              veículos na sua frota
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.activeClients}</div>
            <p className="text-xs text-muted-foreground">
              clientes cadastrados
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ordens de Serviço Pendentes
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpiData.pendingOrders}</div>
            <p className="text-xs text-muted-foreground">
              aguardando execução
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Ordens de Serviço Recentes</CardTitle>
            <CardDescription>
              As últimas 4 ordens de serviço criadas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Caminhão</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.client}</TableCell>
                    <TableCell>{order.truck}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;