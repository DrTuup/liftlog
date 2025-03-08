import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

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
            <div className="w-full">
              <div className="flex flex-row items-center">
                <SidebarTrigger className="m-2" />
                <ThemeToggle />
              </div>
              <Separator />

              <div className="m-3">{children}</div>
            </div>
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
