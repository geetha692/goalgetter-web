import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-light-blue via-background to-soft-gray">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Kickstart Your{" "}
                <span className="gradient-hero bg-clip-text text-transparent">
                  Government Career
                </span>{" "}
                with Expert Coaching
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                SSC | RRB | Banking & Insurance Exams
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Join thousands of successful candidates who achieved their dream government jobs through our comprehensive coaching programs. Expert faculty, proven methods, guaranteed results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                Join Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="Students studying for government exams at Kingmakers School of Banking"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-gold font-semibold">
              Expert Faculty
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-primary font-semibold">
              Proven Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;