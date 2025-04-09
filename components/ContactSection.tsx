import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Phone, MapPin} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-slate-100">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-red-600" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p>403-650-9654</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-red-600" />
                  <div>
                    <h4 className="font-medium">Service Area</h4>
                    <p>Calgary and surrounding areas</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="hours">
                      <AccordionTrigger>View our hours</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Monday - Friday</div>
                          <div>8:00 AM - 6:00 PM</div>
                          <div>Saturday</div>
                          <div>9:00 AM - 4:00 PM</div>
                          <div>Sunday</div>
                          <div>Closed</div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea id="message" placeholder="Tell us about your roofing needs" rows={4} />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default ContactSection