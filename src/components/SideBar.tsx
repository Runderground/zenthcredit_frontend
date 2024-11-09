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
  Collapsible,
  
} from "@/components/ui/sidebar";
import { Home, 
        Headset,
        Users,
        BriefcaseBusiness,
        LayoutDashboard } from "lucide-react";
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
      url: "/",
      icon: LayoutDashboard
    },
    {
      title: "Cadastros",
      url: "/",
      icon: LayoutDashboard
    },
    {
      title: "Pedido de Contato",
      url: "/",
      icon: LayoutDashboard
    },
  ]
  return (
    <Sidebar>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
