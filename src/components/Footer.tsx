import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Faculty", href: "#faculty" },
    { name: "Results", href: "#results" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const courses = [
    { name: "SSC CGL", href: "#ssc" },
    { name: "SSC CHSL", href: "#ssc" },
    { name: "RRB NTPC", href: "#rrb" },
    { name: "RRB Group D", href: "#rrb" },
    { name: "IBPS PO", href: "#banking" },
    { name: "SBI Clerk", href: "#banking" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Kingmakers School</h3>
                <p className="text-sm opacity-80">of Banking</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering students to achieve their government job dreams through expert coaching, 
              comprehensive study materials, and proven teaching methodologies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a 
                    href={course.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="opacity-80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span className="opacity-80">info@kingmakers.edu.in</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="opacity-80">123 Education Hub, Sector 15, New Delhi - 110001</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-medium">Newsletter</h4>
              <p className="text-sm opacity-80">Get exam updates and study tips</p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="accent" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} Kingmakers School of Banking. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;