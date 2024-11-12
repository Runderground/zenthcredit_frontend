import { useState, useEffect } from "react";

import axios from "axios";

import { Link, useParams } from "react-router-dom";

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

import { ChevronLeft } from "lucide-react";

export default function RegisterView() {
  const location = useParams();
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
  });

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cadastros/find_user_unique?id=${location.id}`,
      );
      console.log(data);
      setUser(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="m-4 mt-12">
        <div className="flex gap-4 items-center mb-4">
          <Link to="/admin/cadastros">
            <ChevronLeft />
          </Link>
          <h1 className="text-2xl font-semibold">Consulta de cadastro</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-blue-500">
              ID: {user._id}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-400">
                Informações Gerais
              </h3>
              <span>
                <strong className="font-semibold text-slate-600">Nome :</strong>{" "}
                {user.nome}
              </span>
              <span>
                <strong className="font-semibold text-slate-600">
                  Email :
                </strong>{" "}
                {user.email}
              </span>
              <span>
                <strong className="font-semibold text-slate-600">
                  Telefone :
                </strong>{" "}
                {user.telefone}
              </span>
              <span>
                <strong className="font-semibold text-slate-600">CPF :</strong>{" "}
                {user.cpf}
              </span>
              <span>
                <strong className="font-semibold text-slate-600">
                  Nascimento :
                </strong>{" "}
                {user.nascimento}
              </span>
              <span>
                <strong className="font-semibold text-slate-600">CEP :</strong>{" "}
                {user.cep}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-400">
                Análise de Perfil
              </h3>
              <span>
                <strong className="font-semibold text-slate-600">
                  Renda Mensal :
                </strong>{" "}
                R$ {user.renda}
              </span>
              <span>
                <strong className="font-semibold text-slate-600">
                  Ocupação :
                </strong>{" "}
                {user.ocupacao}
              </span>
              <span>
                <strong className="font-semibold text-slate-600">
                  Motivo do empréstimo :
                </strong>{" "}
                {user.motivo}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-slate-400">
                Análise de Garantia
              </h3>
              <span>
                <strong className="font-semibold text-slate-600">
                  Possui garantia :
                </strong>{" "}
                {user.garantia}
              </span>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
