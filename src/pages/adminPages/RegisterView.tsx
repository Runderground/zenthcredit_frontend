import { useState, useEffect } from "react";

import axios from "axios";

import { Link, useParams, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";

import InputMask from "react-input-mask";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { ChevronLeft, Trash, Pencil, UserRoundCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Modal } from "@/components/Modal/Index";

const formSchema = z.object({
  nome: z.string(),
  email: z.string(),
  telefone: z.string(),
  cpf: z.string(),
  nascimento: z.string(),
  cep: z.string(),
  renda: z.string(),
  ocupacao: z.string(),
  motivo: z.string(),
  garantia: z.string(),
});

import { useAuth } from "@/context/authContext";

export default function RegisterView() {
  const { token } = useAuth();

  const navigate = useNavigate();

  function containsPdf(text: string) {
    const regex = /pdf$|pdf/i;

    return regex.test(text);
  }

  const deleteUser = async (id: string) => {
    setDeleteLoad(true);
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/cadastros/delete/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success(data.success);
      setDeleteLoad(false);
      navigate("../admin/cadastros/", { replace: true });
    } catch (error) {
      setDeleteLoad(false);
      console.log(error);
    }
  };

  const location = useParams();
  const [deleteLoad, setDeleteLoad] = useState(false);
  const [editState, setEditState] = useState("email");
  const [editValue, setEditValue] = useState({
    value: "",
  });
  console.log(editValue)
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState({
    _id: "",
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    nascimento: "",
    renda: "",
    ocupacao: "",
    motivo: "",
    garantia: "",
    cep: "",
    documentos: [
      {
        comprovante_renda: [
          {
            url: "",
            key: "",
          },
        ],
        residencia: [
          {
            url: "",
            key: "",
          },
        ],
        identidade: [
          {
            url: "",
            key: "",
          },
        ],
      },
    ],
  });

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

  const updateUser = async (id: string) => {
    const { data } = await axios.put(
      `${import.meta.env.VITE_API_URL}/cadastros/update/${id}?type=${editState}`,
      editValue,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(data);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (editState === "nome") {
      setEditValue({value: values.nome})
      updateUser(user._id);
      console.log("Funcionou");
    } else if (editState === "email") {
      console.log("email:", values.email);
    } else if (editState === "telefone") {
      console.log("telefone:", values.telefone);
    } else if (editState === "cpf") {
      console.log("cpf:", values.cpf);
    } else if (editState === "nascimento") {
      console.log("nascimento:", values.nascimento);
    } else if (editState === "cep") {
      console.log("cep:", values.cep);
    } else if (editState === "renda") {
      console.log("renda:", values.renda);
    } else if (editState === "motivo") {
      console.log("motivo:", values.motivo);
    } else if (editState === "ocupacao") {
      console.log("ocupacao:", values.ocupacao);
    } else if (editState === "garantia") {
      console.log("garantia:", values.garantia);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cadastros/find_user_unique?id=${location.id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(data);
      setUser(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Modal.Root modalOpen={modalOpen}>
        <div className="flex justify-between mb-2 items-center">
          <Modal.Title text={`Editar ${editState}`} />
          <Button
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            variant="outline"
          >
            <X />
          </Button>
        </div>
        <Modal.Description text="Modifique o que deseja no campo abaixo" />
        <br />
        <br />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              {editState === "nome" && (
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder={user.nome} {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "email" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={user.email}
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "telefone" && (
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone / WhatsApp</FormLabel>
                      <FormControl>
                        <InputMask mask="(99) 99999-9999" {...field}>
                          {() => (
                            <Input placeholder={user.telefone} {...field} />
                          )}
                        </InputMask>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "cpf" && (
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <InputMask mask="999.999.999-99" {...field}>
                          {() => <Input placeholder={user.cpf} {...field} />}
                        </InputMask>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "nascimento" && (
                <FormField
                  control={form.control}
                  name="nascimento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nascimento</FormLabel>
                      <FormControl>
                        <InputMask mask="99/99/9999" {...field}>
                          {() => (
                            <Input placeholder={user.nascimento} {...field} />
                          )}
                        </InputMask>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "cep" && (
                <FormField
                  control={form.control}
                  name="cep"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <InputMask mask="99999-999" {...field}>
                          {() => <Input placeholder={user.cep} {...field} />}
                        </InputMask>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "renda" && (
                <FormField
                  control={form.control}
                  name="renda"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Renda Mensal</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Menos de R$1.000">
                              Menos de R$1.000
                            </SelectItem>
                            <SelectItem value="Entre R$1.000 e R$2.000">
                              Entre R$1.000 e R$2.000
                            </SelectItem>
                            <SelectItem value="Entre R$2.500 e R$4.000">
                              Entre R$2.500 e R$4.000
                            </SelectItem>
                            <SelectItem value="Entre R$4.500 e R$7.000">
                              Entre R$4.500 e R$7.000
                            </SelectItem>
                            <SelectItem value="Entre R$7.500 e R$12.000">
                              Entre R$7.500 e R$12.000
                            </SelectItem>
                            <SelectItem value="Entre R$12.500 e R$20.000">
                              Entre R$12.500 e R$20.000
                            </SelectItem>
                            <SelectItem value="Entre R$20.500 e R$40.000+">
                              Entre R$20.500 e R$40.000+
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "ocupacao" && (
                <FormField
                  control={form.control}
                  name="ocupacao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ocupação</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Assalariado(a) (CLT)">
                              Assalariado(a) (CLT)
                            </SelectItem>
                            <SelectItem value="Autônomo(a)">
                              Autônomo(a)
                            </SelectItem>
                            <SelectItem value="Empresário(a)">
                              Empresário(a)
                            </SelectItem>
                            <SelectItem value="Funcionário(a) Público(a)">
                              Funcionário(a) Público(a)
                            </SelectItem>
                            <SelectItem value="Aposentado(a)">
                              Aposentado(a)
                            </SelectItem>
                            <SelectItem value="Profissional Liberal">
                              Profissional Liberal
                            </SelectItem>
                            <SelectItem value="Desempregado">
                              Desempregado
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "motivo" && (
                <FormField
                  control={form.control}
                  name="motivo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Motivo do Empréstimo</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pagar dívidas">
                              Pagar dívidas
                            </SelectItem>
                            <SelectItem value="Reformar a Casa">
                              Reformar a Casa
                            </SelectItem>
                            <SelectItem value="Investir">Investir</SelectItem>
                            <SelectItem value="Financiar meu veículo">
                              Financiar meu veículo
                            </SelectItem>
                            <SelectItem value="Adquirir bens">
                              Adquirir bens
                            </SelectItem>
                            <SelectItem value="Refinanciar dívidas">
                              Refinanciar dívidas
                            </SelectItem>
                            <SelectItem value="Só estou simulando">
                              Só estou Simulando
                            </SelectItem>
                            <SelectItem value="Outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {editState === "garantia" && (
                <FormField
                  control={form.control}
                  name="garantia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Possui alguma garantia?</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          {...field}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Não">Não</SelectItem>
                            <SelectItem value="Imóvel">Imóvel</SelectItem>
                            <SelectItem value="Veículo">Veículo</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <br />
              <Button
                type="submit"
                className="bg-green-400 hover:bg-green-500 self-end"
              >
                Salvar
              </Button>
            </div>
          </form>
        </Form>
      </Modal.Root>
      <section className="m-4 mt-20">
        <div className="flex gap-4 items-center mb-4">
          <Link to="/admin/cadastros">
            <ChevronLeft />
          </Link>
          <h1 className="text-2xl font-semibold">Consulta de cadastro</h1>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-blue-500">
              ID: {user._id}
            </CardTitle>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-red-400 hover:bg-red-500">
                    <Trash />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Tem certeza que deseja{" "}
                      <strong className="text-red-500">Deletar?</strong>
                    </DialogTitle>
                    <DialogDescription>
                      Você tem certeza que gostaria de deletar{" "}
                      <strong>{user.nome}</strong> dos cadastros?
                    </DialogDescription>
                  </DialogHeader>
                  <Button
                    className="bg-red-400 hover:bg-red-500"
                    onClick={() => deleteUser(user._id)}
                    disabled={deleteLoad}
                  >
                    {deleteLoad ? "Aguarde..." : "Deletar"}
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-400">
                Informações Gerais
              </h3>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">Nome :</strong>{" "}
                {user.nome}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("nome");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">
                  Email :
                </strong>{" "}
                {user.email}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("email");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
              <span className="flex gap-2  items-center">
                <strong className="font-semibold text-slate-600">
                  Telefone :
                </strong>{" "}
                {user.telefone}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("telefone");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">CPF :</strong>{" "}
                {user.cpf}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("cpf");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">
                  Nascimento :
                </strong>{" "}
                {user.nascimento}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("nascimento");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">CEP :</strong>{" "}
                {user.cep}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("cep");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-400">
                Análise de Perfil
              </h3>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">
                  Renda Mensal :
                </strong>{" "}
                {user.renda}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("renda");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">
                  Ocupação :
                </strong>{" "}
                {user.ocupacao}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("ocupacao");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">
                  Motivo do empréstimo :
                </strong>{" "}
                {user.motivo}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("motivo");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-400">
                Análise de Garantia
              </h3>
              <span className="flex gap-2 items-center">
                <strong className="font-semibold text-slate-600">
                  Possui garantia :
                </strong>{" "}
                {user.garantia}
                <Button
                  className="bg-yellow-500 hover:bg-yellow-600"
                  onClick={() => {
                    setModalOpen(!modalOpen);
                    setEditState("garantia");
                  }}
                >
                  <Pencil />
                </Button>
              </span>
            </div>
          </CardContent>
        </Card>
        <br />
        <Card>
          <CardHeader className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <CardTitle>Verificação de Identidade</CardTitle>
              <UserRoundCheck />
            </div>
            <CardDescription>
              Para ampliar as imagens/documentos, basta clica-las!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center m-4 items-center">
              <div className="flex flex-col gap-12 w-full">
                <div className="flex flex-col items-center text-blue-400 font-semibold text-lg lg:text-3xl">
                  <span className="mb-2">Identidade</span>
                  {containsPdf(user?.documentos[0].identidade[0].url) ? (
                    <div
                      className="flex flex-col items-center justify-center cursor-pointer w-[200px] h-[200px] bg-red-400 hover:bg-red-500 transition-colors rounded-lg"
                      onClick={() => {
                        window.open(`${user?.documentos[0].identidade[0].url}`);
                      }}
                    >
                      <div className="flex flex-col items-center justify-center select-none">
                        <h2 className="text-3xl text-white">PDF</h2>
                        <span className="text-xs text-white">
                          Clique para visualizar
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img
                      className="rounded-lg lg:w-72 cursor-pointer"
                      onClick={() => {
                        window.open(`${user?.documentos[0].identidade[0].url}`);
                      }}
                      src={user?.documentos[0].identidade[0].url}
                      width={150}
                      height={200}
                      alt="Comprovante de Residencia"
                    />
                  )}
                </div>
                <div className="flex flex-col text-lg lg:text-3xl items-center text-blue-400 font-semibold">
                  <span className="mb-2">Comprovante de Renda</span>
                  {containsPdf(user?.documentos[0].comprovante_renda[0].url) ? (
                    <div
                      className="flex flex-col items-center justify-center cursor-pointer w-[200px] h-[200px] bg-red-400 hover:bg-red-500 transition-colors rounded-lg"
                      onClick={() => {
                        window.open(
                          `${user?.documentos[0].comprovante_renda[0].url}`,
                        );
                      }}
                    >
                      <div className="flex flex-col items-center justify-center select-none">
                        <h2 className="text-3xl text-white">PDF</h2>
                        <span className="text-xs text-white">
                          Clique para visualizar
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img
                      className="rounded-lg lg:w-72 cursor-pointer"
                      onClick={() => {
                        window.open(
                          `${user?.documentos[0].comprovante_renda[0].url}`,
                        );
                      }}
                      src={user?.documentos[0].comprovante_renda[0].url}
                      width={150}
                      height={200}
                      alt="Comprovante de Residencia"
                    />
                  )}
                </div>
                <div className="flex flex-col text-lg lg:text-3xl items-center text-blue-400 font-semibold">
                  <span className="mb-2">Comprovante de Residência</span>
                  {containsPdf(user?.documentos[0].residencia[0].url) ? (
                    <div
                      className="flex flex-col items-center justify-center cursor-pointer w-[200px] h-[200px] bg-red-400 hover:bg-red-500 transition-colors rounded-lg"
                      onClick={() => {
                        window.open(`${user?.documentos[0].residencia[0].url}`);
                      }}
                    >
                      <div className="flex flex-col items-center justify-center select-none">
                        <h2 className="text-3xl text-white">PDF</h2>
                        <span className="text-xs text-white">
                          Clique para visualizar
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img
                      className="rounded-lg lg:w-72 cursor-pointer"
                      onClick={() => {
                        window.open(`${user?.documentos[0].residencia[0].url}`);
                      }}
                      src={user?.documentos[0].residencia[0].url}
                      width={150}
                      height={200}
                      alt="Comprovante de Residencia"
                    />
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
