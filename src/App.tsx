import { Routes, Route, Navigate } from "react-router-dom";
import PublicPage from "./pages/PublicPage";
import Dashboard from "./pages/Dashboard";
import { DxTool } from "./components/DxTool";

// Layouts
import UiDocsLayout from "./layouts/UiDocsLayout";

// UI Docs Pages
import IntroDoc from "./pages/ui-docs/IntroDoc";
import ButtonDoc from "./pages/ui-docs/ButtonDoc";
import BadgeDoc from "./pages/ui-docs/BadgeDoc";
import AvatarDoc from "./pages/ui-docs/AvatarDoc";
import InputDoc from "./pages/ui-docs/InputDoc";
import CheckboxDoc from "./pages/ui-docs/CheckboxDoc";
import SwitchDoc from "./pages/ui-docs/SwitchDoc";
import SliderDoc from "./pages/ui-docs/SliderDoc";
import ProgressDoc from "./pages/ui-docs/ProgressDoc";
import CardDoc from "./pages/ui-docs/CardDoc";
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

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* UI Documentation Routes */}
        <Route path="/ui-docs" element={<UiDocsLayout />}>
          <Route index element={<IntroDoc />} />
          <Route path="buttons" element={<ButtonDoc />} />
          <Route path="badges" element={<BadgeDoc />} />
          <Route path="avatars" element={<AvatarDoc />} />
          <Route path="inputs" element={<InputDoc />} />
          <Route path="checkbox" element={<CheckboxDoc />} />
          <Route path="switch" element={<SwitchDoc />} />
          <Route path="slider" element={<SliderDoc />} />
          <Route path="progress" element={<ProgressDoc />} />
          <Route path="cards" element={<CardDoc />} />
          <Route path="table" element={<TableDoc />} />
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
          <Route path="sheet" element={<SheetDoc />} />
          {/* Fallback for unknown ui-docs routes */}
          <Route path="*" element={<Navigate to="/ui-docs" replace />} />
        </Route>
      </Routes>
      <DxTool />
    </>
  );
}
