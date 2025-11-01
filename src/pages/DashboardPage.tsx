import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { AdminDashboard } from "@/components/AdminDashboard";
import { DriverDashboard } from "@/components/DriverDashboard";

const DashboardPage = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    if (!user) return null;

    switch (user.role) {
      case "SUPERADMIN":
      case "ADMIN":
        return <AdminDashboard />;
      case "MOTORISTA":
        return <DriverDashboard />;
      default:
        return <div>Papel de usuário desconhecido.</div>;
    }
  };

  return (
    <DashboardLayout title="Dashboard">
      {renderDashboard()}
    </DashboardLayout>
  );
};

export default DashboardPage;