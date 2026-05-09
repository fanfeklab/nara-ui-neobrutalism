import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function InputOtpDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Input OTP
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Accessible one-time password component with copy paste functionality.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard 6-digit OTP input."
        code={`import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"\n\nexport function InputOtpDemo() {\n  return (\n    <InputOTP maxLength={6}>\n      <InputOTPGroup>\n        <InputOTPSlot index={0} />\n        <InputOTPSlot index={1} />\n        <InputOTPSlot index={2} />\n      </InputOTPGroup>\n      <InputOTPSeparator />\n      <InputOTPGroup>\n        <InputOTPSlot index={3} />\n        <InputOTPSlot index={4} />\n        <InputOTPSlot index={5} />\n      </InputOTPGroup>\n    </InputOTP>\n  )\n}`}
        align="center"
      >
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </ComponentPreview>
    </div>
  );
}
