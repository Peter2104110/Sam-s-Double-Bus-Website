import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  useSidebar
} from "./sidebar";

import { Home, Info } from "lucide-react";
import { useLocation } from "wouter";

export default function CustomSidebar({ children }: { children: React.ReactNode }) {
    const { toggleSidebar } = useSidebar();


    const [, setLocation] = useLocation();

    function goToContact() {
    setLocation("/about#contact");
    }

  return (
    <>
        <Sidebar>
            {/* HEADER */}
            <SidebarHeader>
                <h2 className="text-xl font-bold px-2"></h2>
            </SidebarHeader>

            {/* CONTENT */}
            <SidebarContent className="overflow-hidden">

                <SidebarGroup>
                    <SidebarGroupLabel className="text-primary text-lg pb-5">Navigation</SidebarGroupLabel>

                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="/" className="flex items-center gap-2 !text-xl !justify-start">
                                    <Home />
                                    Menu
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="/about" className="flex items-center gap-2 !text-xl !justify-start">
                                    <Info />
                                    About
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator />

                    {/* OPTIONAL EXTRA SECTION */}
                <SidebarGroup>

                    <SidebarGroupLabel className="text-primary text-lg pb-5">Contact</SidebarGroupLabel>

                    <SidebarMenu>
                        <SidebarMenuItem>
                            <a
                                    className="flex items-center text-lg justify-start"
                                    href="/about#contact"
                                    onClick={() => {
                                        toggleSidebar()
                                        goToContact();
                                    }}
                                                                    >
                                <SidebarMenuButton className="text-lg !justify-start">
                                        📞 Call us
                                </SidebarMenuButton>
                            </a>
                        </SidebarMenuItem>
                    </SidebarMenu>

                </SidebarGroup>

            </SidebarContent>

            {/* FOOTER */}
            <SidebarFooter>
                <div className="text-xs text-muted-foreground px-2">
                © 2026 Sam’s Double Bus
                </div>
            </SidebarFooter>
            </Sidebar>

            <SidebarInset className="bg-transparent">
            <main className="bg-transparent">
                {children}
            </main>
        </SidebarInset>
    </>
  );
}