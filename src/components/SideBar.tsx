import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuSub
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import { Home, 
        Headset,
        Users,
        BriefcaseBusiness,
        LayoutDashboard,
        UsersRound,
        ChevronDown,
        UserX,
        UserRoundPlus,
        UserPen,
        UserRoundSearch,
        PhoneCall,
        FileUser,
       } from "lucide-react";
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'

export default function SideBar() {
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
      icon: LayoutDashboard
    },
    {
      title: "Cadastros",
      url: "/admin/cadastros",
      icon: FileUser
    },
    {
      title: "Pedido de Contato",
      url: "/admin/contatos",
      icon: PhoneCall
    },
  ]
  return (
    <Sidebar>
      <SidebarHeader className="text-2xl font-semibold">Zenith Credit</SidebarHeader>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="flex gap-2">Administração <Badge className="bg-blue-400">Privado</Badge></SidebarGroupLabel>
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
                          <UsersRound/>
                          <span>Administradores</span>
                        <ChevronDown/>
                      </span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubButton asChild>
                        <Link to="/admin/administradores">
                          <UserRoundSearch/>
                          <span>Ver Administradores</span>
                        </Link>
                      </SidebarMenuSubButton>
                    <SidebarMenuSubButton asChild>
                      <Link to="">
                        <UserRoundPlus/>
                        <span>Adicionar Administrador</span>
                      </Link>
                    </SidebarMenuSubButton>
                      <SidebarMenuSubButton asChild>
                        <Link to="">
                          <UserX/>
                          <span>Deletar Administrador</span>
                        </Link>
                      </SidebarMenuSubButton>
                      <SidebarMenuSubButton asChild>
                        <Link to="">
                          <UserPen/>
                          <span>Editar Administrador</span>
                        </Link>
                      </SidebarMenuSubButton>
                      
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
