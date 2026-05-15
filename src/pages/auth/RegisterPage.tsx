import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-background">
      
      {/* Left Column (Form) */}
      <div className="flex flex-col justify-center p-8 sm:p-16 lg:p-24 relative z-10">
        <Link 
          to="/" 
          className="absolute top-8 left-8 flex items-center gap-2 font-bold font-body text-sm hover:translate-x-1 transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="w-full max-w-sm mx-auto">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-2">Create Account</h1>
            <p className="font-body text-muted-foreground">Start organizing your next big event today.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                required
                className="h-12 border-2 border-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
                required
                className="h-12 border-2 border-black"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required
                className="h-12 border-2 border-black"
                placeholder="••••••••"
              />
              <p className="text-[10px] font-bold font-mono text-muted-foreground uppercase mt-1">Must be at least 8 characters</p>
            </div>

            <Button 
              type="submit" 
              variant="solid" 
              className="w-full h-14 text-lg mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm font-body">
            Already have an account?{" "}
            <Link to="/login" className="font-bold underline hover:text-primary transition-colors">
              Sign in here
            </Link>
          </p>
          
          <p className="mt-12 text-center text-xs font-body text-muted-foreground max-w-xs mx-auto">
            By clicking "Sign Up", you agree to our <Link to="#" className="underline font-bold">Terms of Service</Link> and <Link to="#" className="underline font-bold">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Right Column (Visual) */}
      <div className="hidden md:flex bg-secondary text-secondary-foreground border-l-4 border-black relative overflow-hidden items-center justify-center p-12">
         {/* Background Grid Pattern */}
         <div 
          className="absolute inset-0 z-0 opacity-[0.2]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
         />
         
         <div className="relative z-10 w-full max-w-md">
            <div className="bg-white text-black border-4 border-black rounded-3xl p-8 shadow-brutal transform rotate-3 hover:translate-x-2 transition-transform duration-300">
               <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-black">
                  <div className="w-16 h-16 bg-primary rounded-full border-4 border-black shrink-0 relative overflow-hidden">
                     <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Nadia Kusuma" alt="Avatar" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-black font-display text-xl uppercase tracking-tight leading-tight">"The best platform we've used"</h3>
                    <p className="font-bold text-sm text-gray-500 mt-1">Nadia, CEO at TechCorp</p>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded-full w-full border border-black"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-5/6 border border-black"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-4/6 border border-black"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
