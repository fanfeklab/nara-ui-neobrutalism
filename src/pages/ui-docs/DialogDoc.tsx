import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/ui/component-preview";
import { BRAND } from "@/config/brand.config";

export default function DialogDoc() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Dialog (Modal)
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          A window overlaid on either the primary window or another dialog
          window, rendering the content underneath inert.
        </p>
      </div>

      <ComponentPreview
        title="Form Modal"
        description="A standard modal containing a form for user input."
        code={`<Dialog>\n  <DialogTrigger asChild>\n    <Button variant="solid">Edit Profile</Button>\n  </DialogTrigger>\n  <DialogContent className="sm:max-w-[425px]">\n    <DialogHeader>\n      <DialogTitle>Edit profile</DialogTitle>\n      <DialogDescription>\n        Make changes to your profile here. Click save when you're done.\n      </DialogDescription>\n    </DialogHeader>\n    {/* Form Content */}\n    <DialogFooter>\n      <Button type="submit">Save changes</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="solid">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="name"
                  className="text-right font-display font-medium"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="username"
                  className="text-right font-display font-medium"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <ComponentPreview
        title="Image Context Modal"
        description="A modal featuring a large image contextual to the content."
        code={`// Content with Image`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">View Event Poster</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] p-0 border-2 border-black overflow-hidden bg-card">
            <div className="aspect-video w-full border-b-2 border-black bg-muted relative">
              <img
                src="https://picsum.photos/seed/naraevents/800/400"
                alt="Event Poster"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Neo-Brutalism Tech Summit 2026
                </DialogTitle>
                <DialogDescription className="text-base">
                  Join us for the biggest design and engineering conference of
                  the year. Experience hands-on workshops, amazing talks, and
                  networking.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-6">
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
                <Button>Get Tickets</Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <ComponentPreview
        title="Text Heavy Context"
        description="A modal designed to present heavy text information, like terms of service or privacy policy."
        code={`// Text heavy modal`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Read Terms</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">Terms of Service</DialogTitle>
              <DialogDescription>Last updated: May 9, 2026</DialogDescription>
            </DialogHeader>
            <div className="py-4 h-64 overflow-y-auto pr-4 font-body text-sm space-y-4 border-y-2 border-black/10 my-2">
              <p>
                <strong>1. Acceptance of Terms</strong>
                <br />
                By accessing and using this service, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
              <p>
                <strong>2. User License</strong>
                <br />
                Permission is granted to temporarily download one copy of the
                materials (information or software) on {BRAND.name}'s website
                for personal, non-commercial transitory viewing only.
              </p>
              <p>
                <strong>3. Disclaimer</strong>
                <br />
                The materials on {BRAND.name}'s website are provided on an 'as
                is' basis. {BRAND.name} makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
              <p>
                <strong>4. Limitations</strong>
                <br />
                In no event shall {BRAND.name} or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on {BRAND.name}'s
                website.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Decline</Button>
              </DialogClose>
              <Button>Accept Terms</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>
    </div>
  );
}
