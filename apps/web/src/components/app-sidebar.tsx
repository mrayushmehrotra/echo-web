import { BrainCircuit, Home, Inbox, Plus, Settings } from "lucide-react"

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
import { memo } from "react";
import Image from "next/image";
import { Button } from "./ui/button";


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
          url: "/monitor",
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
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center p-2 gap-x-2 group-data-[collapsible=icon]:justify-center"> 

        <Image src="/favicon.svg" alt="Logo" width={32} height={32} className="group-data-[collapsible=icon]:mx-auto" />    
        <h1
           className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] group-data-[collapsible=icon]:hidden"
           >Echo</h1> 
           </div>
           
        </SidebarGroup>


<SidebarGroup className="pb-8 pt-8 group-data-[collapsible=icon]:px-0" >
  <Button className="group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:mx-auto">
    <Plus className="group-data-[collapsible=icon]:mx-auto"/>
    <span className="group-data-[collapsible=icon]:hidden">Add Website</span>
  </Button>
</SidebarGroup>


        <SidebarGroup>
          <SidebarGroupLabel>Core</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url} className="flex items-center justify-between">
                        <div className="flex gap-x-4 items-center">

                      <item.icon />
                      <span>{item.title}</span>
                        </div>
                      {item.count > 0 && (
                        <span className="ml-2 rounded-full  text-zinc-400 text-xs">
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