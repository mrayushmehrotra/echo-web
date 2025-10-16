"use client"

import { DataTable } from "@/components/data-table";
import Nav from "@/components/nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  MoreVertical, 
  Pause, 
  Play, 
  Trash2, 
  XCircle,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react";
import React from "react";
import Link from "next/link";

export default function MonitorPage() {
  type Monitor = {
    id: string;
    name: string;
    url: string;
    status: "operational" | "degraded" | "down" | "paused";
    uptime: string;
    uptimeValue: number;
    responseTime: string;
    responseValue: number;
    lastChecked: string;
    checkInterval: string;
    region: string;
    ssl: boolean;
    sslExpiry?: string;
  };

  const monitors: Monitor[] = [
    {
      id: "1",
      name: "Main Website",
      url: "https://example.com",
      status: "operational",
      uptime: "99.9%",
      uptimeValue: 99.9,
      responseTime: "180ms",
      responseValue: 180,
      lastChecked: "2 min ago",
      checkInterval: "5 min",
      region: "US East",
      ssl: true,
      sslExpiry: "90 days",
    },
    {
      id: "2",
      name: "API Server",
      url: "https://api.example.com",
      status: "operational",
      uptime: "99.7%",
      uptimeValue: 99.7,
      responseTime: "245ms",
      responseValue: 245,
      lastChecked: "1 min ago",
      checkInterval: "5 min",
      region: "EU West",
      ssl: true,
      sslExpiry: "120 days",
    },
    {
      id: "3",
      name: "CDN Endpoint",
      url: "https://cdn.example.com",
      status: "degraded",
      uptime: "98.5%",
      uptimeValue: 98.5,
      responseTime: "520ms",
      responseValue: 520,
      lastChecked: "3 min ago",
      checkInterval: "5 min",
      region: "Asia Pacific",
      ssl: true,
      sslExpiry: "45 days",
    },
    {
      id: "4",
      name: "Database Server",
      url: "https://db.example.com",
      status: "operational",
      uptime: "99.9%",
      uptimeValue: 99.9,
      responseTime: "95ms",
      responseValue: 95,
      lastChecked: "1 min ago",
      checkInterval: "2 min",
      region: "US West",
      ssl: true,
      sslExpiry: "180 days",
    },
    {
      id: "5",
      name: "Auth Service",
      url: "https://auth.example.com",
      status: "operational",
      uptime: "100%",
      uptimeValue: 100,
      responseTime: "120ms",
      responseValue: 120,
      lastChecked: "2 min ago",
      checkInterval: "5 min",
      region: "US East",
      ssl: true,
      sslExpiry: "200 days",
    },
    {
      id: "6",
      name: "Payment Gateway",
      url: "https://pay.example.com",
      status: "operational",
      uptime: "99.8%",
      uptimeValue: 99.8,
      responseTime: "310ms",
      responseValue: 310,
      lastChecked: "4 min ago",
      checkInterval: "5 min",
      region: "EU Central",
      ssl: true,
      sslExpiry: "60 days",
    },
    {
      id: "7",
      name: "Email Service",
      url: "https://mail.example.com",
      status: "paused",
      uptime: "99.5%",
      uptimeValue: 99.5,
      responseTime: "450ms",
      responseValue: 450,
      lastChecked: "30 min ago",
      checkInterval: "10 min",
      region: "US East",
      ssl: true,
      sslExpiry: "150 days",
    },
    {
      id: "8",
      name: "Analytics Dashboard",
      url: "https://analytics.example.com",
      status: "operational",
      uptime: "99.6%",
      uptimeValue: 99.6,
      responseTime: "280ms",
      responseValue: 280,
      lastChecked: "5 min ago",
      checkInterval: "10 min",
      region: "US West",
      ssl: true,
      sslExpiry: "90 days",
    },
  ];

  const columns: ColumnDef<Monitor>[] = [
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <div className="flex items-center gap-2">
            {status === "operational" && (
              <>
                <div className="relative">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <div className="absolute inset-0 h-5 w-5 rounded-full bg-green-500 animate-ping opacity-20" />
                </div>
                <span className="text-green-600 font-medium text-sm">Up</span>
              </>
            )}
            {status === "degraded" && (
              <>
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                <span className="text-yellow-600 font-medium text-sm">Degraded</span>
              </>
            )}
            {status === "down" && (
              <>
                <XCircle className="h-5 w-5 text-red-500" />
                <span className="text-red-600 font-medium text-sm">Down</span>
              </>
            )}
            {status === "paused" && (
              <>
                <Pause className="h-5 w-5 text-gray-400" />
                <span className="text-gray-500 font-medium text-sm">Paused</span>
              </>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "name",
      header: "Monitor",
      cell: ({ row }) => {
        return (
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">{row.getValue("name")}</span>
              {row.original.ssl && (
                <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">SSL</span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <ExternalLink className="h-3 w-3" />
              <a href={row.original.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                {row.original.url}
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              {row.original.region} • Check every {row.original.checkInterval}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "uptime",
      header: "Uptime (30d)",
      cell: ({ row }) => {
        const uptime = row.getValue("uptime") as string;
        const uptimeValue = row.original.uptimeValue;
        return (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-full max-w-[120px] bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all ${
                    uptimeValue >= 99.5
                      ? "bg-green-500"
                      : uptimeValue >= 98
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: uptime }}
                />
              </div>
              <span className="font-bold text-sm min-w-[50px]">{uptime}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {uptimeValue >= 99.5 ? (
                <>
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-600">Excellent</span>
                </>
              ) : uptimeValue >= 98 ? (
                <>
                  <Minus className="h-3 w-3 text-yellow-500" />
                  <span className="text-yellow-600">Good</span>
                </>
              ) : (
                <>
                  <TrendingDown className="h-3 w-3 text-red-500" />
                  <span className="text-red-600">Poor</span>
                </>
              )}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "responseTime",
      header: "Response Time",
      cell: ({ row }) => {
        const responseValue = row.original.responseValue;
        return (
          <div className="space-y-1">
            <span className={`font-mono text-sm font-semibold ${
              responseValue < 200 ? "text-green-600" :
              responseValue < 500 ? "text-yellow-600" :
              "text-red-600"
            }`}>
              {row.getValue("responseTime")}
            </span>
            <div className="text-xs text-muted-foreground">
              {responseValue < 200 ? "Fast" : responseValue < 500 ? "Moderate" : "Slow"}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "lastChecked",
      header: "Last Check",
      cell: ({ row }) => {
        return (
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span>{row.getValue("lastChecked")}</span>
            </div>
            {row.original.sslExpiry && (
              <div className="text-xs text-muted-foreground">
                SSL: {row.original.sslExpiry}
              </div>
            )}
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              {row.original.status === "paused" ? (
                <Play className="h-4 w-4 text-green-600" />
              ) : (
                <Pause className="h-4 w-4 text-gray-600" />
              )}
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        );
      },
    },
  ];

  // Calculate stats
  const totalMonitors = monitors.length;
  const activeMonitors = monitors.filter(m => m.status !== "paused").length;
  const operationalMonitors = monitors.filter(m => m.status === "operational").length;
  const degradedMonitors = monitors.filter(m => m.status === "degraded").length;
  const downMonitors = monitors.filter(m => m.status === "down").length;
  const avgUptime = (monitors.reduce((sum, m) => sum + m.uptimeValue, 0) / totalMonitors).toFixed(1);
  const avgResponseTime = Math.round(monitors.reduce((sum, m) => sum + m.responseValue, 0) / totalMonitors);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-gray-950">

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Nav />
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">All Monitors</h1>
            <p className="text-muted-foreground">Manage and track all your website monitors</p>
          </div>
          <Link href="/add-website">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Activity className="h-4 w-4 mr-2" />
              Add New Monitor
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Monitors</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMonitors}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-600 font-medium">{activeMonitors} active</span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Operational</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{operationalMonitors}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {degradedMonitors} degraded, {downMonitors} down
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Uptime</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgUptime}%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Last 30 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgResponseTime}ms</div>
              <p className="text-xs text-muted-foreground mt-1">
                Across all monitors
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Monitors Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Monitor List</CardTitle>
                <CardDescription>Detailed view of all monitoring endpoints</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={monitors} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
