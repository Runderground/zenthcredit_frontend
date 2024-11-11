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
  renda: z.string().nonempty({message: "Este campo é obrigatório"}),
  ocupacao: z.string().nonempty({message: "Este campo é obrigatório"}),
  motivo: z.string().nonempty({message: "Este campo é obrigatório"}),
  garantia: z.string().nonempty({message: "Este campo é obrigatório"}),
});

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const stepTitle = ["Informações Gerais", "Análise de Perfil", "Análise de Garantia"]

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
      garantia: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 mt-12">
      <div className="flex flex-col text-center mb-8">
        <h1 className="font-bold text-3xl text-slate-600 uppercase">Registro</h1>
        <p className="text-slate-400">
          Preencha o formulário corretamente seguindo as etapas.
        </p>
      </div>
      <section className="w-full md:w-1/2">
        <Card>
          <CardHeader>
            <div className="flex gap-12 justify-around mb-8 text-slate-300 w-full items-center">
              <ContactRound
                className={step === 0 ? "text-blue-500" : ""}
                size={step === 0 ? 45 : 40}
              />
              <BriefcaseBusiness
                className={step === 1 ? "text-blue-500" : ""}
                size={step === 1 ? 45 : 40}
              />
              <Landmark
                className={step === 2 ? "text-blue-500" : ""}
                size={step === 2 ? 45 : 40}
              />
            </div>
            <CardTitle>{stepTitle[step]}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
{step == 0 && 
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="renda"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Renda Mensal</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção"/>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Menos de R$1.000">Menos de R$1.000</SelectItem>
                                <SelectItem value="Entre R$1.000 e R$2.000">Entre R$1.000 e R$2.000</SelectItem>
                                <SelectItem value="Entre R$2.500 e R$4.000">Entre R$2.500 e R$4.000</SelectItem>
                                <SelectItem value="Entre R$4.500 e R$7.000">Entre R$4.500 e R$7.000</SelectItem>
                                <SelectItem value="Entre R$7.500 e R$12.000">Entre R$7.500 e R$12.000</SelectItem>
                                <SelectItem value="Entre R$12.500 e R$20.000">Entre R$12.500 e R$20.000</SelectItem>
                                <SelectItem value="Entre R$20.500 e R$40.000+">Entre R$20.500 e R$40.000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ocupacao"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ocupação</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção"/>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Assalariado(a) (CLT)">Assalariado(a) (CLT)</SelectItem>
                                <SelectItem value="Autônomo(a)">Autônomo(a)</SelectItem>
                                <SelectItem value="Empresário(a)">Empresário(a)</SelectItem>
                                <SelectItem value="Funcionário(a) Público(a)">Funcionário(a) Público(a)</SelectItem>
                                <SelectItem value="Aposentado(a)">Aposentado(a)</SelectItem>
                                <SelectItem value="Profissional Liberal">Profissional Liberal</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="motivo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Motivo do Empréstimo</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção"/>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Pagar dívidas">Pagar dívidas</SelectItem>
                                <SelectItem value="Reformar a Casa">Reformar a Casa</SelectItem>
                                <SelectItem value="Investir">Investir</SelectItem>
                                <SelectItem value="Financiar meu veículo">Financiar meu veículo</SelectItem>
                                <SelectItem value="Adquirir bens">Adquirir bens</SelectItem>
                                <SelectItem value="Refinanciar dívidas">Refinanciar dívidas</SelectItem>
                                <SelectItem value="Só estou simulando">Só estou Simulando</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </div>
                }
                {step == 2 && 
                  <div className="grid grid-cols-1 gap-4">
                    <FormField
                      control={form.control}
                      name="garantia"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Possui alguma garantia?</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione uma opção"/>
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Não">Não</SelectItem>
                                <SelectItem value="Ímovel">Ímovel</SelectItem>
                                <SelectItem value="Veículo">Veículo</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                    <span></span>
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
