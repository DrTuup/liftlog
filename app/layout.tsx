import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarToggle } from "@/components/sidebar-toggle";

export const metadata: Metadata = {
  title: "Liftlog",
  description: "Log your workouts without the ads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <SidebarProvider>
          <AppSidebar />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeToggle />
            <SidebarToggle />
            {children}
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
