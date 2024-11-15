import { useState, useEffect } from "react";
import axios from "axios";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bolt } from "lucide-react";
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

import { useAuth } from "@/context/authContext";


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

  const deleteUser = async (id: string) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/admins/delete/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const newAdmins = registers.filter(admin => admin._id !== id)
      setRegisters(newAdmins)
      toast.success(data.success)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-6 mt-20">
      <h1 className="text-3xl font-semibold mb-4">Olá {user.nome.split(" "[0])} 👋,</h1>
      <section>
        <Card>
          <CardHeader>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <CardTitle>Todos os administradores cadastrados</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>
                Lista de todos os administradores cadastrados na Zenith.
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
