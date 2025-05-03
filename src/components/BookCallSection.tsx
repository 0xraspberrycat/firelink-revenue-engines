
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const BookCallSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a CRM or calendar system
    toast({
      title: "Request received!",
      description: "We'll be in touch shortly to confirm your strategy call.",
    });
  };

  return (
    <section id="book-call" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-2">Book Your Strategy Call</h2>
          <p className="text-center text-gray-600 mb-10">
            Let's discuss how we can transform your business operations
          </p>

          <Card className="shadow-xl border-t-4 border-t-firelink-purple">
            <CardHeader>
              <CardTitle className="text-xl font-bold">45-Minute Strategy Call</CardTitle>
              <CardDescription>
                In this call, we'll analyze your current operations and identify opportunities for automation and improvement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Smith" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(123) 456-7890" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="revenue">Current Monthly Revenue (approximate)</Label>
                  <select 
                    id="revenue" 
                    className="w-full border border-input rounded-md h-10 px-3 py-2 text-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="0-10k">$0 - $10k per month</option>
                    <option value="10k-25k">$10k - $25k per month</option>
                    <option value="25k-50k">$25k - $50k per month</option>
                    <option value="50k-100k">$50k - $100k per month</option>
                    <option value="100k+">$100k+ per month</option>
                  </select>
                </div>
                
                <Button type="submit" className="w-full cta-button">
                  Request Strategy Call
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-sm text-gray-500 text-center border-t pt-6">
              By submitting this form, you agree to our privacy policy and terms of service.
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
