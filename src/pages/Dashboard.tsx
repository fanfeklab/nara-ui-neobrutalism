import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Ticket,
  Calendar as CalendarIcon,
  TrendingUp,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from "lucide-react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PageTransition } from "@/components/layout/PageTransition";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const revenueData = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

const ticketsData = [
  { name: "Mon", sales: 240, scan: 180 },
  { name: "Tue", sales: 139, scan: 90 },
  { name: "Wed", sales: 980, scan: 700 },
  { name: "Thu", sales: 390, scan: 300 },
  { name: "Fri", sales: 480, scan: 250 },
  { name: "Sat", sales: 380, scan: 120 },
  { name: "Sun", sales: 430, scan: 200 },
];

const recentSales = [
  {
    name: "Budi Santoso",
    email: "budi@example.com",
    amount: "+ Rp 1,500K",
    event: "Neo-Brutalism Summit",
  },
  {
    name: "Siti Rahma",
    email: "siti@example.com",
    amount: "+ Rp 850K",
    event: "AI Frontier 2026",
  },
  {
    name: "Hendro Wibowo",
    email: "hendro@example.com",
    amount: "+ Rp 2,100K",
    event: "Startup Weekend",
  },
  {
    name: "Agus Pratama",
    email: "agus.p@example.com",
    amount: "+ Rp 450K",
    event: "Web3 Conference",
  },
  {
    name: "Diana Putri",
    email: "diana@example.com",
    amount: "+ Rp 1,500K",
    event: "Neo-Brutalism Summit",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col gap-6 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-black text-foreground tracking-tight">
                Overview
              </h1>
              <p className="font-body text-muted-foreground mt-1">
                Welcome back, here's what's happening today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Download Report</Button>
              <Button variant="solid">Create Event</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-brutal bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold uppercase text-muted-foreground">
                  Total Revenue
                </CardTitle>
                <div className="w-8 h-8 rounded-lg bg-primary border-2 border-black flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-display font-black">
                  Rp 124.5M
                </div>
                <p className="flex items-center text-xs font-bold text-success mt-1">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-brutal bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold uppercase text-muted-foreground">
                  Tickets Sold
                </CardTitle>
                <div className="w-8 h-8 rounded-lg bg-secondary border-2 border-black flex items-center justify-center">
                  <Ticket className="w-4 h-4 text-secondary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-display font-black">+2,350</div>
                <p className="flex items-center text-xs font-bold text-success mt-1">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +180% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-brutal bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold uppercase text-muted-foreground">
                  Active Events
                </CardTitle>
                <div className="w-8 h-8 rounded-lg bg-info border-2 border-black flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-display font-black">12</div>
                <p className="flex items-center text-xs font-bold text-muted-foreground mt-1">
                  4 events starting soon
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-brutal bg-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold uppercase text-muted-foreground">
                  Active Users
                </CardTitle>
                <div className="w-8 h-8 rounded-lg bg-accent border-2 border-black flex items-center justify-center">
                  <Activity className="w-4 h-4 text-accent-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-display font-black">+573</div>
                <p className="flex items-center text-xs font-bold text-destructive mt-1">
                  <ArrowDownRight className="w-3 h-3 mr-1" />
                  -2.4% from last hour
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            <Card className="shadow-brutal bg-card lg:col-span-4 flex flex-col">
              <CardHeader>
                <CardTitle className="font-display font-black uppercase text-xl">
                  Revenue Growth
                </CardTitle>
                <CardDescription>
                  Monthly revenue tracking for all events
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorTotal"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--color-primary)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-primary)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="var(--color-border)"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `Rp${value}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                        borderWidth: "2px",
                        borderRadius: "0.75rem",
                        fontWeight: "bold",
                      }}
                      itemStyle={{ color: "var(--color-foreground)" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="total"
                      stroke="var(--color-border)"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorTotal)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-brutal bg-card lg:col-span-3 flex flex-col">
              <CardHeader>
                <CardTitle className="font-display font-black uppercase text-xl">
                  Ticket Sales vs Scans
                </CardTitle>
                <CardDescription>
                  Daily comparison for current week
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={ticketsData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="var(--color-border)"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="var(--color-muted-foreground)"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "var(--color-muted)" }}
                      contentStyle={{
                        backgroundColor: "var(--color-card)",
                        borderColor: "var(--color-border)",
                        borderWidth: "2px",
                        borderRadius: "0.75rem",
                        fontWeight: "bold",
                      }}
                    />
                    <Bar
                      dataKey="sales"
                      fill="var(--color-primary)"
                      radius={[4, 4, 0, 0]}
                      stroke="var(--color-border)"
                      strokeWidth={2}
                    />
                    <Bar
                      dataKey="scan"
                      fill="var(--color-secondary)"
                      radius={[4, 4, 0, 0]}
                      stroke="var(--color-border)"
                      strokeWidth={2}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Sales List */}
          <Card className="shadow-brutal bg-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-display font-black uppercase text-xl">
                  Recent Sales
                </CardTitle>
                <CardDescription>
                  The last 5 ticket purchases across all events
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentSales.map((sale, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 border-2 border-black">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/notionists/svg?seed=${sale.name}`}
                        />
                        <AvatarFallback>{sale.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm">{sale.name}</p>
                        <p className="text-xs text-muted-foreground font-body">
                          {sale.email}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <Badge
                        variant="outline"
                        className="font-mono text-xs shadow-none"
                      >
                        {sale.event}
                      </Badge>
                    </div>
                    <div className="font-bold text-success font-mono">
                      {sale.amount}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
