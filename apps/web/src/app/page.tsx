"use client"

import { DataTable } from "@/components/data-table";
import Nav from "@/components/nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ColumnDef } from "@tanstack/react-table";
import { Activity, AlertCircle, CheckCircle2, Clock, Globe, TrendingUp, XCircle } from "lucide-react";
import React from "react";

export default function Page() {
  type Website = {
    id: string;
    name: string;
    url: string;
    status: "operational" | "degraded" | "down";
    uptime: string;
    responseTime: string;
    lastChecked: string;
  };

  type Incident = {
    id: string;
    website: string;
    type: string;
    status: "resolved" | "investigating" | "monitoring";
    timestamp: string;
  };

  // Stats data
  const stats = [
    {
      title: "Overall Uptime",
      value: "99.8%",
      change: "+0.2%",
      icon: TrendingUp,
      description: "Last 30 days",
      trend: "up",
    },
    {
      title: "Avg Response Time",
      value: "245ms",
      change: "-12ms",
      icon: Clock,
      description: "Across all monitors",
      trend: "down",
    },
    {
      title: "Active Monitors",
      value: "12",
      change: "+2",
      icon: Globe,
      description: "Currently tracking",
      trend: "up",
    },
    {
      title: "Incidents",
      value: "3",
      change: "-5",
      icon: AlertCircle,
      description: "Last 7 days",
      trend: "down",
    },
  ];

  // Website monitoring data
  const websites: Website[] = [
    {
      id: "1",
      name: "Main Website",
      url: "https://example.com",
      status: "operational",
      uptime: "99.9%",
      responseTime: "180ms",
      lastChecked: "2 min ago",
    },
    {
      id: "2",
      name: "API Server",
      url: "https://api.example.com",
      status: "operational",
      uptime: "99.7%",
      responseTime: "245ms",
      lastChecked: "1 min ago",
    },
    {
      id: "3",
      name: "CDN Endpoint",
      url: "https://cdn.example.com",
      status: "degraded",
      uptime: "98.5%",
      responseTime: "520ms",
      lastChecked: "3 min ago",
    },
    {
      id: "4",
      name: "Database Server",
      url: "https://db.example.com",
      status: "operational",
      uptime: "99.9%",
      responseTime: "95ms",
      lastChecked: "1 min ago",
    },
    {
      id: "5",
      name: "Auth Service",
      url: "https://auth.example.com",
      status: "operational",
      uptime: "100%",
      responseTime: "120ms",
      lastChecked: "2 min ago",
    },
  ];

  const incidents: Incident[] = [
    {
      id: "1",
      website: "CDN Endpoint",
      type: "High Response Time",
      status: "monitoring",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      website: "API Server",
      type: "Connection Timeout",
      status: "resolved",
      timestamp: "1 day ago",
    },
    {
      id: "3",
      website: "Main Website",
      type: "SSL Certificate",
      status: "resolved",
      timestamp: "3 days ago",
    },
  ];

  const websiteColumns: ColumnDef<Website>[] = [
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <div className="flex items-center gap-2">
            {status === "operational" && (
              <>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-green-600 font-medium">Operational</span>
              </>
            )}
            {status === "degraded" && (
              <>
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <span className="text-yellow-600 font-medium">Degraded</span>
              </>
            )}
            {status === "down" && (
              <>
                <XCircle className="h-4 w-4 text-red-500" />
                <span className="text-red-600 font-medium">Down</span>
              </>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Monitor Name",
      cell: ({ row }) => {
        return (
          <div>
            <div className="font-medium">{row.getValue("name")}</div>
            <div className="text-sm text-muted-foreground">{row.original.url}</div>
          </div>
        );
      },
    },
    {
      accessorKey: "uptime",
      header: "Uptime (30d)",
      cell: ({ row }) => {
        const uptime = row.getValue("uptime") as string;
        const uptimeValue = parseFloat(uptime);
        return (
          <div className="flex items-center gap-2">
            <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  uptimeValue >= 99.5
                    ? "bg-green-500"
                    : uptimeValue >= 98
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: uptime }}
              />
            </div>
            <span className="font-semibold text-sm">{uptime}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "responseTime",
      header: "Response Time",
      cell: ({ row }) => {
        return <span className="font-mono text-sm">{row.getValue("responseTime")}</span>;
      },
    },
    {
      accessorKey: "lastChecked",
      header: "Last Checked",
      cell: ({ row }) => {
        return <span className="text-sm text-muted-foreground">{row.getValue("lastChecked")}</span>;
      },
    },
  ];

  const incidentColumns: ColumnDef<Incident>[] = [
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <div className="flex items-center">
            {status === "resolved" && (
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Resolved
              </span>
            )}
            {status === "investigating" && (
              <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                Investigating
              </span>
            )}
            {status === "monitoring" && (
              <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                Monitoring
              </span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "website",
      header: "Website",
      cell: ({ row }) => {
        return <span className="font-medium">{row.getValue("website")}</span>;
      },
    },
    {
      accessorKey: "type",
      header: "Incident Type",
    },
    {
      accessorKey: "timestamp",
      header: "Time",
      cell: ({ row }) => {
        return <span className="text-sm text-muted-foreground">{row.getValue("timestamp")}</span>;
      },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Nav />
        
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Uptime Dashboard</h1>
          <p className="text-muted-foreground">Monitor your services and track performance metrics in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span
                      className={`font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-blue-600"
                      }`}
                    >
                      {stat.change}
                    </span>{" "}
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Monitors Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              <CardTitle>Active Monitors</CardTitle>
            </div>
            <CardDescription>Real-time status of all monitored services</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={websiteColumns} data={websites} />
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              <CardTitle>Recent Incidents</CardTitle>
            </div>
            <CardDescription>Track and manage service disruptions</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={incidentColumns} data={incidents} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

