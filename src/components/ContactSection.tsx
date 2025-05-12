
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const emails = [
    "ermiasauto@gmail.com",
    "paulxautomation@gmail.com"
  ];
  
  const socialProfiles = [
    {
      platform: "X",
      name: "Ermias",
      url: "https://x.com/ErmiasAuto"
    },
    {
      platform: "X",
      name: "Paul",
      url: "https://x.com/paulautomates"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
          Contact Firelink
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-firelink-dark">Email Us:</h3>
            <ul className="space-y-4">
              {emails.map((email, index) => (
                <li key={index}>
                  <a 
                    href={`mailto:${email}`}
                    className="flex items-center text-firelink-dark hover:text-firelink-purple transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span className="text-lg">{email}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-firelink-dark">Find Us on X:</h3>
            <ul className="space-y-4">
              {socialProfiles.map((profile, index) => (
                <li key={index}>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-firelink-dark hover:text-firelink-purple"
                    asChild
                  >
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                      {profile.name}
                      <ArrowUpRight className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
