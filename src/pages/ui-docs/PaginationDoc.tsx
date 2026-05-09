import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ComponentPreview } from "@/components/ui/component-preview";

export default function PaginationDoc() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tighter text-foreground mb-4">
          Pagination
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl">
          Pagination with page navigation, next and previous links.
        </p>
      </div>

      <ComponentPreview
        title="Default"
        description="A standard pagination component."
        code={`import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"\n\nexport function PaginationDemo() {\n  return (\n    <Pagination>\n      <PaginationContent>\n        <PaginationItem>\n          <PaginationPrevious href="#" />\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationLink href="#">1</PaginationLink>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationEllipsis />\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationNext href="#" />\n        </PaginationItem>\n      </PaginationContent>\n    </Pagination>\n  )\n}`}
        align="center"
      >
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ComponentPreview>
    </div>
  );
}
