import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Event successfully created!", {
      description: "It has been added to your calendar."
    });
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 shrink-0">
            <div>
              <h1 className="text-3xl font-display font-black text-foreground tracking-tight uppercase">
                Corporate Calendar
              </h1>
              <p className="font-body text-muted-foreground mt-1">
                Schedules, meetings, and major milestones.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Dialog>
                 <DialogTrigger asChild>
                    <Button
                      variant="solid"
                      className="font-bold border-2 border-black shadow-brutal flex"
                    >
                      <Plus className="w-4 h-4 mr-2" /> New Event
                    </Button>
                 </DialogTrigger>
                 <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create New Event</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleCreateEvent} className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="event-name">Event Name</Label>
                        <Input id="event-name" required placeholder="e.g. Strategy Meeting" className="border-2 border-black" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                           <Label htmlFor="date">Date</Label>
                           <Input id="date" type="date" required className="border-2 border-black" />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="time">Time</Label>
                           <Input id="time" type="time" required className="border-2 border-black" />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                           <Button type="button" variant="outline" className="border-2 border-black">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                           <Button type="submit" variant="solid" className="border-2 border-black shadow-brutal-sm">Save Event</Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                 </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-1 overflow-y-auto">
            {/* Left sidebar: Mini Calendar & Event list */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-card border-4 border-black rounded-3xl p-4 shadow-brutal flex justify-center">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-xl border-none"
                />
              </div>

              <div className="bg-card border-4 border-black rounded-3xl p-6 shadow-brutal flex-1">
                <h3 className="font-display font-black uppercase text-lg border-b-2 border-black pb-2 mb-4">
                  Upcoming Schedule
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0 border border-black shadow-brutal-sm" />
                    <div>
                      <p className="font-bold leading-tight mb-1">
                        Tech Conf Strategy Meeting
                      </p>
                      <p className="text-xs font-mono text-muted-foreground mb-1">
                        10:00 AM - 11:30 AM
                      </p>
                      <div className="flex -space-x-2 mt-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-black shrink-0" />
                        <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-black shrink-0" />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-1.5 shrink-0 border border-black shadow-brutal-sm" />
                    <div>
                      <p className="font-bold leading-tight mb-1">
                        Vendor Payment Deadline
                      </p>
                      <p className="text-xs font-mono text-muted-foreground mb-1">
                        Due EOD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content: Weekly/Daily View Mockup */}
            <div className="lg:col-span-3 bg-card border-4 border-black rounded-3xl shadow-brutal flex flex-col overflow-hidden">
              {/* Calendar Toolbar */}
              <div className="px-6 py-4 border-b-2 border-black flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 rounded-full border-2 border-black"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <h2 className="font-display font-black text-xl uppercase tracking-tighter">
                    May 2026
                  </h2>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 rounded-full border-2 border-black"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex bg-card border-2 border-black rounded-lg overflow-hidden font-bold text-sm">
                  <button className="px-4 py-1.5 bg-black text-white">
                    Month
                  </button>
                  <button className="px-4 py-1.5 hover:bg-muted border-l-2 border-black">
                    Week
                  </button>
                  <button className="px-4 py-1.5 hover:bg-muted border-l-2 border-black">
                    Day
                  </button>
                </div>
              </div>

              {/* Calendar Grid (Simplified for UI Kit) */}
              <div className="flex-1 p-6 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
                <div className="absolute inset-0 bg-background/80" />

                <div className="relative z-10 text-center max-w-sm">
                  <div className="w-20 h-20 bg-primary/20 border-4 border-black rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6 shadow-brutal">
                    <CalendarComponent className="w-10 h-10 text-primary pointer-events-none opacity-50" />
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase mb-2">
                    Interactive Calendar
                  </h3>
                  <p className="font-body text-muted-foreground font-medium mb-6">
                    Implement standard layouts for month, week, and day views
                    based on your preferred library like big-react-calendar.
                  </p>
                  <Button
                    onClick={() => toast.info("Component library integration coming soon!")}
                    variant="outline"
                    className="border-2 border-black shadow-brutal-sm font-bold bg-white"
                  >
                    Explore Components
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
