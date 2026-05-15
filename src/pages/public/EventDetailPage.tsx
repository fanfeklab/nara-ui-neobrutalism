import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  Ticket,
  ArrowLeft,
  ArrowRight,
  Share2,
  Tag,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import eventsData from "@/data/events.json";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EventDetailPage() {
  const { slug } = useParams();

  // Find event in upcoming or past
  let eventItem: any = eventsData.events.upcoming.find((e) => e.slug === slug);
  let isUpcoming = true;

  if (!eventItem) {
    eventItem = eventsData.events.past.find((e) => e.slug === slug) as any;
    isUpcoming = false;
  }

  if (!eventItem) {
    return (
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-8 text-center text-foreground">
        <h1 className="text-4xl font-display font-black uppercase mb-4">
          404: Event Tidak Ditemukan
        </h1>
        <Button
          asChild
          variant="outline"
          className="border-2 border-black rounded-xl"
        >
          <Link to="/events">Kembali ke Daftar Acara</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="w-full bg-card border-b-2 border-black relative overflow-hidden">
        <div className="w-full h-[40vh] md:h-[50vh] xl:h-[60vh] relative bg-muted z-0">
          <img
            src={eventItem.thumbnail}
            alt={eventItem.title}
            className={cn(
              "w-full h-full object-cover",
              !isUpcoming && "grayscale",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full z-10 p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col items-start gap-4 text-white">
              <div className="bg-primary text-black font-body font-bold text-xs md:text-sm uppercase px-3 py-1 border-2 border-black rounded-lg shadow-brutal-sm">
                {eventItem.category}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter drop-shadow-[2px_2px_0_#000]">
                {eventItem.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <Link
              to="/events"
              className="font-body font-bold text-sm uppercase"
            >
              Kembali ke Daftar Acara
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
            {/* Left Column: Content */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* Quick Info Bar on Mobile */}
              <div className="flex flex-col lg:hidden gap-4 p-6 border-4 border-black rounded-2xl bg-card shadow-brutal mb-8">
                <EventMetas item={eventItem} isUpcoming={isUpcoming} />
              </div>

              {/* Markdown Content */}
              <article className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-primary prose-a:font-bold">
                {/* Render raw HTML from JSON */}
                <div
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: eventItem.body_html }}
                />
              </article>

              {/* Tags */}
              {eventItem.tags && eventItem.tags.length > 0 && (
                <div className="pt-8 border-t-2 border-dashed border-black">
                  <h4 className="font-body font-bold uppercase mb-4 text-sm text-foreground flex items-center gap-2">
                    <Tag className="w-4 h-4" /> Tag Terkait
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {eventItem.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-muted border-2 border-black rounded-full text-xs font-bold font-body text-foreground uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar Config */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="hidden lg:flex flex-col gap-6 p-8 border-4 border-black rounded-2xl bg-card  shadow-brutal">
                <EventMetas item={eventItem} isUpcoming={isUpcoming} />
              </div>

              {/* Ticketing Call To Action Panel */}
              <div className="mt-8 p-8 border-4 border-black rounded-2xl bg-primary text-black shadow-brutal flex flex-col">
                <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-6 border-b-4 border-black pb-4">
                  {isUpcoming ? "RESERVASI TIKET" : "STATUS ACARA"}
                </h3>

                {!isUpcoming ? (
                  <div className="bg-black text-white p-6 rounded-xl border-2 border-black text-center flex flex-col items-center">
                    <AlertTriangle className="w-12 h-12 mb-4 text-accent" />
                    <span className="font-display font-black text-2xl uppercase">
                      OPERASI SELESAI
                    </span>
                    <p className="font-body font-medium mt-2 text-sm text-gray-400">
                      Acara ini telah berhasil dilaksanakan dan masuk ke dalam
                      arsip portofolio kami.
                    </p>
                  </div>
                ) : (
                  <TicketingPanel
                    eventId={eventItem.id}
                    ticketing={(eventItem as any).ticketing}
                    price={String(eventItem.price)}
                  />
                )}
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className="rounded-xl border-2 border-black border-dashed flex items-center gap-2 hover:bg-black hover:text-white transition-colors bg-transparent text-foreground"
                >
                  <Share2 className="w-4 h-4" /> BAGIKAN INFO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EventMetas({ item, isUpcoming }: { item: any; isUpcoming: boolean }) {
  return (
    <>
      <h3 className="font-display font-black text-xl uppercase border-b-2 border-black pb-2 text-foreground">
        Detail Operasi
      </h3>
      <div className="flex flex-col gap-4 font-body font-bold text-sm text-foreground">
        <div className="flex items-start gap-4">
          <Calendar className="w-6 h-6 text-primary shrink-0" />
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">
              JADWAL PELAKSANAAN
            </span>
            <span>{item.date_readable}</span>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-accent shrink-0" />
          <div className="flex flex-col">
            <span className="text-muted-foreground text-xs">
              KOORDINAT LOKASI
            </span>
            <span className="leading-tight">{item.location}</span>
          </div>
        </div>
        {isUpcoming ? (
          <>
            {item.capacity && (
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-xs">
                    KAPASITAS MAKSIMUM
                  </span>
                  <span>{item.capacity.toLocaleString()} Pax</span>
                </div>
              </div>
            )}
            <div className="flex items-start gap-4">
              <Ticket className="w-6 h-6 text-green-600 shrink-0" />
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs">
                  INFO TIKET
                </span>
                <span>Mulai dari {item.price}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-black shrink-0" />
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs">
                TOTAL KEHADIRAN
              </span>
              <span className="text-xl font-black">
                {item.attendance?.toLocaleString()} Pax
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function TicketingPanel({
  eventId,
  ticketing,
  price,
}: {
  eventId: string;
  ticketing: any;
  price: string;
}) {
  if (!ticketing || !ticketing.available) {
    return (
      <div className="bg-red-500 text-white p-6 rounded-xl border-2 border-black text-center">
        <span className="font-display font-black text-2xl uppercase tracking-tighter">
          SOLD OUT
        </span>
        <p className="font-body font-medium mt-2 text-sm opacity-90">
          Kapasitas telah mencapai batas aman. Tidak ada tiket tambahan.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {ticketing.ticket_types.map((opt: any) => {
        const isSoldOut = opt.sold >= opt.quota;
        const sisa = opt.quota - opt.sold;
        const lowStock = sisa > 0 && sisa < 100;

        return (
          <div
            key={opt.id}
            className={cn(
              "p-4 rounded-xl border-4 border-black relative transition-all bg-card text-card-foreground",
              isSoldOut
                ? "opacity-60 bg-gray-200 cursor-not-allowed"
                : "hover:-translate-y-1 hover:shadow-brutal-sm cursor-pointer",
            )}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-display font-black text-xl uppercase">
                {opt.name}
              </h4>
              <span className="font-body font-bold text-lg">
                Rp{opt.price.toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex items-center gap-2 font-body text-xs font-bold uppercase mt-4">
              {isSoldOut ? (
                <span className="bg-red-600 text-white px-2 py-1 rounded">
                  HABIS TERJUAL
                </span>
              ) : lowStock ? (
                <span className="bg-orange-500 text-white px-2 py-1 rounded flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> SISA {sisa} TIKET LAGI!
                </span>
              ) : (
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  TERSEDIA
                </span>
              )}

              {opt.type === "member_only" && (
                <span className="bg-blue-600 text-white px-2 py-1 rounded">
                  MEMBER ONLY
                </span>
              )}
            </div>

            {!isSoldOut && (
              <div className="mt-4 border-t-2 border-black pt-4">
                {/* Use Dialog Modal to simulate email check or immediately link to checkout */}
                <CheckoutFlowModal
                  eventId={eventId}
                  ticketId={opt.id}
                  ticketName={opt.name}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CheckoutFlowModal({
  eventId,
  ticketId,
  ticketName,
}: {
  eventId: string;
  ticketId: string;
  ticketName: string;
}) {
  const [email, setEmail] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-black text-white hover:bg-secondary hover:text-white rounded-lg font-bold uppercase transition-colors">
          Pilih Tiket <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-4 border-black rounded-2xl shadow-brutal p-8 bg-card">
        <DialogHeader>
          <DialogTitle className="font-display font-black text-2xl uppercase tracking-tighter border-b-4 border-primary inline-block pb-2">
            Verifikasi Identitas
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 mt-4">
          <p className="font-body font-medium text-muted-foreground text-sm">
            Anda akan memesan tiket <strong>{ticketName}</strong>. Masukkan
            alamat email untuk melanjutkan ke area pemrosesan pembayaran.
          </p>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="font-display font-extrabold uppercase"
            >
              Alamat Surel / Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="operator@system.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 border-2 border-black rounded-xl bg-card text-card-foreground font-body font-bold focus-visible:ring-primary"
            />
          </div>
          <Button
            asChild
            onClick={(e) => {
              if (!email) e.preventDefault();
            }}
            className={cn(
              "w-full h-14 rounded-xl font-bold uppercase border-2",
              email
                ? "bg-primary text-black border-black shadow-brutal-sm hover:translate-y-1 hover:shadow-none"
                : "bg-muted text-muted-foreground border-transparent pointer-events-none",
            )}
          >
            <Link
              to={`/checkout/${eventId}?ticket=${ticketId}&email=${encodeURIComponent(email)}`}
            >
              Proses <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
