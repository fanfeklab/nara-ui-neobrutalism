import { useState } from "react";
import { Check } from "lucide-react";
import { ComponentPreview } from "@/components/ui/component-preview";
import { Button } from "@/components/ui/button";

function StepperDef({ currentStep }: { currentStep: number }) {
  const steps = ["Details", "Payment", "Confirm"];

  return (
    <div className="flex w-full items-center justify-between">
      {steps.map((step, index) => {
        const isCompleted = currentStep > index + 1;
        const isActive = currentStep === index + 1;

        return (
          <div
            key={step}
            className="flex flex-col items-center relative flex-1"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-black font-bold shadow-brutal-sm transition-colors z-10 ${
                isCompleted
                  ? "bg-success text-black"
                  : isActive
                    ? "bg-primary text-black"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {isCompleted ? (
                <Check className="h-5 w-5" strokeWidth={3} />
              ) : (
                index + 1
              )}
            </div>

            <span
              className={`mt-2 flex text-sm font-bold uppercase tracking-tight ${
                isActive || isCompleted
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {step}
            </span>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-5 left-1/2 -z-10 h-1 w-full -translate-y-1/2 ${
                  isCompleted
                    ? "bg-black"
                    : "bg-muted border-y-2 border-transparent"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function StepperDemo() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-lg space-y-8">
      <StepperDef currentStep={step} />
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setStep((s) => Math.min(4, s + 1))}
          disabled={step === 4}
        >
          {step === 3 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default function StepperDoc() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Stepper
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A visual indicator of progress through a series of steps in a process.
        </p>
      </div>

      <ComponentPreview
        title="Interactive Stepper"
        description="A controlled stepper showing connection lines and states."
        code={`// Custom Stepper implementation using basic Tailwind and Lucide icons.`}
      >
        <StepperDemo />
      </ComponentPreview>
    </div>
  );
}
