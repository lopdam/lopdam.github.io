import { personalInfo, socialLinks } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle, Github, Linkedin, Mail } from "lucide-react";

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {personalInfo.availability}
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Location
                  </p>
                  <p className="text-lg font-medium">{personalInfo.location}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Languages
                  </p>
                  <p className="text-lg font-medium">
                    {personalInfo.languages.join(" • ")}
                  </p>
                </div>

                <div className="pt-4">
                  <div className="flex flex-wrap gap-4 justify-center">
                    {socialLinks.map((link) => {
                      const Icon = iconMap[link.icon as keyof typeof iconMap];
                      return (
                        <Button
                          key={link.platform}
                          variant="outline"
                          size="lg"
                          className="gap-2"
                          asChild
                        >
                          <a
                            href={link.url}
                            target={link.platform !== "Email" ? "_blank" : undefined}
                            rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
                          >
                            <Icon className="w-4 h-4" />
                            {link.platform}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button size="lg" className="gap-2 w-full md:w-auto" asChild>
                    <a
                      href="https://wa.me/593985349480"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
