import { Routes, Route, Navigate } from "react-router-dom";
import PublicPage from "./pages/PublicPage";
import Dashboard from "./pages/Dashboard";
import { DxTool } from "./components/DxTool";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

// Layouts
import UiDocsLayout from "./layouts/UiDocsLayout";
import { PublicLayout } from "./layouts/PublicLayout";

// UI Docs Pages
// ... (imports remain)
import IntroDoc from "./pages/ui-docs/IntroDoc";
import DecorationsDoc from "./pages/ui-docs/DecorationsDoc";
import TypographyDoc from "./pages/ui-docs/TypographyDoc";
import ButtonDoc from "./pages/ui-docs/ButtonDoc";
import BadgeDoc from "./pages/ui-docs/BadgeDoc";
import AvatarDoc from "./pages/ui-docs/AvatarDoc";
import InputDoc from "./pages/ui-docs/InputDoc";
import LabelDoc from "./pages/ui-docs/LabelDoc";
import CheckboxDoc from "./pages/ui-docs/CheckboxDoc";
import SwitchDoc from "./pages/ui-docs/SwitchDoc";
import SliderDoc from "./pages/ui-docs/SliderDoc";
import ProgressDoc from "./pages/ui-docs/ProgressDoc";
import CardDoc from "./pages/ui-docs/CardDoc";
import DataTableDoc from "./pages/ui-docs/DataTableDoc";
import ChartDoc from "./pages/ui-docs/ChartDoc";
import StepperDoc from "./pages/ui-docs/StepperDoc";
import SortableListDoc from "./pages/ui-docs/SortableListDoc";
import TableDoc from "./pages/ui-docs/TableDoc";
import SeparatorDoc from "./pages/ui-docs/SeparatorDoc";
import TabsDoc from "./pages/ui-docs/TabsDoc";
import TooltipDoc from "./pages/ui-docs/TooltipDoc";
import AccordionDoc from "./pages/ui-docs/AccordionDoc";
import DialogDoc from "./pages/ui-docs/DialogDoc";
import DropdownMenuDoc from "./pages/ui-docs/DropdownMenuDoc";
import AlertDoc from "./pages/ui-docs/AlertDoc";
import BreadcrumbDoc from "./pages/ui-docs/BreadcrumbDoc";
import SkeletonDoc from "./pages/ui-docs/SkeletonDoc";
import AlertDialogDoc from "./pages/ui-docs/AlertDialogDoc";
import HoverCardDoc from "./pages/ui-docs/HoverCardDoc";
import PopoverDoc from "./pages/ui-docs/PopoverDoc";
import SheetDoc from "./pages/ui-docs/SheetDoc";
import ContextMenuDoc from "./pages/ui-docs/ContextMenuDoc";
import ScrollAreaDoc from "./pages/ui-docs/ScrollAreaDoc";
import TextareaDoc from "./pages/ui-docs/TextareaDoc";
import RadioGroupDoc from "./pages/ui-docs/RadioGroupDoc";
import ToggleDoc from "./pages/ui-docs/ToggleDoc";
import CalendarDoc from "./pages/ui-docs/CalendarDoc";
import DatePickerDoc from "./pages/ui-docs/DatePickerDoc";
import SonnerDoc from "./pages/ui-docs/SonnerDoc";
import InputOtpDoc from "./pages/ui-docs/InputOtpDoc";
import FileUploadDoc from "./pages/ui-docs/FileUploadDoc";
import CommandDoc from "./pages/ui-docs/CommandDoc";
import PaginationDoc from "./pages/ui-docs/PaginationDoc";
import NavigationMenuDoc from "./pages/ui-docs/NavigationMenuDoc";
import MenubarDoc from "./pages/ui-docs/MenubarDoc";
import ResizableDoc from "./pages/ui-docs/ResizableDoc";
import AspectRatioDoc from "./pages/ui-docs/AspectRatioDoc";
import CollapsibleDoc from "./pages/ui-docs/CollapsibleDoc";
import SelectDoc from "./pages/ui-docs/SelectDoc";
import CarouselDoc from "./pages/ui-docs/CarouselDoc";
import DrawerDoc from "./pages/ui-docs/DrawerDoc";
import ComboboxDoc from "./pages/ui-docs/ComboboxDoc";

import FormDoc from "./pages/ui-docs/FormDoc";

import AboutPage from "./pages/public/AboutPage";
import ServicesPage from "./pages/public/ServicesPage";
import PortfolioPage from "./pages/public/PortfolioPage";
import ClientsPage from "./pages/public/ClientsPage";
import BlogPage from "./pages/public/BlogPage";
import BlogDetailPage from "./pages/public/BlogDetailPage";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Route>
        
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* UI Documentation Routes */}
        <Route path="/ui-docs" element={<UiDocsLayout />}>
          <Route index element={<IntroDoc />} />
          <Route path="decorations" element={<DecorationsDoc />} />
          <Route path="typography" element={<TypographyDoc />} />
          <Route path="buttons" element={<ButtonDoc />} />
          <Route path="combobox" element={<ComboboxDoc />} />
          <Route path="badges" element={<BadgeDoc />} />
          <Route path="avatars" element={<AvatarDoc />} />
          <Route path="inputs" element={<InputDoc />} />
          <Route path="labels" element={<LabelDoc />} />
          <Route path="checkbox" element={<CheckboxDoc />} />
          <Route path="switch" element={<SwitchDoc />} />
          <Route path="slider" element={<SliderDoc />} />
          <Route path="progress" element={<ProgressDoc />} />
          <Route path="textarea" element={<TextareaDoc />} />
          <Route path="radio-group" element={<RadioGroupDoc />} />
          <Route path="toggle" element={<ToggleDoc />} />
          <Route path="aspect-ratio" element={<AspectRatioDoc />} />
          <Route path="cards" element={<CardDoc />} />
          <Route path="calendar" element={<CalendarDoc />} />
          <Route path="form" element={<FormDoc />} />
          <Route path="collapsible" element={<CollapsibleDoc />} />
          <Route path="date-picker" element={<DatePickerDoc />} />
          <Route path="table" element={<TableDoc />} />
          <Route path="data-table" element={<DataTableDoc />} />
          <Route path="chart" element={<ChartDoc />} />
          <Route path="stepper" element={<StepperDoc />} />
          <Route path="sortable-list" element={<SortableListDoc />} />
          <Route path="separator" element={<SeparatorDoc />} />
          <Route path="skeleton" element={<SkeletonDoc />} />
          <Route path="tabs" element={<TabsDoc />} />
          <Route path="tooltip" element={<TooltipDoc />} />
          <Route path="hover-card" element={<HoverCardDoc />} />
          <Route path="popover" element={<PopoverDoc />} />
          <Route path="scroll-area" element={<ScrollAreaDoc />} />
          <Route path="accordion" element={<AccordionDoc />} />
          <Route path="alert" element={<AlertDoc />} />
          <Route path="alert-dialog" element={<AlertDialogDoc />} />
          <Route path="breadcrumb" element={<BreadcrumbDoc />} />
          <Route path="context-menu" element={<ContextMenuDoc />} />
          <Route path="dialog" element={<DialogDoc />} />
          <Route path="dropdown-menu" element={<DropdownMenuDoc />} />
          <Route path="input-otp" element={<InputOtpDoc />} />
          <Route path="file-upload" element={<FileUploadDoc />} />
          <Route path="command" element={<CommandDoc />} />
          <Route path="pagination" element={<PaginationDoc />} />
          <Route path="navigation-menu" element={<NavigationMenuDoc />} />
          <Route path="menubar" element={<MenubarDoc />} />
          <Route path="resizable" element={<ResizableDoc />} />
          <Route path="sheet" element={<SheetDoc />} />
          <Route path="select" element={<SelectDoc />} />
          <Route path="carousel" element={<CarouselDoc />} />
          <Route path="drawer" element={<DrawerDoc />} />
          <Route path="sonner" element={<SonnerDoc />} />
          {/* Fallback for unknown ui-docs routes */}
          <Route path="*" element={<Navigate to="/ui-docs" replace />} />
        </Route>
      </Routes>
      <DxTool />
      <Toaster />
    </ThemeProvider>
  );
}
