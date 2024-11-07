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
} from "@/components/ui/sidebar";
import { Home, Headset, Users, BriefcaseBusiness } from "lucide-react";

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
      title: "Serviços",
      url: "/#services",
      icon: BriefcaseBusiness,
    },
    {
      title: "Contato",
      url: "/contato",
      icon: Headset,
    },
  ];
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
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
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
