import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for testing the platform with small events.",
    features: [
      "Up to 100 attendees",
      "Basic email support",
      "Standard event page",
      "1 admin account",
    ],
    highlight: false,
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "Rp 500K",
    period: "/mo",
    description: "Ideal for growing communities and regular organizers.",
    features: [
      "Unlimited attendees",
      "Priority 24/7 support",
      "Custom branding",
      "Analytics dashboard",
      "5 admin accounts",
    ],
    highlight: true,
    buttonText: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Advanced controls and integrations for large-scale operations.",
    features: [
      "White-label solution",
      "Dedicated account manager",
      "API access",
      "SSO integration",
      "Unlimited accounts",
      "On-site support available",
    ],
    highlight: false,
    buttonText: "Contact Us",
  },
];

export default function PricingPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground pb-20">
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
            TRANSPARENT <span className="text-secondary">PRICING</span>
          </h1>
          <p className="text-xl font-body font-bold text-gray-800 tracking-tight max-w-2xl mx-auto">
            Simple, honest pricing that scales with your events. No hidden fees,
            ever.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-16 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-card border-4 border-black rounded-3xl p-8 shadow-brutal flex flex-col h-full transform transition-transform hover:-translate-y-2 ${tier.highlight ? "md:-mt-8 shadow-brutal-lg ring-4 ring-primary" : ""}`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full border-2 border-black">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-2">
                  {tier.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm font-medium mb-6 min-h-[40px]">
                  {tier.description}
                </p>

                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-display font-black tracking-tighter">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground font-body font-bold mb-2">
                      {tier.period}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 font-body font-bold text-sm mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-success border-2 border-black flex items-center justify-center shrink-0 mt-0.5 shadow-brutal-sm">
                          <Check
                            className="w-3 h-3 text-black"
                            strokeWidth={4}
                          />
                        </span>
                        <span className="opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={tier.highlight ? "solid" : "outline"}
                  size="lg"
                  className={`w-full text-lg mt-auto rounded-xl ${tier.highlight ? "" : "bg-card hover:bg-primary"}`}
                >
                  {tier.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary text-secondary-foreground border-4 border-black rounded-3xl p-8 md:p-12 shadow-brutal flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-display font-black uppercase tracking-tighter mb-2">
                Need a Custom Solution?
              </h3>
              <p className="font-body font-bold opacity-90 max-w-xl">
                We build specialized event platforms for large-scale operations
                with specific security and compliance requirements.
              </p>
            </div>
            <Button
              variant="solid"
              size="lg"
              className="bg-white text-black hover:bg-gray-100 border-2 border-black shadow-brutal whitespace-nowrap rounded-xl text-lg px-8"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
