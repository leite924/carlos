import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Truck, FileText, Users, Package2 } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm bg-white dark:bg-gray-950">
        <Link to="/" className="flex items-center justify-center gap-2">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="font-semibold">Soneto 4.5</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Login
          </Link>
          <Button asChild>
            <Link to="/register">Registrar</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Otimize a Gestão da sua Frota de Caminhões Munck
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Soneto 4.5 é a solução completa para gerenciar suas operações, ordens de serviço e clientes de forma eficiente e centralizada.
                </p>
              </div>
              <div className="space-x-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/register">Comece Agora Gratuitamente</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                  Recursos Principais
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tudo que você precisa em um só lugar
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Desde o controle dos seus veículos até o faturamento para seus clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Gerenciamento de Frota</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cadastre e acompanhe todos os seus caminhões, manutenções e documentações.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Ordens de Serviço</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Crie, gerencie e envie ordens de serviço digitais para seus clientes com facilidade.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Cadastro de Clientes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mantenha um registro organizado de todos os seus clientes e histórico de serviços.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-950">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Soneto 4.5. Todos os direitos reservados.
        </p>
        <div className="sm:ml-auto">
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;