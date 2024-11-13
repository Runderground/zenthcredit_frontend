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
  UserX,
  UserRoundPlus,
  // UserPen,
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

import { useAuth } from '../context/authContext'

export default function SideBar() {

  const {user, token, logout} = useAuth()
  
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
      url: "/emprestimo/pessoal",
      icon: Banknote,
    },
    {
      title: "Com Garantia de Veículo",
      url: "/emprestimo/garantia-veiculo",
      icon: CarFront,
    },
    {
      title: "Com Garantia de Imóvel",
      url: "/emprestimo/garantia-imovel",
      icon: House,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="text-2xl font-semibold">
        Zenith Credit
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navegationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/#services">
                    <BriefcaseBusiness />
                    <span>Serviços</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <span className="cursor-pointer select-none w-full">
                        <Landmark />
                        <span>Empréstimos</span>
                        <ChevronDown />
                      </span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {loanItems.map((item) => (
                        <SidebarMenuSubButton asChild>
                          <Link to={item.url}>
                            <item.icon />
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
                   <SidebarGroupLabel className="flex gap-2">
                     Administração <Badge className="bg-blue-400">Privado</Badge>
                   </SidebarGroupLabel>
                   <SidebarGroupContent>
                     <SidebarMenu>
                       {adminItems.map((item) => (
                         <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton asChild>
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
                             <SidebarMenuButton asChild>
                               <span className="cursor-pointer select-none w-full">
                                 <UsersRound />
                                 <span>Administradores</span>
                                 <ChevronDown />
                               </span>
                             </SidebarMenuButton>
                           </CollapsibleTrigger>
                           <CollapsibleContent>
                             <SidebarMenuSub>
                               <SidebarMenuSubButton asChild>
                                 <Link to="/admin/administradores">
                                   <UserRoundSearch />
                                   <span>Ver Administradores</span>
                                 </Link>
                               </SidebarMenuSubButton>
                               <SidebarMenuSubButton asChild>
                                 <Link to="">
                                   <UserRoundPlus />
                                   <span>Adicionar Administrador</span>
                                 </Link>
                               </SidebarMenuSubButton>
                               <SidebarMenuSubButton asChild>
                                 <Link to="">
                                   <UserX />
                                   <span>Deletar Administrador</span>
                                 </Link>
                               </SidebarMenuSubButton>
                               {/* <SidebarMenuSubButton asChild>
                                 <Link to="">
                                   <UserPen />
                                   <span>Editar Administrador</span>
                                 </Link>
                               </SidebarMenuSubButton> */}
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
                        <span className="text-sm text-slate-600 font-semibold">{user.nome}</span>
                        <span className="text-xs text-slate-300">{user.email}</span>
                      </div>
                 </div>
        <Button onClick={logout} className="bg-red-400 hover:bg-red-500"><LogOut/></Button>
               </SidebarFooter>) : ''}
    </Sidebar>
  );
}
