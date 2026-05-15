import { Mail, Phone, MapPin, Send } from "lucide-react";
import staticData from "@/data/static-company.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/config/brand.config";

export default function ContactPage() {
  const { contact } = staticData.static_pages;

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="w-full py-20 bg-accent text-black border-b-2 border-black relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 relative inline-block text-black drop-shadow-[2px_2px_0_#fff]">
            INISIASI <span className="text-secondary">KOMUNIKASI</span>
          </h1>
          <p className="text-xl font-body font-bold text-gray-900 tracking-tight max-w-2xl mx-auto">
            Jaringan kami terbuka. Segera sinkronisasikan visi misi Anda dengan{" "}
            {BRAND.name}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Direct Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl font-display font-black uppercase tracking-tighter border-b-4 border-black pb-4 mb-4 inline-block">
                JALUR TRANSMISI
              </h2>
              <p className="font-body text-muted-foreground font-medium text-lg">
                Gunakan satu dari kanal berikut untuk segera terhubung ke
                komando pusat.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-card border-4 border-black rounded-2xl p-6 shadow-brutal flex gap-6 items-center hover:-translate-y-1 transition-transform group">
                <div className="w-16 h-16 bg-primary border-2 border-black rounded-xl shrink-0 flex items-center justify-center shadow-[4px_4px_0_0_#000] group-hover:shadow-none transition-all">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase text-lg text-muted-foreground">
                    Kawat Surel
                  </h4>
                  <span className="font-body font-bold text-xl">
                    {contact.email}
                  </span>
                </div>
              </div>

              <div className="bg-card border-4 border-black rounded-2xl p-6 shadow-brutal flex gap-6 items-center hover:-translate-y-1 transition-transform group">
                <div className="w-16 h-16 bg-secondary border-2 border-black rounded-xl shrink-0 flex items-center justify-center shadow-[4px_4px_0_0_#000] group-hover:shadow-none transition-all">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase text-lg text-muted-foreground">
                    Panggilan Darat
                  </h4>
                  <span className="font-body font-bold text-xl">
                    {contact.phone}
                  </span>
                </div>
              </div>

              <div className="bg-card border-4 border-black rounded-2xl p-6 shadow-brutal flex gap-6 items-center hover:-translate-y-1 transition-transform group">
                <div className="w-16 h-16 bg-black border-2 border-black rounded-xl shrink-0 flex items-center justify-center shadow-[4px_4px_0_0_var(--color-secondary)] group-hover:shadow-none transition-all">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-black uppercase text-lg text-muted-foreground">
                    Koordinat Fisik
                  </h4>
                  <span className="font-body font-bold text-md leading-tight">
                    {contact.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card  border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal">
            <h3 className="text-3xl font-display font-black uppercase tracking-tighter border-b-2 border-black pb-4 mb-8">
              Kirimkan Transkrip Bantuan
            </h3>

            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="font-display font-black uppercase"
                >
                  Kode Nama / Institusi
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe / PT ABC"
                  className="h-14 border-2 border-black rounded-xl font-body font-bold focus-visible:ring-[var(--color-secondary)]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-display font-black uppercase"
                  >
                    Sinyal Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-14 border-2 border-black rounded-xl font-body font-bold focus-visible:ring-[var(--color-secondary)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-display font-black uppercase"
                  >
                    Gelombang Komunikasi
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+62..."
                    className="h-14 border-2 border-black rounded-xl font-body font-bold focus-visible:ring-[var(--color-secondary)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="font-display font-black uppercase"
                >
                  Isi Transkrip
                </Label>
                <Textarea
                  id="message"
                  placeholder="Jelaskan kebutuhan operasional Anda secara eksplisit..."
                  className="min-h-[150px] border-2 border-black rounded-xl font-body font-bold focus-visible:ring-[var(--color-secondary)]"
                />
              </div>

              <Button
                type="button"
                className="w-full h-14 bg-primary text-black hover:bg-black hover:text-white border-2 border-black rounded-xl font-display font-black text-lg uppercase tracking-widest shadow-brutal-sm hover:translate-y-1 transition-all mt-4 flex items-center gap-2"
              >
                <Send className="w-5 h-5" /> EKSEKUSI PENGIRIMAN
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
