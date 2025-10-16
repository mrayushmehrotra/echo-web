"use client"

import { Activity, BrainCircuit, Home, LayoutDashboard, Plus, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { memo } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.

export default memo(function AppSidebar() {
  const pathname = usePathname();
  
  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      title: "Monitors",
      url: "/monitor",
      icon: Activity,
      badge: "12",
    },
    {
      title: "AI Insights",
      url: "/ai-insights",
      icon: BrainCircuit,
      badge: "New",
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      badge: null,
    },
  ];
  
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex mt-6 mb-4 items-center px-3 gap-x-3 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-data-[collapsible=icon]:scale-150 group-data-[collapsible=icon]:bg-none transition-transform">
              <Image
                src="/favicon.svg"
                alt="Logo"
                width={20}
                height={20}
                className="invert"
              />
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <h1 className="font-bold text-lg tracking-tight">Echo</h1>
              <p className="text-xs text-muted-foreground">Uptime Monitor</p>
            </div>
          </div>
        </SidebarGroup>

        <SidebarGroup className="px-3 group-data-[collapsible=icon]:px-2">
          <Link href="/add-website" className="block">
            <Button className="w-full group-data-[collapsible=icon]:w-9 group-data-[collapsible=icon]:h-9 group-data-[collapsible=icon]:p-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all">
              <Plus className="group-data-[collapsible=icon]:mx-auto h-4 w-4" />
              <span className="group-data-[collapsible=icon]:hidden ml-2">
                Add Monitor
              </span>
            </Button>
          </Link>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      className={`
                        mx-2 rounded-lg transition-all
                        ${isActive 
                          ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-medium shadow-sm' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex gap-x-3 items-center">
                          <item.icon className={`h-4 w-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                          <span>{item.title}</span>
                        </div>
                        {item.badge && (
                          <span className={`
                            text-xs px-2 py-0.5 rounded-full font-medium
                            ${isActive 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }
                          `}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4 group-data-[collapsible=icon]:p-2">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm group-data-[collapsible=icon]:scale-110">
            A
          </div>
          <div className="group-data-[collapsible=icon]:hidden flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin User</p>
            <p className="text-xs text-muted-foreground truncate">admin@echo.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
});

