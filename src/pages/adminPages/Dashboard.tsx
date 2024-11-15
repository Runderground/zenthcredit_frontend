import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Users, PhoneCall, ShieldCheck, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";

import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@/context/authContext";
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

type Register = {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  nascimento: string;
  renda: string;
  ocupacao: string;
  motivo: string;
  garantia: string;
  cep: string;
};

interface IContact {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  status: string;
  comentario: string;
}

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { token } = useAuth();
  const [cadastroTotal, setCadastroTotal] = useState<number>(0);
  const [adminTotal, setAdminTotal] = useState<number>(0);
  const [contatoTotal, setContatoTotal] = useState<number>(0);
  const [ultimosContatos, setUltimosContatos] = useState<IContact[]>([])
  const [ultimosCadastros, setUltimosCadastros] = useState<Register[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getUltimosCadastros() {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/cadastros/?page=1?limit=10`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        setUltimosCadastros(data.cadastros);
      } catch(error) {
        console.error(error)
      }
    }
    getUltimosCadastros()
    async function getUltimosContatos() {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/contatos/?page=1?limit=10`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        setUltimosContatos(data.contacts);
      } catch(error) {
        console.error(error)
      }
    }
    getUltimosContatos()
  }, []);

  useEffect(() => {
    async function getCadastroTotal() {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cadastros/totalusers`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      setCadastroTotal(data);
    }
    async function getAdminTotal() {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/admins/totalusers`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      setAdminTotal(data);
    }
    async function getContatoTotal() {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/contatos/totalusers`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      setContatoTotal(data);
    }
    getCadastroTotal();
    getAdminTotal();
    getContatoTotal();
  },[])

  const handleWhatsapp = (num: string) => {
    const number = num.replace(/\D/g, "");
    const url = `https://wa.me/+55${number}`;

    window.open(url)
  }

  const Items = [
    {
      title: "Usuários Cadastrados",
      icon: Users,
      description: "Total de usuários cadastrados no site da Zenith Credit.",
      value: cadastroTotal,
    },
    {
      title: "Requisições de Contatos",
      icon: PhoneCall,
      description: "Contatos em aberto para serem atendidos.",
      value: contatoTotal,
    },
    {
      title: "Administradores",
      icon: ShieldCheck,
      description:
        "Total de administradores cadastrados no site da Zenith Credit",
      value: adminTotal,
    },
  ];
  return (
    <div className="m-4 mt-12 p-4">
      <h1 className="text-3xl text-slate-800 uppercase mb-4">
        Painel de <strong>Administração</strong>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Items.map((item) => (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg  text-slate-800 select-none">
                  {item.title}
                </CardTitle>
                <item.icon />
              </div>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg  text-slate-800 select-none">
                Últimos usuários cadastrados
              </CardTitle>
              <Timer />
            </div>
            <CardDescription>
              Aqui está a lista dos últimos 10 usuários que fizeram o cadastro.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {ultimosCadastros ? (
      ultimosCadastros.map((cadastro) => (
        <div className="flex items-center p-2 border border-slate-300 rounded-lg gap-4 justify-between">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarFallback className="bg-blue-400 text-white font-semibold">{cadastro.nome.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-700">{cadastro.nome.split(" ")[0]}</h4>
              <span className="text-slate-500 text-xs">
                {cadastro.email}
              </span>
            </div>
          </div>
          <Button onClick={() => navigate(`../admin/cadastros/${cadastro._id}`, {replace: true})} className="bg-blue-500 hover:bg-blue-600">Ver</Button>
        </div>
      ))
            ) : "Não há cadastros"}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg  text-slate-800 select-none">
                Últimos pedidos de contatos
              </CardTitle>
              <Timer />
            </div>
            <CardDescription>
              Aqui está a lista dos últimos 10 usuários que fizeram o cadastro.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {ultimosContatos ? (
      ultimosContatos.map((contato) => (
        <div className="flex items-center p-2 border border-slate-300 rounded-lg gap-4 justify-between">
          <div className="flex gap-2 items-center">
            <Avatar>
            <AvatarFallback className="bg-green-400 text-white font-semibold">{contato.nome.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-700">{contato.nome.split(" ")[0]}</h4>
              <span className="text-slate-500 text-sm">
                {contato.telefone}
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 gap-2 items-center">
            <Button onClick={() => handleWhatsapp(contato.telefone)}className="bg-green-400 hover:bg-green-500">
              <BsWhatsapp />
            </Button>
          </div>
        </div>
              ))
            )  : 'Nenhum contato encontrado'}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
