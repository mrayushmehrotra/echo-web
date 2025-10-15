import { Plus } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export default function Nav() {

    return (
        <nav >
            <ul className="flex items-center justify-between px-8 pb-4">
                <li>
                    <p
                    className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    >
                   <Button variant={"outline"}>
                         <SidebarTrigger/> 
                         </Button>
                    </p>
                </li>
                <li>
                    <Button
                    className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    >
                        <Plus /> Add Website
                    </Button>
                </li>
            </ul>
        </nav>
    );
}
