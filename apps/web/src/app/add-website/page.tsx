"use client"

import Nav from "@/components/nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Plus, 
  Globe, 
  Clock, 
  MapPin, 
  Shield, 
  Bell,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddWebsite() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    checkInterval: "5",
    timeout: "30",
    retryAttempts: "3",
    region: "us-east",
    alertEmail: true,
    alertSlack: false,
    sslCheck: true,
    keywords: "",
  });

  const [step, setStep] = useState(1);

  const regions = [
    { id: "us-east", name: "US East", latency: "12ms", flag: "🇺🇸" },
    { id: "us-west", name: "US West", latency: "45ms", flag: "🇺🇸" },
    { id: "eu-west", name: "EU West", latency: "89ms", flag: "🇪🇺" },
    { id: "eu-central", name: "EU Central", latency: "95ms", flag: "🇪🇺" },
    { id: "asia-pacific", name: "Asia Pacific", latency: "156ms", flag: "🌏" },
  ];

  const checkIntervals = [
    { value: "1", label: "1 minute", recommended: false },
    { value: "5", label: "5 minutes", recommended: true },
    { value: "10", label: "10 minutes", recommended: false },
    { value: "30", label: "30 minutes", recommended: false },
    { value: "60", label: "1 hour", recommended: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log("Form submitted:", formData);
    router.push("/monitor");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Nav />
        
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/monitor">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Add New Monitor</h1>
                <p className="text-muted-foreground">Set up monitoring for a new website or service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: "Basic Info" },
                { num: 2, label: "Configuration" },
                { num: 3, label: "Notifications" },
              ].map((s, idx) => (
                <React.Fragment key={s.num}>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= s.num
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                      }`}
                    >
                      {step > s.num ? <CheckCircle2 className="h-5 w-5" /> : s.num}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        step >= s.num ? "text-gray-900 dark:text-gray-100" : "text-gray-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div
                      className={`flex-1 h-1 mx-4 rounded-full transition-colors ${
                        step > s.num ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Basic Information
                </CardTitle>
                <CardDescription>Enter the website or service details you want to monitor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Monitor Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Main Website, API Server"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    A friendly name to identify this monitor
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="url">URL to Monitor *</Label>
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://example.com"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    The full URL including protocol (http:// or https://)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords to Check (Optional)</Label>
                  <Input
                    id="keywords"
                    placeholder="e.g., Welcome, Login, Dashboard"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground">
                    Comma-separated keywords that should be present on the page
                  </p>
                </div>

                <Separator />

                <div className="flex justify-end gap-3">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    Next Step
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Configuration */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Monitoring Configuration
                </CardTitle>
                <CardDescription>Configure how often and from where to monitor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Check Interval *</Label>
                  <div className="grid gap-3 md:grid-cols-2">
                    {checkIntervals.map((interval) => (
                      <button
                        key={interval.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, checkInterval: interval.value })}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          formData.checkInterval === interval.value
                            ? "border-blue-600 bg-blue-50 dark:bg-blue-950"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{interval.label}</span>
                          {interval.recommended && (
                            <span className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="timeout">Request Timeout (seconds)</Label>
                    <Input
                      id="timeout"
                      type="number"
                      min="5"
                      max="120"
                      value={formData.timeout}
                      onChange={(e) => setFormData({ ...formData, timeout: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retryAttempts">Retry Attempts</Label>
                    <Input
                      id="retryAttempts"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.retryAttempts}
                      onChange={(e) => setFormData({ ...formData, retryAttempts: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Monitoring Region *
                  </Label>
                  <div className="grid gap-3">
                    {regions.map((region) => (
                      <button
                        key={region.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, region: region.id })}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          formData.region === region.id
                            ? "border-blue-600 bg-blue-50 dark:bg-blue-950"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{region.flag}</span>
                            <div>
                              <div className="font-medium">{region.name}</div>
                              <div className="text-xs text-muted-foreground">Latency: {region.latency}</div>
                            </div>
                          </div>
                          {formData.region === region.id && (
                            <CheckCircle2 className="h-5 w-5 text-blue-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Additional Checks
                  </Label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900">
                      <input
                        type="checkbox"
                        checked={formData.sslCheck}
                        onChange={(e) => setFormData({ ...formData, sslCheck: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div>
                        <div className="font-medium text-sm">SSL Certificate Monitoring</div>
                        <div className="text-xs text-muted-foreground">
                          Get alerts before SSL certificates expire
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Previous
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    Next Step
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Notifications */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose how you want to be notified about incidents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Alert Channels</Label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.alertEmail}
                        onChange={(e) => setFormData({ ...formData, alertEmail: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">
                          Receive alerts at admin@echo.com
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                        Configured
                      </span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors opacity-60">
                      <input
                        type="checkbox"
                        checked={formData.alertSlack}
                        onChange={(e) => setFormData({ ...formData, alertSlack: e.target.checked })}
                        className="w-4 h-4 text-blue-600 rounded"
                        disabled
                      />
                      <div className="flex-1">
                        <div className="font-medium">Slack Notifications</div>
                        <div className="text-sm text-muted-foreground">
                          Configure Slack in Settings first
                        </div>
                      </div>
                      <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full">
                        Not Configured
                      </span>
                    </label>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 rounded-lg">
                  <div className="flex gap-3">
                    <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                        Alert Conditions
                      </p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        You'll be notified when the monitor goes down, response time exceeds threshold, 
                        SSL certificate is expiring, or keywords are not found on the page.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Create Monitor
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </form>

        {/* Summary Card */}
        {step > 1 && (
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-900">
            <CardHeader>
              <CardTitle className="text-base">Monitor Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium">{formData.name || "Not set"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">URL:</span>
                <span className="font-medium truncate ml-4">{formData.url || "Not set"}</span>
              </div>
              {step >= 2 && (
                <>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check Interval:</span>
                    <span className="font-medium">
                      {checkIntervals.find(i => i.value === formData.checkInterval)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span className="font-medium">
                      {regions.find(r => r.id === formData.region)?.name}
                    </span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

