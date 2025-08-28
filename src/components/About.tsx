import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, BookOpen, TrendingUp, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven track record in government exam coaching with thousands of success stories."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced teachers who understand exam patterns and student psychology."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Updated study materials, practice papers, and digital resources for complete preparation."
    },
    {
      icon: TrendingUp,
      title: "95% Success Rate",
      description: "Consistently high selection rates across all government exam categories."
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Individual attention and customized study plans for each student's needs."
    },
    {
      icon: Star,
      title: "Modern Teaching",
      description: "Blend of traditional teaching methods with latest technology and online resources."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About Kingmakers School of Banking
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Kingmakers School of Banking has been the trusted choice for thousands of aspirants 
            seeking to build successful careers in government services. Our mission is to provide world-class 
            coaching and comprehensive support to help students achieve their dreams.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-soft border-0 gradient-primary text-white">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8" />
                  <h3 className="text-2xl font-display font-bold">Our Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  To empower every aspirant with the knowledge, skills, and confidence needed to excel in 
                  government examinations and secure their dream careers in public service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 gradient-accent text-accent-foreground">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8" />
                  <h3 className="text-2xl font-display font-bold">Our Vision</h3>
                </div>
                <p className="opacity-90 leading-relaxed">
                  To be India's premier coaching institute, recognized for excellence in government exam 
                  preparation and for creating the next generation of dedicated public servants.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-12">
            Why Choose Kingmakers School of Banking?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full shadow-soft hover:shadow-primary transition-all duration-300 hover:-translate-y-1 border-0">
                  <CardContent className="p-6 text-center">
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-light-blue rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="bg-soft-gray rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-foreground mb-8">
            Our Achievements Speak for Themselves
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
              <Badge variant="outline" className="text-xs">Since 2008</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
              <Badge variant="outline" className="text-xs">Verified Results</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Expert Faculty</div>
              <Badge variant="outline" className="text-xs">Experienced</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">4.9/5</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
              <Badge variant="outline" className="text-xs">Google Reviews</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;