import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Navbar from "./components/ui/navbar";
import { SidebarProvider } from "./components/ui/sidebar";
import CustomSidebar from "./components/ui/CustomSideBar";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Menu} />
      <Route path={"/About"} component={About} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <SidebarProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <CustomSidebar>
              <Toaster />
              <Navbar />
              <Router />
            </CustomSidebar>
          </TooltipProvider>
        </ThemeProvider>
      </SidebarProvider>
    </ErrorBoundary>
  );
}

export default App;
