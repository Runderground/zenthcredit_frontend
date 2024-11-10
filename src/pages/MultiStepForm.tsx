import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

import { ContactRound, BriefcaseBusiness, Landmark } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  nome: z.string().nonempty({message: "Este campo é obrigatório"}).min(3, {message: "Este campo deve conter pelo menos 3 caracteres."}).max(50, {message: "Você excedeu o limite de caracteres, abrevie o nome caso seja grande."}).regex(/^[a-zA-Z0-9\s]*$/, {message: "Não é permitido caracteres especiais"}),
  email: z.string().nonempty({message: "Este campo é obrigatório"}).email({message: "Insira um email válido!"}).min(4).max(100),
  telefone: z.string().nonempty({message: "Este campo é obrigatório"}).min(15,{message: "Insira um número válido!"}),
  cpf: z.string().min(14, {message: "Ínsira um CPF válido!"}),
  nascimento: z.string().nonempty({message: "Este campo é obrigatório"}).min(10,{message: "Ínsira uma data válida!"}),
  cep: z.string().nonempty({message: "Este campo é obrigatório"}).min(9, {message: "Ínsira um CEP válido!"}),
  renda: z.string(),
  ocupacao: z.string(),
  motivo: z.string(),
});

export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      nascimento: "",
      cep: "",
      renda: "",
      ocupacao: "",
      motivo: "",
      
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 mt-12">
      <h1 className="font-bold text-3xl text-slate-600">ZENITH CREDIT</h1>
      <p className="text-slate-400">
        Preencha o formulário corretamente seguindo as etapas.
      </p>
      <section>
        <Card>
          <CardHeader>
            <div className="flex gap-12 justify-around mb-8 text-slate-300 w-full">
              <ContactRound
                className={step === 0 ? "text-blue-500" : ""}
                size={40}
              />
              <BriefcaseBusiness
                className={step === 1 ? "text-blue-500" : ""}
                size={40}
              />
              <Landmark
                className={step === 2 ? "text-blue-500" : ""}
                size={40}
              />
            </div>
            <CardTitle>Informações Gerais</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
{step == 0 && 
  <div className="grid grid-cols-2 gap-4">
    <FormField
      control={form.control}
      name="nome"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nome</FormLabel>
          <FormControl>
            <Input placeholder="Escreva seu Nome" {...field} />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="exemplo@gmail.com" {...field} />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="telefone"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Telefone</FormLabel>
          <FormControl>
            <Input placeholder="( DD ) 00000-0000" {...field} />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="cpf"
      render={({ field }) => (
        <FormItem>
          <FormLabel>CPF</FormLabel>
          <FormControl>
            <Input placeholder="000.000.000-00" {...field} />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="nascimento"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nascimento</FormLabel>
          <FormControl>
            <Input placeholder="00/00/0000" {...field} />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
    <FormField
      control={form.control}
      name="cep"
      render={({ field }) => (
        <FormItem>
          <FormLabel>CEP</FormLabel>
          <FormControl>
            <Input placeholder="00000-000" {...field} />
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
  </div>
}

                {step == 1 && 
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="renda"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Renda Mensal</FormLabel>
                          <FormControl>
                            <Select onValueChange={(value) => setValue("renda", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção"/>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="teste1">Entre R$1.000 e R$2.000</SelectItem>
                                <SelectItem value="teste2">Entre R$2.500 e R$4.000</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </div>
                }
                <Button
                  className={`bg-green-500 hover:bg-green-600 w-full mt-4 ${step === 2 ? "block" : "hidden"}`}
                  type="submit"
                >
                  Concluir
                </Button>
              </form>
            </Form>
            <div className="flex mt-6 justify-end gap-4">
              <Button
                className={`${step > 0 ? "block" : "hidden"}`}
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Voltar
              </Button>
              <Button
                onClick={() => setStep(step + 1)}
                className={`${step < 2 ? "block" : "hidden"}`}
                variant="outline"
              >
                Avançar
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
