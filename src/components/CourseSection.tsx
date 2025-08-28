import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, BookOpen, Award, TrendingUp } from "lucide-react";
import sscIcon from "@/assets/ssc-icon.png";
import rrbIcon from "@/assets/rrb-icon.png";
import bankingIcon from "@/assets/banking-icon.png";

const CourseSection = () => {
  const courses = [
    {
      id: "ssc",
      title: "SSC Exams",
      icon: sscIcon,
      description: "Staff Selection Commission (SSC) conducts some of the most sought-after government job exams in India. From SSC CGL, CHSL, CPO, MTS to JE - we prepare you for success in all major SSC examinations.",
      features: ["Expert Faculty", "Updated Materials", "Online & Offline Classes", "Mock Tests"],
      courses: ["Foundation Course", "Comprehensive Course", "Crash Course", "Test Series & Practice Sessions"],
      color: "primary"
    },
    {
      id: "rrb", 
      title: "RRB Exams",
      icon: rrbIcon,
      description: "Indian Railways is one of the largest employers in the world, offering secure government jobs with excellent benefits. Our RRB coaching covers all major railway recruitment exams including RRB NTPC, Group D, JE, and ALP.",
      features: ["Expert Faculty", "Latest Syllabus", "Online & Offline Classes", "Mock Tests"],
      courses: ["Foundation Course", "Comprehensive Course", "Crash Course", "Mock Test Series"],
      color: "accent"
    },
    {
      id: "banking",
      title: "Banking & Insurance",
      icon: bankingIcon,
      description: "Banking and Insurance jobs are among the most secure and respected career options in India. We provide comprehensive coaching for IBPS, SBI, RBI, NABARD, and leading insurance company examinations.",
      features: ["Expert Mentors", "Updated Syllabus", "Practice Sessions", "Online & Offline Batches"],
      courses: ["Foundation Course", "Comprehensive Course", "Crash Course", "Mock Test Series"],
      color: "secondary"
    }
  ];

  return (
    <section id="courses" className="py-16 lg:py-24 bg-soft-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Specialized Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coaching programs designed to help you crack government exams with confidence and achieve your career goals.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="h-full shadow-soft hover:shadow-primary transition-all duration-300 hover:-translate-y-2 bg-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-20 h-20 rounded-xl bg-light-blue p-4 flex items-center justify-center">
                  <img src={course.icon} alt={`${course.title} icon`} className="w-12 h-12 object-contain" />
                </div>
                <CardTitle className="text-xl font-display font-bold text-foreground">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-2 text-accent flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Types */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-primary" />
                    Courses Offered
                  </h4>
                  <div className="space-y-2">
                    {course.courses.map((courseType, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {courseType}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full" variant={course.color === "primary" ? "default" : course.color === "accent" ? "accent" : "secondary"}>
                  Learn More
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to Start Your Government Career Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of successful candidates who trusted Kingmakers School of Banking for their exam preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Enroll Now
              </Button>
              <Button variant="outline" size="lg">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;