import { AlignLeft } from "lucide-react";
import staticData from "@/data/static-company.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  const { faq } = staticData.static_pages;

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="w-full py-20 bg-primary text-black border-b-2 border-black relative overflow-hidden">
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
            PUSAT <span className="text-secondary">INFORMASI</span>
          </h1>
          <p className="text-xl font-body font-bold text-gray-800 tracking-tight">
            Jawaban transparan untuk pertanyaan krusial Anda.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal">
            <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-4">
              <AlignLeft className="w-8 h-8 text-foreground" />
              <h2 className="text-3xl font-display font-black uppercase tracking-tighter">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4"
            >
              {faq.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-4 border-black rounded-2xl bg-card  px-6 shadow-brutal-sm"
                >
                  <AccordionTrigger className="font-display font-black text-lg md:text-xl uppercase tracking-tight text-left hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-base font-medium text-muted-foreground pb-6 border-t-2 border-dashed border-gray-300 dark:border-gray-700 pt-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
