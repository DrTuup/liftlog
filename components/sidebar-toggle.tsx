"use client";

import { SquareArrowLeft, SquareArrowRight } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

export function SidebarToggle() {
  const { open, toggleSidebar } = useSidebar();

  return (
    <div className="m-2">
      {open ? (
        <SquareArrowLeft onClick={toggleSidebar} />
      ) : (
        <SquareArrowRight onClick={toggleSidebar} />
      )}
    </div>
  );
}
