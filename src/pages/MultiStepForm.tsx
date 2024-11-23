import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

import { ContactRound, BriefcaseBusiness, Landmark, UserRoundCheck } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import InputMask from 'react-input-mask'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import toast from 'react-hot-toast'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  nome: z.string().nonempty({message: "Este campo é obrigatório"}).min(3, {message: "Este campo deve conter pelo menos 3 caracteres."}).max(50, {message: "Você excedeu o limite de caracteres, abrevie o nome caso seja grande."}).regex(/^[a-zA-Z\s.áéíóúâêîôûãõçÁÉÍÓÚÂÊÎÔÛÃÕÇàèìòùÀÈÌÒÙ]*$/, {message: "Não é permitido caracteres especiais e números."}),
  email: z.string().nonempty({message: "Este campo é obrigatório"}).email({message: "Insira um email válido!"}).min(4).max(100),
  telefone: z.string().nonempty({message: "Este campo é obrigatório"}).min(15,{message: "Insira um número válido!"}),
  cpf: z.string().min(14, {message: "Ínsira um CPF válido!"}),
  nascimento: z.string().nonempty({message: "Este campo é obrigatório"}).min(10,{message: "Ínsira uma data válida!"}).regex(/^(0[1-9]|[12][0-9]|3[01])\/(02)\/(19\d{2}|200[0-7])$|^(0[1-9]|[12][0-9]|30)\/(04|06|09|11)\/(19\d{2}|200[0-7])$|^(0[1-9]|[12][0-9]|3[01])\/(01|03|05|07|08|10|12)\/(19\d{2}|200[0-7])$/, {message: "Data ínvalida ou menor de 18 anos"}),
  cep: z.string().nonempty({message: "Este campo é obrigatório"}).min(9, {message: "Ínsira um CEP válido!"}),
  renda: z.string().nonempty({message: "Este campo é obrigatório"}),
  ocupacao: z.string().nonempty({message: "Este campo é obrigatório"}),
  motivo: z.string().nonempty({message: "Este campo é obrigatório"}),
  garantia: z.string().nonempty({message: "Este campo é obrigatório"}),
});

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false)
  const [residencia, setResidencia] = useState<File | undefined>()
  const [identidade, setIdentidade] = useState<File | undefined>()
  const [renda, setRenda] = useState<File | undefined>()
  const stepTitle = ["Informações Gerais", "Análise de Perfil", "Análise de Garantia", "Verificação de Identidade"]
  const submitBtn = useRef<HTMLButtonElement>(null)
  const residenciaBtn = useRef<HTMLInputElement>(null)
  const identidadeBtn = useRef<HTMLInputElement>(null)
  const rendaBtn = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

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
    setLoading(true)
    if(!residencia || !renda || !identidade) {
      toast.error("Preencha todos os campos referentes a identidade, renda e residência na parte de Verificação!")
      setLoading(false)
      return
    }
    /* Usando FormData para enviar os arquivos */
    const formData = new FormData()
    formData.append("residencia", residencia as File)
    formData.append("renda", renda as File)
    formData.append("identidade", identidade as File)
    formData.append("values", JSON.stringify(values))
    async function RegisterUser() {
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/cadastros/register`, formData)
        toast.success(data.success)
        setLoading(false)
        navigate("../", {replace: true})
      } catch(error: any) {
        setLoading(false)
        toast.error(error.response.data.error)
      }
    }
    RegisterUser()
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 mt-20">
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
              <UserRoundCheck
                className={step === 3 ? "text-blue-500" : ""}
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
          <FormLabel>Telefone / WhatsApp</FormLabel>
          <FormControl>
            <InputMask mask="(99) 99999-9999" {...field}>
              {() => (
            <Input placeholder="(DD) 99999-9999" {...field}/>
              )}
            </InputMask>
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
            <InputMask mask="999.999.999-99" {...field}>
              {() => (
            <Input placeholder="000.000.000-00" {...field}/>
              )}
            </InputMask>
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
            <InputMask mask="99/99/9999" {...field}>
              {() => (
            <Input placeholder="00/00/0000" {...field}/>
              )}
            </InputMask>
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
            <InputMask mask="99999-999" {...field}>
              {() => (
            <Input placeholder="00000-000" {...field}/>
              )}
            </InputMask>
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
                                <SelectItem value="Desempregado">Desempregado</SelectItem>
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
                                <SelectItem value="Outro">Outro</SelectItem>
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
                                <SelectItem value="Imóvel">Imóvel</SelectItem>
                                <SelectItem value="Veículo">Veículo</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage/>
                        </FormItem>
                      )}
                    />
                  </div>
                }
                {step == 3 &&
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold">Comprovante de residência</h3>
                    <span className="flex flex-1 text-xs text-blue-500 bg-blue-200 p-2 rounded-lg border border-blue-400">Deve ser uma conta de luz, água, telefone, etc. que esteja o endereço visível com seu nome ou de um terceiro. ( O CEP deve ser preenchido exatamente como o da foto )</span>
                    <div>
                      <Button
                        variant={"outline"}
                        onClick={() => residenciaBtn.current?.click()}>Escolher arquivo</Button>
                    </div>
                    <input type="file" ref={residenciaBtn} onChange={(e) => setResidencia(e.target.files?.[0])} accept="" hidden/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold">Comprovante de Renda</h3>
                    <span className="flex flex-1  text-xs text-blue-500 bg-blue-200 p-2 rounded-lg border border-blue-400">Pode ser um extrato bancário, contracheque, declaração de imposto de renda, etc.</span>
                    <div>
                      <Button
                        variant={"outline"}
                        onClick={() => rendaBtn.current?.click()}>Escolher arquivo</Button>
                    </div>
                    <input type="file" onChange={(e) => setRenda(e.target.files?.[0])} ref={rendaBtn} accept="" hidden/>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold">Identidade ( RG ou CNH )</h3>
                    <span className="flex flex-1 text-xs text-blue-500 bg-blue-200 p-2 rounded-lg border border-blue-400">Deve ser uma única foto do seu RG ou CNH aberto. ( O nome, data de nascimento e CPF devem estar preenchidos exatamente como está no RG/CNH )</span>
                    <div>
                      <Button
                        variant={"outline"}
                        onClick={() => identidadeBtn.current?.click()}>Escolher arquivo</Button>
                    </div>
                    <input type="file" onChange={(e) => setIdentidade(e.target.files?.[0])} ref={identidadeBtn} accept="" hidden/>
                  </div>
                </div>}
                {/* <div className={`bg-yellow-200 p-2 rounded-lg border border-yellow-300 ${step === 2 ? "block" : "hidden"}`}>
                  <span className="text-sm text-yellow-600">Atenção: Caso não conclua o registro após apertar Concluir, volte as etapas e verifique se está tudo certo!</span>
                </div>
                <Button
                  className={`bg-green-500 hover:bg-green-600 w-full mt-4 ${step === 2 ? "block" : "hidden"} ${loading ? 'bg-green-700' : ''}`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Aguarde...' : 'Concluir'}
                </Button> */}
                <br/>
                <div className="flex justify-end gap-2">
                  <button type="submit" hidden ref={submitBtn}></button>
                </div>
              </form>
            </Form>
            <div className="flex justify-end gap-2">
              <Button
                className={`${step > 0 ? "block" : "hidden"}`}
                variant="outline"
                onClick={() => setStep(step - 1)}
              >
                Voltar
              </Button>
              <Button
                onClick={() => setStep(step + 1)}
                className={`${step < 3 ? "block" : "hidden"}`}
                variant="outline"
              >
                Avançar
              </Button>
              <Dialog>
                <DialogTrigger>
                  <Button className={`bg-green-400 hover:bg-green-500 mb-2 ${step === 3 ? "block" : "hidden"}`}>Cadastrar</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>AUTORIZAÇÃO PARA DISPONIBILIZAÇÃO</DialogTitle>
                  <DialogDescription>
                    <span>Ao clicar <strong>Concluir</strong> você estará aceitando os seguintes termos:</span>
                  </DialogDescription>
                  <div className="border border-slate-300 p-4 rounded-lg">
                    <span>
                      Autorização para Disponibilização de histórico de crédito
                    </span>
                    <p>Autorizo os gestores de banco de dados de que trata a Lei Nº 12.414, de 9 de junho de 2011, disponibilizar ao Correspondente J M S GROUP LTDA, CNPJ 55.395.267/0001-17 ( Zenith Credit ), o meu histórico de crédito, o qual abrangerá os dados financeiros e de pagamentos relativos aos operadores de crédito e obrigações de pagamento adimplidas em seus respectivos vencimentos, e aquelas a vencer, constantes de banco(s) de dados, com a finalidade única e exclusiva de subsidiar a análise e a eventual concessão de crédito,a venda a prazo ou outras transações comerciais e empresariais que impliquem risco financeiro.</p>
                    <p>Esta autorização tem validade de até 3 ( três ) meses a contar da presente data.</p>
                    <p>Estou ciente de que poderei revogar, a qualquer tempo, esta autorização, perante o gestor de banco de dados.</p>
                  </div>
                  <div className={`bg-yellow-200 p-2 rounded-lg border border-yellow-300 ${step === 3 ? "block" : "hidden"}`}>
                    <span className="text-sm text-yellow-600">Atenção: Caso não conclua o registro após apertar Concluir, volte as etapas e verifique se está tudo certo!</span>
                  </div>
                    <Button
                      className={`bg-green-400 hover:bg-green-500 text-white hover:text-white ${step > 0 ? "block" : "hidden"}`}
                      variant="outline"
                      onClick={() => submitBtn.current?.click()}
                      disabled={loading}
                    >
                      {loading ? 'Aguarde...' : 'Concluir'}
                    </Button>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
