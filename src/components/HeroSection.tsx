import { Button } from "@/components/ui/button";
import robotHero from "@/assets/robot-hero.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/10 to-background -z-10" />
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              ITR filing made{" "}
              <span className="text-primary">simple</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg">
                Start your ITR
              </Button>
              <Button variant="heroOutline" size="lg" className="text-lg">
                Watch a demo demo
              </Button>
            </div>
          </div>

          {/* Right content - Robot and Card */}
          <div className="relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <img 
                src={robotHero} 
                alt="ITAI Tax Assistant Robot" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain animate-fade-in"
              />
            </div>
            
            {/* Summary Card */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-md mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-3xl p-6 shadow-[var(--shadow-card)]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                    </div>
                    <span className="font-semibold text-foreground">Here's your ITR summary</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Income</span>
                      <span className="font-semibold">₹ 9,51,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }} />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Taxes paid</span>
                      <span className="font-semibold">₹ 1,01,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }} />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Refund</span>
                      <span className="font-semibold text-primary">₹ 10,530</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
