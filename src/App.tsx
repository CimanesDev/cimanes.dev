import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// GitHub Pages SPA routing fix
const GitHubPagesRouter = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const pathSegmentsToKeep = 0;
    const l = window.location;
    
    // Check if we're on GitHub Pages and need to handle the redirect
    if (l.pathname.includes('/?/')) {
      const newPath = l.pathname.split('/?/')[1] || '';
      const newSearch = l.search.replace(/~and~/g, '&');
      const newHash = l.hash;
      
      // Replace the current URL with the correct path
      const newUrl = l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') + 
                    '/' + newPath + newSearch + newHash;
      
      window.history.replaceState({}, '', newUrl);
    }
  }, []);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GitHubPagesRouter>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </GitHubPagesRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
