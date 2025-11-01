import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { showSuccess } from "@/utils/toast";

const truckSchema = z.object({
  plate: z.string().min(7, { message: "A placa deve ter 7 caracteres." }).max(7, { message: "A placa deve ter 7 caracteres." }),
  model: z.string().min(2, { message: "O modelo é obrigatório." }),
  year: z.coerce.number().min(1980, { message: "Ano inválido." }).max(new Date().getFullYear() + 1, { message: "Ano inválido." }),
  capacity: z.string().min(2, { message: "A capacidade é obrigatória." }),
});

export const AddTruckDialog = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof truckSchema>>({
    resolver: zodResolver(truckSchema),
    defaultValues: {
      plate: "",
      model: "",
      year: new Date().getFullYear(),
      capacity: "",
    },
  });

  function onSubmit(values: z.infer<typeof truckSchema>) {
    console.log("Novo Caminhão:", values);
    showSuccess("Caminhão adicionado com sucesso! (simulado)");
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Adicionar Caminhão
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Caminhão</DialogTitle>
          <DialogDescription>
            Preencha as informações do novo caminhão da frota.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="plate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Placa</FormLabel>
                  <FormControl>
                    <Input placeholder="ABC1D23" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Modelo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: VW Constellation 24.280" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ano</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="2023" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Capacidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: 10 Toneladas" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Salvar Caminhão</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};