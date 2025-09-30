import robotProcess from "@/assets/robot-process.png";

const steps = [
  {
    number: 1,
    title: "Upload",
    description: "Bring in form 10, salary sheet, tocal and notifications equity."
  },
  {
    number: 2,
    title: "Validate",
    description: "Schema ary-nency-checks, catch mizzing PAN."
  },
  {
    number: 3,
    title: "Anchor",
    description: "Each computatorilog, is mapped to clauser level rc."
  },
  {
    number: 4,
    title: "Compute",
    description: "Reviewer handihoff to a reviewer."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          ITR filing made simple
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {step.number}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Illustration Card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="text-sm font-bold">AI</span>
                  </div>
                  <span className="font-semibold">Ask our IOITR</span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium mb-4">Here's your ITR summary</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Income</span>
                      <span className="font-semibold">₹ 8,51,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }} />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Taxes paid</span>
                      <span className="font-semibold">₹ 1,01,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '65%' }} />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Refund</span>
                      <span className="font-semibold text-primary">₹ 10,560</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Robot */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 animate-fade-in">
              <img 
                src={robotProcess} 
                alt="ITAI Assistant" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
