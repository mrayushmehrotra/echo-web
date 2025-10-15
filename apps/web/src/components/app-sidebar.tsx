import { BrainCircuit, Home, Inbox, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { memo } from "react";


// Menu items.


export default memo(

     function AppSidebar() {
        const items = [
        {
          title: "Home",
          url: "/",
          icon: Home,
          count: 1,
        },
        {
          title: "Monitor",
          url: "/",
          icon: Inbox,
          count: 2, 
        },
        {
          title: "AI Insights",
          url: "/ai-insights",
          icon: BrainCircuit,
          count: 4,
        },
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,   
          count: 5,
        },
      ]
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            <h1>Echo</h1>
            <Button>User Logo</Button>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Core</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2" >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center justify-between">
                        <div className="flex gap-x-4 items-center">

                      <item.icon />
                      <span>{item.title}</span>
                        </div>
                      {item.count > 0 && (
                        <span className="ml-2 rounded-full  text-zinc-400  px-2 py-1 text-xs">
                          {item.count}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
        )