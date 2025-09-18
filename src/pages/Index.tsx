import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Database, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import cyberHero from "@/assets/cyber-hero.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Newsletter Subscription",
      description: "Thank you for subscribing to our security updates!",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">CertWipe</span>
            </div>
            <Link to="/login">
              <Button variant="outline" className="cyber-glow">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${cyberHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Secure Data
              <span className="text-primary block">Wiping Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ISO-certified data wiping technology that ensures complete and irreversible data destruction. 
              Protect your organization with military-grade security standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="animate-cyber-pulse">
                  Get Started
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="cyber-glow"
                onClick={() => {
                  document.getElementById('learn-more')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Learn More Section with Transition */}
      <section id="learn-more" className="py-32 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade 
              <span className="text-primary block">Data Protection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              CertWipe delivers comprehensive data sanitization solutions that exceed industry standards. 
              Our advanced technology ensures complete data destruction while maintaining compliance 
              with regulatory requirements across all sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  Certified Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our solutions are certified to meet DOD 5220.22-M, NIST 800-88, and Common Criteria standards. 
                  We provide verifiable proof of data destruction with detailed reporting and audit trails.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary" />
                  Universal Compatibility
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Support for all storage technologies including traditional HDDs, modern SSDs, 
                  hybrid drives, and mobile devices. Our algorithms adapt to different storage types 
                  for optimal security.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <Card className="cyber-glow-intense bg-gradient-cyber p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Security Level</span>
                    <span className="text-primary font-bold">Maximum</span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Data Overwrite Passes", value: "35x" },
                      { label: "Verification Cycles", value: "3x" },
                      { label: "Compliance Standards", value: "12+" },
                      { label: "Success Rate", value: "99.99%" }
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border/20">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="font-bold text-primary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <Link to="/login">
              <Button size="lg" className="animate-cyber-pulse px-8 py-6 text-lg">
                Start Secure Wiping Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Why Choose CertWipe?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive data wiping solutions meet the highest security standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "ISO Certified",
                description: "Compliant with international security standards and regulations"
              },
              {
                icon: Lock,
                title: "Military Grade",
                description: "Advanced encryption and wiping algorithms for complete data destruction"
              },
              {
                icon: Database,
                title: "Comprehensive Coverage",
                description: "Support for all storage types including HDDs, SSDs, and mobile devices"
              }
            ].map((feature, index) => (
              <Card key={index} className="cyber-glow border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="cyber-glow-intense border-primary/20 bg-gradient-cyber">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-8">
                Get the latest security updates, threat intelligence, and industry news
              </p>
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-input/50 border-border"
                  required
                />
                <Button type="submit" className="animate-cyber-pulse">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">CertWipe</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 CertWipe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;