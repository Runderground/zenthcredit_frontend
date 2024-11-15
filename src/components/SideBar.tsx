import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSubButton,
  SidebarMenuSub,
  SidebarFooter
} from "@/components/ui/sidebar";

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Home,
  Headset,
  Users,
  BriefcaseBusiness,
  LayoutDashboard,
  UsersRound,
  ChevronDown,
  UserRoundPlus,
  UserRoundSearch,
  PhoneCall,
  FileUser,
  Banknote,
  CarFront,
  House,
  Landmark,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import toast from 'react-hot-toast'

import axios from 'axios'

import { useState } from 'react'

import { useAuth } from '../context/authContext'

const formSchema = z.object({
  nome: z.string().nonempty({message: "Este campo é obrigatório"}).min(3, {message: "O seu nome deve ter no mínimo 3 caracteres"}).max(50, {message: "Você excedeu o limite de caracteres, caso precise, abrevie seu nome. Ex: João S. Silva"}).regex(/^[a-zA-Z0-9\s]*$/, {message: "Não é permitido caracteres especiais"}),
  password: z.string().nonempty({message: "Este campo é obrigatório"}).min(3, {message: "O seu nome deve ter no mínimo 3 caracteres"}).max(255, {message: "Você excedeu o limite de caracteres"}),
    email: z.string().email({message: "Insira um email válido!"}).nonempty({message: "Este campo é obrigatório"}).min(3, {message: "O seu nome deve ter no mínimo 3 caracteres"}).max(100, {message: "Você excedeu o limite de *100* caracteres"})
})

export default function SideBar() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email:"",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/admins/register`, values, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setOpen(false)
      setLoading(false)
      toast.success(data.success)
    } catch (error:any) {
      setLoading(false)
      console.log(error)
      toast.error(error.response.data.error)
    }
  }

  const {user, token, logout} = useAuth()
  const [open,setOpen] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  
  const navegationItems = [
    {
      title: "Início",
      url: "/",
      icon: Home,
    },
    {
      title: "Sobre nós",
      url: "/sobre-nos",
      icon: Users,
    },
    {
      title: "Contato",
      url: "/contato",
      icon: Headset,
    },
  ];

  const adminItems = [
    {
      title: "Painel",
      url: "/admin/painel",
      icon: LayoutDashboard,
    },
    {
      title: "Cadastros",
      url: "/admin/cadastros",
      icon: FileUser,
    },
    {
      title: "Pedido de Contato",
      url: "/admin/contatos",
      icon: PhoneCall,
    },
  ];

  const loanItems = [
    {
      title: "Empréstimo Pessoal",
      url: "/emprestimos/pessoal",
      icon: Banknote,
    },
    {
      title: "Com Garantia de Veículo",
      url: "/emprestimos/garantia-veiculo",
      icon: CarFront,
    },
    {
      title: "Com Garantia de Imóvel",
      url: "/emprestimos/garantia-imovel",
      icon: House,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row text-lg items-center font-semibold">
        <img src="https://i.imgur.com/j4QZ5vg.png" alt="Logo" className="h-20 w-20"/>
        <h2 className="uppercase text-white">Zenith <strong className="text-blue-500">CREDIT</strong></h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-green-500">Navegar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navegationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-white hover:bg-slate-700 hover:text-green-500" asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-white hover:bg-slate-700 hover:text-green-500" asChild>
                  <a href="/#services">
                    <BriefcaseBusiness />
                    <span>Serviços</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="text-white hover:bg-slate-700 hover:text-green-500" asChild>
                      <span className="cursor-pointer select-none w-full text-white hover:bg-slate-700 hover:text-green-500">
                        <Landmark />
                        <span>Empréstimos</span>
                        <ChevronDown />
                      </span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {loanItems.map((item) => (
                        <SidebarMenuSubButton className="text-white hover:bg-slate-700 hover:text-green-500" key={item.title} asChild>
                          <Link to={item.url}>
                            <item.icon className="dark"/>
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {token ? (<SidebarGroup>
                   <SidebarGroupLabel className="flex gap-2 text-green-500">
                     Administração <Badge className="bg-blue-400 hover:bg-blue-500">Privado</Badge>
                   </SidebarGroupLabel>
                   <SidebarGroupContent>
                     <SidebarMenu>
                       {adminItems.map((item) => (
                         <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton className="text-white hover:bg-slate-700 hover:text-green-500" asChild>
                             <Link to={item.url}>
                               <item.icon />
                               <span>{item.title}</span>
                             </Link>
                           </SidebarMenuButton>
                         </SidebarMenuItem>
                       ))}
                       <Collapsible defaultOpen className="group/collapsible">
                         <SidebarMenuItem>
                           <CollapsibleTrigger asChild>
                             <SidebarMenuButton className="text-white hover:bg-slate-700 hover:text-green-500" asChild>
                               <span className="cursor-pointer select-none w-full">
                                 <UsersRound />
                                 <span>Administradores</span>
                                 <ChevronDown />
                               </span>
                             </SidebarMenuButton>
                           </CollapsibleTrigger>
                           <CollapsibleContent>
                             <SidebarMenuSub>
                               <SidebarMenuSubButton className="text-white hover:bg-slate-700 hover:text-green-500" asChild>
                                 <Link to="/admin/admins">
                                   <UserRoundSearch className="dark"/>
                                   <span>Ver Administradores</span>
                                 </Link>
                               </SidebarMenuSubButton>
                               <SidebarMenuSubButton asChild>
                                 <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                                   <DialogTrigger className="flex gap-1 items-center p-1 text-sm hover:bg-slate-700 w-full text-start rounded text-white hover:text-green-500">
                                     <UserRoundPlus size={17}/>
                                     <span className="ml-1">Adicionar Administrador</span>
                                   </DialogTrigger>
                                   <DialogContent>
                                     <DialogHeader>
                                       <DialogTitle>
                                         Crie uma conta de <span className="text-yellow-400 font-bold">Administrador</span>
                                       </DialogTitle>
                                       <DialogDescription>
                                         Crie uma conta de administrador para acessar o painel de administração.
                                       </DialogDescription>                             
                                     </DialogHeader>
                                     <Form {...form}>
                                       <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2">
                                         <FormField 
                                           control={form.control}
                                           name="nome"
                                           render={({ field }) => (
                                             <FormItem>
                                               <FormLabel>Nome :</FormLabel>
                                               <FormControl>
                                                 <Input placeholder="Escreva seu Nome" {...field}/>
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
                                               <FormLabel>Email :</FormLabel>
                                               <FormControl>
                                                 <Input placeholder="exemplo@gmail.com" {...field}/>
                                               </FormControl>
                                               <FormMessage/>
                                             </FormItem>
                                           )}
                                           />
                                         <FormField 
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                              <FormItem>
                                                <FormLabel>Senha :</FormLabel>
                                                <FormControl>
                                                  <Input type="password" placeholder="************" {...field}/>
                                                </FormControl>
                                                <FormMessage/>
                                              </FormItem>
                                            )}
                                            />
                                         
                                         <Button className="mb-4 bg-green-500 hover:bg-green-600" type="submit" disabled={loading}>{loading ? 'Aguarde...' : 'Cadastrar'}</Button>
                                       </form>
                                     </Form>
                                   </DialogContent>
                                 </Dialog>
                               </SidebarMenuSubButton>
                             </SidebarMenuSub>
                           </CollapsibleContent>
                         </SidebarMenuItem>
                       </Collapsible>
                     </SidebarMenu>
                   </SidebarGroupContent>
                 </SidebarGroup>) : ''}
      </SidebarContent>
      {token ? (<SidebarFooter className="flex flex-col">
                 <div className="flex flex-row gap-2">
                   <Avatar>
                      <AvatarFallback className="bg-blue-400 text-white font-bold">{user.nome.charAt(0)}</AvatarFallback>
                    </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm text-blue-500 font-semibold">{user.nome}</span>
                        <span className="text-xs text-slate-300">{user.email}</span>
                      </div>
                 </div>
        <Button onClick={logout} className="bg-red-400 hover:bg-red-500"><LogOut/></Button>
               </SidebarFooter>) : ''}
    </Sidebar>
  );
}
