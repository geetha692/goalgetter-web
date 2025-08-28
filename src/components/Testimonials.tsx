import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "SBI PO",
      image: "/placeholder.svg",
      rating: 5,
      text: "Kingmakers School of Banking transformed my preparation strategy. The faculty's guidance and comprehensive study material helped me crack SBI PO in my first attempt. Highly recommended!",
      exam: "Banking"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      position: "SSC CGL Officer",
      image: "/placeholder.svg",
      rating: 5,
      text: "The SSC coaching at Kingmakers is exceptional. Their systematic approach and regular mock tests gave me the confidence to clear SSC CGL with a great rank. Thank you team!",
      exam: "SSC"
    },
    {
      id: 3,
      name: "Anita Verma",
      position: "Railway ASM",
      image: "/placeholder.svg",
      rating: 5,
      text: "I was struggling with RRB preparation until I joined Kingmakers. Their expert faculty and personalized attention helped me achieve my dream job in Indian Railways.",
      exam: "RRB"
    },
    {
      id: 4,
      name: "Amit Singh",
      position: "IBPS Clerk",
      image: "/placeholder.svg",
      rating: 5,
      text: "The test series and doubt clearing sessions were game-changers for me. Kingmakers' methodology is result-oriented and student-friendly. Grateful for their support!",
      exam: "Banking"
    },
    {
      id: 5,
      name: "Sneha Gupta",
      position: "SSC CHSL",
      image: "/placeholder.svg",
      rating: 5,
      text: "Best coaching institute for government exam preparation! The faculty knows exactly what students need. Their support throughout my journey was incredible.",
      exam: "SSC"
    },
    {
      id: 6,
      name: "Vikash Yadav",
      position: "Railway JE",
      image: "/placeholder.svg",
      rating: 5,
      text: "Kingmakers made my Railway JE dream come true. Their technical preparation and interview guidance were outstanding. Highly satisfied with the results!",
      exam: "RRB"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our successful students who achieved their government job dreams with Kingmakers School of Banking.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full shadow-soft hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-card border-0">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-primary opacity-60" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Student Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <div className="inline-block mt-1">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-light-blue text-primary">
                          {testimonial.exam} Success
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">1500+</div>
            <div className="text-sm text-muted-foreground">Banking Success</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">2000+</div>
            <div className="text-sm text-muted-foreground">SSC Selections</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">1200+</div>
            <div className="text-sm text-muted-foreground">Railway Jobs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent">300+</div>
            <div className="text-sm text-muted-foreground">Insurance Placements</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;