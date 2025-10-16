"use client"

import Nav from "@/components/nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Globe, 
  Shield, 
  User, 
  CreditCard,
  Webhook,
  Mail,
  Slack,
  MessageSquare,
  Save,
  Key
} from "lucide-react";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Profile
    name: "Admin User",
    email: "admin@echo.com",
    company: "Echo Inc.",
    
    // Notifications
    emailNotifications: true,
    slackNotifications: false,
    webhookNotifications: false,
    
    // Monitoring
    defaultCheckInterval: "5",
    defaultTimeout: "30",
    retryAttempts: "3",
    
    // Integrations
    slackWebhook: "",
    webhookUrl: "",
    apiKey: "ech_••••••••••••••••",
  });

  // Active sessions data
  const activeSessions = [
    {
      id: "1",
      device: "Chrome on Windows",
      browser: "Chrome 120.0",
      os: "Windows 11",
      location: "Mumbai, Maharashtra, India",
      ip: "103.25.xxx.xxx",
      lastActive: "Active now",
      isCurrent: true,
    },
    {
      id: "2",
      device: "Safari on iPhone",
      browser: "Safari 17.2",
      os: "iOS 17.2",
      location: "Delhi, Delhi, India",
      ip: "157.48.xxx.xxx",
      lastActive: "2 hours ago",
      isCurrent: false,
    },
    {
      id: "3",
      device: "Firefox on Ubuntu",
      browser: "Firefox 121.0",
      os: "Ubuntu 22.04",
      location: "Bangalore, Karnataka, India",
      ip: "49.207.xxx.xxx",
      lastActive: "1 day ago",
      isCurrent: false,
    },
    {
      id: "4",
      device: "Edge on Windows",
      browser: "Edge 120.0",
      os: "Windows 10",
      location: "Pune, Maharashtra, India",
      ip: "117.239.xxx.xxx",
      lastActive: "3 days ago",
      isCurrent: false,
    },
  ];

  const notificationChannels = [
    {
      id: "email",
      name: "Email Notifications",
      description: "Receive alerts via email",
      icon: Mail,
      enabled: settings.emailNotifications,
      configured: true,
    },
    {
      id: "slack",
      name: "Slack Integration",
      description: "Send alerts to Slack channels",
      icon: Slack,
      enabled: settings.slackNotifications,
      configured: false,
    },
    {
      id: "webhook",
      name: "Custom Webhooks",
      description: "POST alerts to custom endpoints",
      icon: Webhook,
      enabled: settings.webhookNotifications,
      configured: false,
    },
  ];

  const regions = [
    { id: "us-east", name: "US East", latency: "12ms" },
    { id: "us-west", name: "US West", latency: "45ms" },
    { id: "eu-west", name: "EU West", latency: "89ms" },
    { id: "eu-central", name: "EU Central", latency: "95ms" },
    { id: "asia-pacific", name: "Asia Pacific", latency: "156ms" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Nav />
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg">
              <SettingsIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">Manage your account and monitoring preferences</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {[
                    { icon: User, label: "Profile", active: true },
                    // { icon: Bell, label: "Notifications", active: false },
                    // { icon: Globe, label: "Monitoring", active: false },
                    // { icon: Webhook, label: "Integrations", active: false },
                    // { icon: Shield, label: "Security", active: false },
                    { icon: CreditCard, label: "Billing", active: false },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={index}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          item.active
                            ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
                <CardDescription>Update your personal and company information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={settings.name}
                    onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={settings.company}
                    onChange={(e) => setSettings({ ...settings, company: e.target.value })}
                  />
                </div>
                <Separator />
                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Channels
                </CardTitle>
                <CardDescription>Configure how you receive monitoring alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notificationChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.id}
                      className={`flex items-center justify-between p-4 border rounded-lg ${channel.id === "email" ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed"}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-sm">{channel.name}</h3>
                            {channel.configured ? (
                              <span className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                                Configured
                              </span>
                            ) : (
                              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full">
                                Not Configured
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{channel.description}</p>
                        </div>
                      </div>
                      <Button
                        variant={channel.enabled ? "default" : "outline"}
                        size="sm"
                      >
                        {channel.enabled ? "Enabled" : "Enable"}
                      </Button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Monitoring Defaults */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Monitoring Defaults
                </CardTitle>
                <CardDescription>Set default values for new monitors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="checkInterval">Check Interval (minutes)</Label>
                    <Input
                      id="checkInterval"
                      type="number"
                      value={settings.defaultCheckInterval}
                      onChange={(e) => setSettings({ ...settings, defaultCheckInterval: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeout">Timeout (seconds)</Label>
                    <Input
                      id="timeout"
                      type="number"
                      value={settings.defaultTimeout}
                      onChange={(e) => setSettings({ ...settings, defaultTimeout: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retryAttempts">Retry Attempts</Label>
                    <Input
                      id="retryAttempts"
                      type="number"
                      value={settings.retryAttempts}
                      onChange={(e) => setSettings({ ...settings, retryAttempts: e.target.value })}
                    />
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-sm font-semibold mb-3">Monitoring Regions</h3>
                  <div className="grid gap-2">
                    {regions.map((region) => (
                      <div
                        key={region.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{region.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-muted-foreground">{region.latency}</span>
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            Select
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* Devices & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Devices & Security
                </CardTitle>
                <CardDescription>Manage your Devices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">This device</Label>
                  <div className="flex gap-2">
                    <Card className="w-full">
                      <CardHeader>
                        <CardTitle>Firefox, Web device</CardTitle>
                        <CardDescription>Device ID: 1234567890</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-muted-foreground">
                           Varansi, Up, India
                        </p>
                      </CardContent>
                    </Card>
                    {/* <Button variant="outline">Regenerate</Button> */}
                  </div>
                  <Button variant={"destructive"}  className="text-xs m-2 ">
                   Terminate All Other Session
                  </Button>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Active Sessions</h3>
                    <p className="text-xs text-muted-foreground">Manage devices that are currently signed in to your account</p>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Device & Browser</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>IP Address</TableHead>
                          <TableHead>Last Active</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {activeSessions.map((session) => (
                          <TableRow key={session.id} className={session.isCurrent ? "bg-blue-50 dark:bg-blue-950/20" : ""}>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-sm">{session.device}</span>
                                  {session.isCurrent && (
                                    <span className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                                      Current
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {session.browser} • {session.os}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm">{session.location}</span>
                            </TableCell>
                            <TableCell>
                              <span className="text-sm font-mono text-muted-foreground">{session.ip}</span>
                            </TableCell>
                            <TableCell>
                              <span className={`text-sm ${session.isCurrent ? "text-green-600 dark:text-green-400 font-medium" : "text-muted-foreground"}`}>
                                {session.lastActive}
                              </span>
                            </TableCell>
                            <TableCell className="text-right">
                              {!session.isCurrent && (
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950">
                                  Revoke
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <Separator />
             
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
