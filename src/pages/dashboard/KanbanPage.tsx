import { DashboardLayout } from "@/layouts/DashboardLayout";
import { PageTransition } from "@/components/layout/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Plus,
  MoreVertical,
  AlignLeft,
  Paperclip,
  MessageSquare,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const kanbanData = {
  columns: [
    { title: "To Do", count: 3, id: "todo", color: "bg-muted" },
    {
      title: "In Progress",
      count: 2,
      id: "in_progress",
      color: "bg-primary/20",
      border: "border-primary",
    },
    {
      title: "Review",
      count: 1,
      id: "review",
      color: "bg-warning/20",
      border: "border-warning",
    },
    {
      title: "Done",
      count: 4,
      id: "done",
      color: "bg-success/20",
      border: "border-success",
    },
  ],
  tasks: [
    {
      id: "T-1",
      title: "Finalize Venue Contract",
      col: "todo",
      desc: "Sign the agreement for JSConf Bali 2026",
      labels: ["Admin", "Urgent"],
      assignees: ["NK"],
      comments: 2,
      attachments: 1,
    },
    {
      id: "T-2",
      title: "Order Lanyards",
      col: "todo",
      desc: "Custom lanyards with Neo-Brutalism theme",
      labels: ["Logistics"],
      assignees: ["HD"],
      comments: 0,
      attachments: 0,
    },
    {
      id: "T-3",
      title: "Send Speaker Invites",
      col: "todo",
      desc: "First batch of top tier speakers",
      labels: ["Speakers"],
      assignees: ["NK", "HD"],
      comments: 5,
      attachments: 0,
    },

    {
      id: "T-4",
      title: "Design Main Stage",
      col: "in_progress",
      desc: "3D render for the main conference stage",
      labels: ["Design"],
      assignees: ["HD"],
      comments: 12,
      attachments: 4,
    },
    {
      id: "T-5",
      title: "Launch Early Bird Tickets",
      col: "in_progress",
      desc: "Sync stripe integration and open portal",
      labels: ["Marketing", "Tech"],
      assignees: ["NK"],
      comments: 1,
      attachments: 0,
    },

    {
      id: "T-6",
      title: "Catering Menu Approved",
      col: "review",
      desc: "Taste testing results from Green Kitchen",
      labels: ["Logistics"],
      assignees: ["HD"],
      comments: 3,
      attachments: 1,
    },

    {
      id: "T-7",
      title: "Create Landing Page",
      col: "done",
      desc: "Deploy new Next.js site based on React-TS template",
      labels: ["Tech"],
      assignees: ["NK"],
      comments: 4,
      attachments: 2,
    },
    {
      id: "T-8",
      title: "Setup Database",
      col: "done",
      desc: "Configure Supabase tables for attendees",
      labels: ["Tech"],
      assignees: ["NK"],
      comments: 0,
      attachments: 0,
    },
  ],
};

export default function KanbanPage() {
  return (
    <DashboardLayout>
      <PageTransition>
        <div className="flex flex-col h-[calc(100vh-64px)] overflow-hidden p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 shrink-0">
            <div>
              <h1 className="text-3xl font-display font-black text-foreground tracking-tight uppercase">
                Event Timeline
              </h1>
              <p className="font-body text-muted-foreground mt-1">
                Manage project tasks and milestones via Kanban board.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex -space-x-3 mr-4">
                <Avatar className="w-10 h-10 border-2 border-black shadow-brutal-sm">
                  <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kusuma" />
                  <AvatarFallback>NK</AvatarFallback>
                </Avatar>
                <Avatar className="w-10 h-10 border-2 border-black shadow-brutal-sm">
                  <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Hanif" />
                  <AvatarFallback>HD</AvatarFallback>
                </Avatar>
                <div className="w-10 h-10 rounded-full border-2 border-black shadow-brutal-sm bg-muted flex items-center justify-center font-bold text-xs">
                  +3
                </div>
              </div>
              <Button
                variant="outline"
                className="font-bold border-2 border-black shadow-brutal-sm hidden md:flex"
              >
                Filters
              </Button>
              <Button
                variant="solid"
                className="font-bold border-2 border-black shadow-brutal flex"
              >
                <Plus className="w-4 h-4 mr-2" /> New Task
              </Button>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="flex-1 overflow-x-auto overflow-y-hidden">
            <div className="flex gap-6 h-full min-w-max pb-4">
              {kanbanData.columns.map((col) => {
                const columnTasks = kanbanData.tasks.filter(
                  (t) => t.col === col.id,
                );

                return (
                  <div
                    key={col.id}
                    className="w-[320px] flex flex-col h-full bg-card border-2 border-black rounded-2xl shadow-brutal overflow-hidden"
                  >
                    {/* Column Header */}
                    <div
                      className={`px-4 py-4 border-b-2 border-black flex items-center justify-between ${col.color}`}
                    >
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-black uppercase tracking-tight">
                          {col.title}
                        </h3>
                        <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {col.count}
                        </span>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Column Body / Tasks list */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      {columnTasks.map((task) => (
                        <div
                          key={task.id}
                          className="bg-white border-2 border-black rounded-xl p-4 shadow-brutal-sm cursor-grab hover:-translate-y-1 hover:shadow-brutal transition-all"
                        >
                          <div className="flex flex-wrap gap-2 mb-3">
                            {task.labels.map((l) => (
                              <Badge
                                key={l}
                                variant="outline"
                                className={`text-[10px] font-bold uppercase rounded-sm px-1.5 shadow-none border-2 border-black ${l === "Urgent" ? "bg-destructive text-white" : "bg-muted"}`}
                              >
                                {l}
                              </Badge>
                            ))}
                          </div>

                          <h4 className="font-bold leading-tight mb-2">
                            {task.title}
                          </h4>
                          <div className="flex items-start gap-2 mb-4 text-xs text-muted-foreground">
                            <AlignLeft className="w-3 h-3 mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{task.desc}</span>
                          </div>

                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex -space-x-2">
                              {task.assignees.map((a) => (
                                <Avatar
                                  key={a}
                                  className="w-6 h-6 border border-black"
                                >
                                  <AvatarImage
                                    src={`https://api.dicebear.com/7.x/notionists/svg?seed=${a}`}
                                  />
                                  <AvatarFallback className="text-[8px]">
                                    {a}
                                  </AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground">
                              {task.comments > 0 && (
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="w-3 h-3" />{" "}
                                  {task.comments}
                                </span>
                              )}
                              {task.attachments > 0 && (
                                <span className="flex items-center gap-1">
                                  <Paperclip className="w-3 h-3" />{" "}
                                  {task.attachments}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      <Button
                        variant="ghost"
                        className="w-full font-bold border-2 border-transparent hover:border-black border-dashed justify-start text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="w-4 h-4 mr-2" /> Add Task
                      </Button>
                    </div>
                  </div>
                );
              })}

              {/* Add column placeholder */}
              <div className="w-[320px] flex-shrink-0 h-16 border-2 border-dashed border-black rounded-2xl flex items-center justify-center text-muted-foreground font-bold hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
                <Plus className="w-4 h-4 mr-2" /> Add Column
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}
