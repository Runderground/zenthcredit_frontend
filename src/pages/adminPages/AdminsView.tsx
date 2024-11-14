import { useState, useEffect } from "react";
import axios from "axios";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, Bolt } from "lucide-react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";

import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/authContext";

const API = import.meta.env.VITE_API_URL;

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

export default function AdminsView() {
  const { token, user } = useAuth();
  const [registers, setRegisters] = useState<Register[]>([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/admins/?page=${currentPage}&limit=5`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(data);
        setTotalPages(data.totalPages);
        setRegisters(data.admins);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [currentPage]);

  const pagePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const searchByEmail = async () => {
    if (searchEmail === "") {
      toast.error("O campo não pode estar vazio!");
      return;
    }
    try {
      const { data } = await axios.get(
        `${API}/cadastros/find_user_unique?email=${searchEmail}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      );
      toast.success("Usuário encontrado, redirecionando...");
      navigate(`../admin/cadastros/${data._id}`);
    } catch (error: any) {
      toast.error(error.response.data.error);
      toast.error("Verifique se digitou corretamente!");
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/admins/delete/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const newAdmins = registers.filter(contact => contact._id !== id)
      setRegisters(newAdmins)
      toast.success(data.success)
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="m-6 mt-12">
      <h1 className="text-3xl font-semibold mb-4">Olá {user.nome.split(" "[0])} 👋,</h1>
      <section>
        <Card>
          <CardHeader>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <CardTitle>Todos os usuários cadastrados</CardTitle>
              <div className="flex gap-2">
                <Input
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      searchByEmail();
                    }
                  }}
                  onChange={(e) => {
                    setSearchEmail(e.target.value);
                  }}
                  className="w-56"
                  placeholder="Pesquise pelo email"
                />
                <Button onClick={searchByEmail}>
                  <Search />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>
                Lista de todos os usuários cadastrados na Zenith.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registers ? (
                  registers.map((register) => (
                    <TableRow
                      key={register._id}
                    >
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Bolt />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Opções</DropdownMenuLabel>
                            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                              <DialogTrigger className="p-1 text-sm hover:bg-slate-100 w-full text-start rounded">
                                <span className="ml-1">Deletar {register.nome.split(" ")[0]}</span>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Tem certeza que deseja{" "}
                                    <strong className="text-red-500">
                                      Deletar?
                                    </strong>
                                  </DialogTitle>
                                  <DialogDescription>
                                    Você tem certeza que gostaria de deletar{" "}
                                    <strong>{register.nome}</strong> dos administradores?
                                  </DialogDescription>
                                </DialogHeader>
                                <Button
                                  className="bg-red-400 hover:bg-red-500"
                                  onClick={() => deleteUser(register._id)}
                                >
                                  Deletar
                                </Button>
                              </DialogContent>
                            </Dialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                      <TableCell>{register.nome}</TableCell>
                      <TableCell>{register.email}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <>
                    <TableRow>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                      </TableCell>
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      <div className="flex items-center gap-8 justify-center mt-4">
        {currentPage > 1 && (
          <Button onClick={pagePrevious} variant="outline">
            <ChevronLeft />
          </Button>
        )}
        <span className="font-bold">{currentPage}</span>
        {currentPage < totalPages && (
          <Button onClick={pageNext} variant="outline">
            <ChevronRight />
          </Button>
        )}
      </div>
    </div>
  );
}
