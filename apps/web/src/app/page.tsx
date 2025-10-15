import { DataTable } from "@/components/data-table"
import Nav from "@/components/nav"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ColumnDef } from "@tanstack/react-table"
import React from "react"

export default function Page() {
    type Payment = {
        id: string
        amount: number
        status: "pending" | "processing" | "success" | "failed"
        Name: string
        uptime: string
      }
       const columns: ColumnDef<Payment>[] = [
        {
          accessorKey: "status",
          header: "Status",
        },
        {
          accessorKey: "Name",
          header: "Name",
        },
        {
          accessorKey: "uptime",
          header: "Uptime",
        },
      ]
       const payments: Payment[] = [
        {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          Name: "m@example.com",
          uptime: "90%",
        },
        {
          id: "489e1d42",
          amount: 125,
          status: "processing",
          Name: "example@gmail.com",
          uptime: "80%",
        },
        // ...
      ]
    return (
        <div className="w-full p-12">
            <Nav />
      
<DataTable columns={columns} data={payments} />
        </div>
    )
}