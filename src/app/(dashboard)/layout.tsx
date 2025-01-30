import Header from "@/@layout/Header";
import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main  className="flex flex-col h-full pt-16">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
