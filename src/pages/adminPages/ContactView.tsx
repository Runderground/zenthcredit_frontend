import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bolt } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import toast from 'react-hot-toast'

import { Badge } from "@/components/ui/badge";

import { useState, useEffect } from "react";

import axios from "axios";

interface IContact {
  _id: string;
  nome: string;
  email: string;
  telefone: string;
  status: string;
  comentario: string;
}

import { useAuth } from "@/context/authContext";

export default function ContactView() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false)

  const { token, user } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/contatos/?page=${currentPage}&limit=5`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(data);
        setTotalPages(data.totalPages);
        setContacts(data.contacts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [currentPage]);

  const handleWhatsapp = (num: string) => {
    const number = num.replace(/\D/g, "");
    const url = `https://wa.me/+55${number}`;

    window.open(url)
  }

  const changeStatus = async (id: string) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/contatos/changestatus/${id}`, null , {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
      );
      setContacts((prevContacts) =>
        prevContacts.map((contato) =>
          contato._id === id ? { ...contato, status: data.status } : contato,
        ),
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/contatos/delete/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const newContacts = contacts.filter(contact => contact._id !== id)
      setContacts(newContacts)
      setOpen(false)
      toast.success(data.success)
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div className="m-6 mt-20">
      <h1 className="text-3xl font-semibold mb-4">Olá {user.nome.split(" "[0])} 👋,</h1>
      <section>
        <Card>
          <CardHeader>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <CardTitle>Todos os contatos pendentes</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>Lista de todos contatos cadastrados</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Situação</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Info. Extra</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts ? (
                  contacts.map((contact) => (
                    <TableRow>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Bolt />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Opções</DropdownMenuLabel>
                            <DropdownMenuItem
                              onClick={() => changeStatus(contact._id)}
                            >
                              Alterar situação
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleWhatsapp(contact.telefone)}>
                              Chamar no WhatsApp
                            </DropdownMenuItem>
                            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                              <DialogTrigger className="p-1 text-sm hover:bg-slate-100 w-full text-start rounded">
                                <span className="ml-1">Deletar contato</span>
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
                                    <strong>{contact.nome}</strong> dos pedidos
                                    de contatos?
                                  </DialogDescription>
                                </DialogHeader>
                                <Button
                                  className="bg-red-400 hover:bg-red-500"
                                  onClick={() => deleteUser(contact._id)}
                                >
                                  Deletar
                                </Button>
                              </DialogContent>
                            </Dialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${contact.status === "Pendente" ? "bg-yellow-400 hover:bg-yellow-500" : "bg-green-400 hover:bg-green-500"}`}
                        >
                          {contact.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{contact.nome}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.telefone}</TableCell>
                      <TableCell
                        className={`${contact.comentario === "Não há comentário." ? "text-slate-300" : ""}`}
                      >
                        {contact.comentario}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <h1>Test3</h1>
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
