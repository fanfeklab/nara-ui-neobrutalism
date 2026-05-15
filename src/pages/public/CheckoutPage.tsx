import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CheckCircle2, Ticket, ShieldCheck, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import eventsData from "@/data/events.json";
import { BRAND } from "@/config/brand.config";

export default function CheckoutPage() {
  const { event_id } = useParams();
  const [searchParams] = useSearchParams();
  const ticketId = searchParams.get("ticket");
  const emailParam = searchParams.get("email") || "";
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Lookup data
  const eventItem = eventsData.events.upcoming.find(e => e.id === event_id);
  const ticketOption = (eventItem as any)?.ticketing?.ticket_types?.find((o: any) => o.id === ticketId);
  const hasSeatAssignment = (eventItem as any)?.ticketing?.has_seat_assignment === true;

  const [formData, setFormData] = useState({
    name: "",
    nik: "",
    phone: "",
    email: emailParam,
    paymentMethod: "qris",
    seat: ""
  });

  if (!eventItem || !ticketOption) {
    return (
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-8 text-center bg-background text-foreground">
        <h1 className="text-4xl font-display font-black uppercase mb-4">Sesi Checkout Tidak Valid</h1>
        <p className="font-body text-muted-foreground mb-8">Reservasi tidak ditemukan atau waktu telah habis.</p>
        <Button asChild variant="outline" className="border-2 border-black rounded-xl font-bold">
           <Link to="/events">Kembali ke Daftar Acara</Link>
        </Button>
      </div>
    );
  }

  const handleProcess = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center p-8 text-center bg-background  text-foreground">
         <div className="bg-card border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal flex flex-col items-center max-w-lg w-full">
            <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
            <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-4 text-secondary">
               TRANSAKSI BERHASIL
            </h1>
            <p className="font-body text-muted-foreground font-medium mb-8">
               E-Ticket telah dikirimkan ke <strong>{formData.email}</strong>. Tunjukkan kode QR pada petugas saat memasuki area perimeter acara.
            </p>
            <div className="w-full p-6 bg-muted border-2 border-dashed border-black rounded-xl flex flex-col gap-2 mb-8 text-left font-body text-sm font-bold">
               <div className="flex justify-between"><span className="text-muted-foreground uppercase">Order ID:</span> <span>NARA-{Math.floor(Math.random()*1000000)}</span></div>
               <div className="flex justify-between"><span className="text-muted-foreground uppercase">Tiket:</span> <span>{ticketOption.name}</span></div>
               <div className="flex justify-between"><span className="text-muted-foreground uppercase">Acara:</span> <span>{eventItem.title}</span></div>
               {hasSeatAssignment && (
                 <div className="flex justify-between"><span className="text-muted-foreground uppercase">Kursi:</span> <span className="text-primary">{formData.seat}</span></div>
               )}
            </div>
            <Button asChild variant="solid" className="w-full h-14 rounded-xl font-bold uppercase text-lg border-2 border-black bg-primary text-black hover:bg-black hover:text-white shadow-brutal-sm transition-all">
               <Link to="/">KEMBALI KE BERANDA</Link>
            </Button>
         </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-background py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-2 mb-8 text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <Link to={`/events/${eventItem.slug}`} className="font-body font-bold text-sm uppercase">Kembali ke Detail Acara</Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
          <Ticket className="w-10 h-10 text-primary shrink-0 p-2 bg-black rounded-lg border-2 border-black shadow-brutal-sm" /> 
          CHECKOUT TIKET
        </h1>

        <form onSubmit={handleProcess} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
          
          {/* Main Form Area */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Informer Box */}
            {ticketOption.type === "member_only" && (
              <div className="p-4 bg-blue-100 border-2 border-blue-600 rounded-xl flex items-start gap-4">
                 <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                 <div>
                   <h4 className="font-display font-black text-blue-900 uppercase">TIKET MEMBER EKSKLUSIF</h4>
                   <p className="font-body text-sm text-blue-800 font-medium">Sistem akan melakukan verifikasi NIK Anda secara otomatis dengan database Member {BRAND.name}. Pastikan NIK yang Anda masukkan sesuai dengan identitas member Anda.</p>
                 </div>
              </div>
            )}

            {/* Step 1: Personal Info */}
            <div className="bg-card border-4 border-black rounded-2xl p-6 md:p-8 shadow-brutal">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-6 border-b-2 border-black pb-2">Informasi Pemesan</h3>
              <div className="grid grid-cols-1 gap-6">
                 <div className="space-y-2">
                   <Label htmlFor="name" className="font-display font-bold uppercase text-sm">Nama Lengkap (Sesuai KTP)</Label>
                   <Input 
                     id="name" required 
                     value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                     className="h-12 border-2 border-black rounded-xl bg-card text-card-foreground font-body font-bold font-lg focus-visible:ring-[var(--color-secondary)]" 
                   />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-display font-bold uppercase text-sm">Alamat Email</Label>
                      <Input 
                        id="email" type="email" readOnly disabled
                        value={formData.email}
                        className="h-12 border-2 border-black rounded-xl bg-gray-100 text-gray-500 font-body font-bold font-lg" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-display font-bold uppercase text-sm">Nomor WhatsApp</Label>
                      <Input 
                        id="phone" type="tel" required
                        value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="h-12 border-2 border-black rounded-xl bg-card text-card-foreground font-body font-bold font-lg focus-visible:ring-[var(--color-secondary)]" 
                      />
                    </div>
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="nik" className="font-display font-bold uppercase text-sm">Nomor Induk Kependudukan (NIK)</Label>
                   <Input 
                     id="nik" required minLength={16} maxLength={16}
                     value={formData.nik} onChange={e => setFormData({...formData, nik: e.target.value})}
                     className="h-12 border-2 border-black rounded-xl bg-card text-card-foreground font-body font-bold font-lg focus-visible:ring-[var(--color-secondary)]" 
                     placeholder="16 Digit NIK"
                   />
                 </div>
              </div>
            </div>

            {/* Step 2: Seat Assignment Widget (if active) */}
            {hasSeatAssignment && (
              <div className="bg-card border-4 border-black rounded-2xl p-6 md:p-8 shadow-brutal">
                <div className="flex items-center justify-between mb-6 border-b-2 border-black pb-2">
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight">ALOKASI KURSI</h3>
                  {formData.seat && <span className="bg-primary text-black font-body font-bold px-3 py-1 border-2 border-black rounded-lg">{formData.seat}</span>}
                </div>
                
                <p className="font-body text-sm font-medium text-muted-foreground mb-6">Pilih lokasi kursi yang tersedia.</p>
                {/* Mockup Seat Selector Widget */}
                <div className="w-full bg-muted border-2 border-black rounded-xl p-4 overflow-x-auto hide-scrollbars">
                  <div className="min-w-[400px] flex flex-col gap-4">
                     <div className="w-full h-8 bg-black text-white text-xs font-display font-black flex items-center justify-center rounded uppercase tracking-widest mb-4">PANGGUNG UTAMA</div>
                     
                     {['A', 'B', 'C'].map(row => (
                       <div key={row} className="flex justify-center gap-2">
                         <div className="w-8 flex items-center font-display font-black">{row}</div>
                         {[1, 2, 3, 4, 5, 6, 7, 8].map(col => {
                           const seatId = `${row}${col}`;
                           // Randomize some sold seats
                           const isSold = (row === 'A' && col % 2 === 0) || (row === 'B' && col === 5);
                           const isSelected = formData.seat === seatId;
                           return (
                             <button
                               key={seatId} type="button"
                               disabled={isSold}
                               onClick={() => setFormData({...formData, seat: seatId})}
                               className={cn(
                                 "w-10 h-10 border-2 border-black rounded-t-lg rounded-b flex items-center justify-center font-body text-xs font-bold transition-all",
                                 isSold ? "bg-gray-300 text-gray-400 cursor-not-allowed opacity-50" 
                                 : isSelected ? "bg-primary text-black shadow-brutal-sm -translate-y-1" 
                                 : "bg-card text-card-foreground hover:bg-black hover:text-white"
                               )}
                             >
                               {col}
                             </button>
                           )
                         })}
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method */}
            <div className="bg-card border-4 border-black rounded-2xl p-6 md:p-8 shadow-brutal">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight mb-6 border-b-2 border-black pb-2">METODE PEMBAYARAN</h3>
              <RadioGroup value={formData.paymentMethod} onValueChange={(val) => setFormData({...formData, paymentMethod: val})} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 
                 <div className={cn("p-4 border-2 border-black rounded-xl flex items-start gap-3 cursor-pointer transition-colors relative", formData.paymentMethod === 'qris' ? "bg-primary text-black" : "bg-card text-card-foreground hover:bg-muted")} onClick={() => setFormData({...formData, paymentMethod: 'qris'})}>
                    <RadioGroupItem value="qris" id="qris" className="mt-1" />
                    <div className="flex flex-col">
                      <Label htmlFor="qris" className="font-display font-black uppercase text-base cursor-pointer">QRIS</Label>
                      <p className="font-body text-xs font-bold text-gray-600 mt-1">Scan otomatis dengan e-wallet/m-banking (Bebas Biaya Admin)</p>
                    </div>
                 </div>

                 <div className={cn("p-4 border-2 border-black rounded-xl flex items-start gap-3 cursor-pointer transition-colors relative", formData.paymentMethod === 'va' ? "bg-primary text-black" : "bg-card text-card-foreground hover:bg-muted")} onClick={() => setFormData({...formData, paymentMethod: 'va'})}>
                    <RadioGroupItem value="va" id="va" className="mt-1" />
                    <div className="flex flex-col">
                      <Label htmlFor="va" className="font-display font-black uppercase text-base cursor-pointer">Virtual Account</Label>
                      <p className="font-body text-xs font-bold text-gray-600 mt-1">Transfer via bank BCA, Mandiri, BNI, BRI.</p>
                    </div>
                 </div>

                 <div className={cn("p-4 border-2 border-black rounded-xl flex items-start gap-3 cursor-pointer transition-colors relative", formData.paymentMethod === 'cc' ? "bg-primary text-black" : "bg-card text-card-foreground hover:bg-muted")} onClick={() => setFormData({...formData, paymentMethod: 'cc'})}>
                    <RadioGroupItem value="cc" id="cc" className="mt-1" />
                    <div className="flex flex-col">
                      <Label htmlFor="cc" className="font-display font-black uppercase text-base cursor-pointer">Credit Card</Label>
                      <p className="font-body text-xs font-bold text-gray-600 mt-1">Visa/Mastercard dengan biaya tambahan Rp 5.000</p>
                    </div>
                 </div>

              </RadioGroup>
            </div>

          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
             <div className="bg-card text-card-foreground text-white border-4 border-black rounded-2xl p-6 md:p-8 shadow-brutal flex flex-col gap-6">
               <h3 className="font-display font-black text-2xl uppercase tracking-tight border-b-2 border-gray-600 pb-4">RINGKASAN PESANAN</h3>
               
               <div className="flex gap-4 items-center">
                 <div className="w-20 h-20 bg-muted border-2 border-black rounded-xl overflow-hidden shrink-0">
                   <img src={eventItem.thumbnail} className="w-full h-full object-cover grayscale" alt="Thumbnail" />
                 </div>
                 <div className="flex flex-col">
                   <span className="font-body font-bold text-xs text-primary uppercase mb-1">{eventItem.category}</span>
                   <h4 className="font-display font-black uppercase leading-tight line-clamp-2">{eventItem.title}</h4>
                 </div>
               </div>

               <div className="flex flex-col gap-3 font-body text-sm font-medium border-y-2 border-gray-600 py-6">
                 <div className="flex justify-between">
                   <span className="text-gray-400 uppercase">Jenis Tiket</span>
                   <span className="font-bold">{ticketOption.name}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-400 uppercase">Harga</span>
                   <span className="font-bold">Rp{(ticketOption.price).toLocaleString('id-ID')}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-400 uppercase">Pajak (11%)</span>
                   <span className="font-bold">Rp{(ticketOption.price * 0.11).toLocaleString('id-ID')}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-400 uppercase">Biaya Platform</span>
                   <span className="font-bold">Rp{(5000).toLocaleString('id-ID')}</span>
                 </div>
                 {formData.paymentMethod === 'cc' && (
                 <div className="flex justify-between">
                   <span className="text-gray-400 uppercase">Credit Card Fee</span>
                   <span className="font-bold text-accent">Rp{(5000).toLocaleString('id-ID')}</span>
                 </div>
                 )}
               </div>

               <div className="flex justify-between items-end">
                 <span className="font-display font-black text-lg uppercase text-gray-400">TOTAL BAYAR</span>
                 <span className="font-display font-black text-3xl text-primary">
                   Rp{((ticketOption.price * 1.11) + 5000 + (formData.paymentMethod === 'cc' ? 5000 : 0)).toLocaleString('id-ID')}
                 </span>
               </div>

               <Button 
                type="submit" 
                disabled={isProcessing || (hasSeatAssignment && !formData.seat)}
                className="w-full bg-primary text-black hover:bg-card border-2 border-black rounded-xl h-14 font-display font-black text-xl uppercase tracking-tight shadow-brutal-sm mt-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {isProcessing ? (
                   <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> MEMPROSES...</span>
                 ) : (
                   "BAYAR SEKARANG"
                 )}
               </Button>
               {hasSeatAssignment && !formData.seat && (
                 <p className="font-body text-xs text-red-400 font-bold text-center mt-2">*Wajib memilih kursi terlebih dahulu.</p>
               )}
             </div>
          </div>

        </form>

      </div>
    </div>
  )
}
