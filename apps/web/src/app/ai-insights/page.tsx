"use client"

import Nav from "@/components/nav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb, 
  Target,
  Zap,
  Shield,
  Clock,
  Activity,
  ArrowRight,
  Sparkles
} from "lucide-react";
import React from "react";

export default function AIInsightsPage() {
  const insights = [
    {
      id: 1,
      type: "warning",
      severity: "high",
      title: "CDN Performance Degradation Detected",
      description: "Your CDN Endpoint has shown a 45% increase in response time over the past 7 days. This pattern typically indicates capacity issues or routing problems.",
      recommendation: "Consider scaling your CDN resources or reviewing your traffic routing configuration.",
      impact: "High",
      affectedServices: ["CDN Endpoint"],
      timestamp: "2 hours ago",
      confidence: 94,
    },
    {
      id: 2,
      type: "optimization",
      severity: "medium",
      title: "SSL Certificate Renewal Approaching",
      description: "3 of your monitored services have SSL certificates expiring within 60 days. Proactive renewal can prevent service disruptions.",
      recommendation: "Set up automated SSL certificate renewal using Let's Encrypt or your certificate provider's API.",
      impact: "Medium",
      affectedServices: ["CDN Endpoint", "Payment Gateway", "Main Website"],
      timestamp: "5 hours ago",
      confidence: 100,
    },
    {
      id: 3,
      type: "success",
      severity: "low",
      title: "Excellent Uptime Performance",
      description: "Your Auth Service has maintained 100% uptime for 90 consecutive days. This demonstrates exceptional reliability.",
      recommendation: "Document your current configuration and monitoring setup as a best practice template for other services.",
      impact: "Low",
      affectedServices: ["Auth Service"],
      timestamp: "1 day ago",
      confidence: 100,
    },
    {
      id: 4,
      type: "prediction",
      severity: "medium",
      title: "Potential Traffic Spike Predicted",
      description: "Based on historical patterns, we predict a 35% increase in traffic to your Main Website this weekend. Current capacity may be insufficient.",
      recommendation: "Consider temporarily scaling up resources or enabling auto-scaling for the weekend period.",
      impact: "Medium",
      affectedServices: ["Main Website", "API Server"],
      timestamp: "3 hours ago",
      confidence: 87,
    },
  ];

  const recommendations = [
    {
      title: "Implement Auto-Scaling",
      description: "Set up automatic scaling for services experiencing variable load patterns",
      priority: "High",
      estimatedImpact: "+2.5% uptime",
      icon: Zap,
    },
    {
      title: "Enable Multi-Region Monitoring",
      description: "Monitor from multiple geographic locations to detect regional issues",
      priority: "Medium",
      estimatedImpact: "+15% issue detection",
      icon: Target,
    },
    {
      title: "Configure Alert Thresholds",
      description: "Fine-tune alert thresholds to reduce false positives by 40%",
      priority: "Medium",
      estimatedImpact: "-40% noise",
      icon: Shield,
    },
    {
      title: "Optimize Check Intervals",
      description: "Adjust monitoring frequency based on service criticality",
      priority: "Low",
      estimatedImpact: "-20% costs",
      icon: Clock,
    },
  ];

  const metrics = [
    {
      title: "AI Predictions Made",
      value: "247",
      change: "+12%",
      icon: Brain,
      trend: "up",
    },
    {
      title: "Issues Prevented",
      value: "18",
      change: "+6",
      icon: Shield,
      trend: "up",
    },
    {
      title: "Avg Prediction Accuracy",
      value: "92.3%",
      change: "+2.1%",
      icon: Target,
      trend: "up",
    },
    {
      title: "Time Saved",
      value: "34hrs",
      change: "+8hrs",
      icon: Clock,
      trend: "up",
    },
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "optimization":
        return <Lightbulb className="h-5 w-5 text-blue-500" />;
      case "success":
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case "prediction":
        return <Sparkles className="h-5 w-5 text-purple-500" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300";
      case "medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300";
      case "low":
        return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 dark:text-red-400";
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400";
      case "Low":
        return "text-green-600 dark:text-green-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-gray-950">

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <Nav />
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
              <p className="text-muted-foreground">Intelligent monitoring recommendations powered by machine learning</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="font-medium text-green-600">
                      {metric.change}
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Insights */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  Active Insights
                </CardTitle>
                <CardDescription>AI-powered analysis of your monitoring data</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-950"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {getInsightIcon(insight.type)}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-base">{insight.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getSeverityColor(insight.severity)}`}>
                            {insight.severity.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground whitespace-nowrap">
                        {insight.timestamp}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {insight.affectedServices.map((service, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-lg border border-blue-100 dark:border-blue-900">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Recommendation</p>
                          <p className="text-sm text-blue-700 dark:text-blue-300">{insight.recommendation}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Impact: <span className="font-medium">{insight.impact}</span></span>
                        <span>Confidence: <span className="font-medium">{insight.confidence}%</span></span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Take Action
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Optimization Recommendations
            </CardTitle>
            <CardDescription>Actionable suggestions to improve your monitoring setup</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon;
                return (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-950"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-sm">{rec.title}</h3>
                          <span className={`text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                            {rec.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                            {rec.estimatedImpact}
                          </span>
                          <Button variant="outline" size="sm" className="h-7 text-xs">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
