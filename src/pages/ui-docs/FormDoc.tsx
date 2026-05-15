import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/ui/component-preview";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast("Form Submitted", {
      description: `Username: ${values.username}`,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-sm w-full"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default function FormDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-black uppercase tracking-tight">
          Form & Validation
        </h1>
        <p className="text-muted-foreground mt-2 font-body">
          Building forms with React Hook Form and Zod. Complete with
          standardized validation display under inputs.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-display font-bold uppercase tracking-tighter">
          Basic Form Wrapper
        </h2>
        <ComponentPreview
          title="Basic Form Wrapper"
          code={`import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

// ... (code implementation)`}
        >
          <FormDemo />
        </ComponentPreview>
      </div>
    </div>
  );
}
