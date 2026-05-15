import React, { useState } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Plus, Search, Filter, MoreHorizontal, FileText, Send, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const initialInvoices = [
  {
    id: "INV-2026-001",
    client: "TechCorp Indonesia",
    date: "12 May 2026",
    amount: "Rp 45.000.000",
    status: "Paid",
  },
  {
    id: "INV-2026-002",
    client: "Maju Jaya Group",
    date: "15 May 2026",
    amount: "Rp 12.500.000",
    status: "Pending",
  },
  {
    id: "INV-2026-003",
    client: "Startup Digital",
    date: "18 May 2026",
    amount: "Rp 8.000.000",
    status: "Overdue",
  },
  {
    id: "INV-2026-004",
    client: "Bank Central",
    date: "20 May 2026",
    amount: "Rp 120.000.000",
    status: "Paid",
  },
  {
    id: "INV-2026-005",
    client: "Universitas Negeri",
    date: "22 May 2026",
    amount: "Rp 35.000.000",
    status: "Draft",
  },
  {
    id: "INV-2026-006",
    client: "Kemenpora RI",
    date: "24 May 2026",
    amount: "Rp 250.000.000",
    status: "Paid",
  },
];

export default function InvoicePage() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !amount) {
      toast.error("Please fill all fields");
      return;
    }
    
    setInvoices([
      {
        id: `INV-2026-0${invoices.length + 1}`,
        client: clientName,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        amount: `Rp ${Number(amount).toLocaleString('id-ID')}`,
        status: "Draft"
      },
      ...invoices
    ]);

    toast.success("Invoice created successfully!");
    setIsNewInvoiceOpen(false);
    setClientName("");
    setAmount("");
  };

  const handleDelete = (id: string) => {
    setInvoices(invoices.filter(inv => inv.id !== id));
    toast.success(`Invoice ${id} deleted.`);
  };

  const handleExport = () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: 'Exporting invoices...',
      success: 'Invoices exported successfully!',
      error: 'Failed to export invoices.',
    });
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col gap-6 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-display font-black text-foreground tracking-tight uppercase">
                Invoices
              </h1>
              <p className="font-body text-muted-foreground mt-1">
                Manage all your event and corporate billing records.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleExport}
                variant="outline"
                className="font-bold border-2 border-black shadow-brutal-sm hidden md:flex"
              >
                <Download className="w-4 h-4 mr-2" /> Export
              </Button>
              <Dialog open={isNewInvoiceOpen} onOpenChange={setIsNewInvoiceOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="solid"
                    className="font-bold border-2 border-black shadow-brutal flex"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Create Invoice
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create Invoice</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCreateInvoice} className="space-y-4 py-4">
                    <div className="space-y-2">
                       <Label htmlFor="client">Client Name</Label>
                       <Input 
                          id="client" 
                          value={clientName} 
                          onChange={e => setClientName(e.target.value)} 
                          placeholder="e.g. TechCorp" 
                          className="border-2 border-black" 
                          required 
                        />
                    </div>
                    <div className="space-y-2">
                       <Label htmlFor="amount">Amount (Rp)</Label>
                       <Input 
                          id="amount" 
                          type="number" 
                          value={amount} 
                          onChange={e => setAmount(e.target.value)} 
                          placeholder="5000000" 
                          className="border-2 border-black" 
                          required 
                        />
                    </div>
                    <DialogFooter>
                       <DialogClose asChild>
                          <Button type="button" variant="outline" className="border-2 border-black">Cancel</Button>
                       </DialogClose>
                       <Button type="submit" variant="solid" className="border-2 border-black shadow-brutal-sm">Save as Draft</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="bg-card border-2 border-black rounded-2xl p-4 shadow-brutal-sm flex flex-col md:flex-row gap-4 justify-between items-center z-10">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search invoice..."
                className="pl-10 h-10 border-2 border-black rounded-xl font-body"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="w-full md:w-auto border-2 border-black shadow-brutal-sm bg-white"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="bg-card border-2 border-black rounded-2xl shadow-brutal overflow-hidden">
            <Table>
              <TableHeader className="bg-muted border-b-2 border-black">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-display font-black text-black uppercase w-[150px]">
                    Invoice ID
                  </TableHead>
                  <TableHead className="font-display font-black text-black uppercase">
                    Client
                  </TableHead>
                  <TableHead className="font-display font-black text-black uppercase">
                    Date
                  </TableHead>
                  <TableHead className="font-display font-black text-black uppercase">
                    Amount
                  </TableHead>
                  <TableHead className="font-display font-black text-black uppercase">
                    Status
                  </TableHead>
                  <TableHead className="text-right font-display font-black text-black uppercase">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow
                    key={inv.id}
                    className="border-b-2 border-black hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-mono font-bold">
                      {inv.id}
                    </TableCell>
                    <TableCell className="font-bold">{inv.client}</TableCell>
                    <TableCell className="font-body text-muted-foreground">
                      {inv.date}
                    </TableCell>
                    <TableCell className="font-mono font-bold text-success">
                      {inv.amount}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`font-bold uppercase shadow-none border-2 border-black ${
                          inv.status === "Paid"
                            ? "bg-success text-white"
                            : inv.status === "Pending"
                              ? "bg-warning text-black"
                              : inv.status === "Overdue"
                                ? "bg-destructive text-white"
                                : "bg-gray-200 text-black"
                        }`}
                      >
                        {inv.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                       <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                             <Button variant="ghost" className="h-8 w-8 p-0">
                               <span className="sr-only">Open menu</span>
                               <MoreHorizontal className="h-4 w-4" />
                             </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="border-2 border-black">
                             <DropdownMenuLabel>Actions</DropdownMenuLabel>
                             <DropdownMenuSeparator className="bg-black border-black h-0.5" />
                             <DropdownMenuItem onClick={() => toast.info(`Viewing ${inv.id}`)} className="font-bold cursor-pointer"><FileText className="w-4 h-4 mr-2" /> View Details</DropdownMenuItem>
                             <DropdownMenuItem onClick={() => toast.success(`Reminder sent for ${inv.id}`)} className="font-bold cursor-pointer"><Send className="w-4 h-4 mr-2" /> Send Reminder</DropdownMenuItem>
                             <DropdownMenuSeparator className="bg-black border-black h-0.5" />
                             <DropdownMenuItem onClick={() => handleDelete(inv.id)} className="font-bold cursor-pointer text-destructive focus:bg-destructive focus:text-white"><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                       </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
