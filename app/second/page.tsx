"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, MapPin, ArrowRight, Check, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function RoofingLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle mobile menu toggle
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Google Reviews Data
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Shingles & Shakes did an amazing job on our roof! The team was professional and completed the work faster than expected. They also left our property spotless. Highly recommend their services!",
      date: "March 2025"
    },
    {
      name: "Michael Thompson",
      rating: 5,
      text: "As a homeowner, I appreciate their attention to detail and quality workmanship. They used Malarkey shingles as promised and the roof looks fantastic. The team was transparent throughout the process.",
      date: "February 2025"
    },
    {
      name: "Jennifer Williams",
      rating: 4,
      text: "Great experience with this roofing company. The certified journeyman roofer was knowledgeable and answered all my questions. They were a bit delayed starting due to weather, but communicated well.",
      date: "January 2025"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Shingles & Shakes Roofing Co. Ltd.</div>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4"
            >
              <ul className="flex flex-col space-y-3 pb-4">
                <li><a href="#about" className="block py-2 hover:text-amber-400" onClick={toggleMenu}>About</a></li>
                <li><a href="#services" className="block py-2 hover:text-amber-400" onClick={toggleMenu}>Services</a></li>
                <li><a href="#reviews" className="block py-2 hover:text-amber-400" onClick={toggleMenu}>Reviews</a></li>
                <li><a href="#contact" className="block py-2 hover:text-amber-400" onClick={toggleMenu}>Contact</a></li>
              </ul>
            </motion.nav>
          )}
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative bg-slate-800 text-white" style={{ backgroundImage: `url('/images/hero1.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Calgary&apos;s Asphalt Re-Roofing Specialists</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">When it comes to roofing, a company doesn&apos;t have to be big to do high quality work. That&apos;s why we work on the principle of &quot;small company, big on quality.&quot;</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Get A Free Estimate
                <Phone className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Certified Journeyman Roofing Contractor in Calgary</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Red Seal Certified, Licensed & Insured</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Shingles & Shakes Roofing Co. Ltd. provides roofing services from an Interprovincial Red Seal certified journeyman roofer with more than 40 years' experience in the roofing business. We have been licensed and insured since 1990.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Brand-Name Roofing Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The high quality of our work is matched by the proven quality of the materials we use. Shingles & Shakes Roofing Co. Ltd. specializes in asphalt roofing using only Malarkey, IKO, and BP materials.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">We Are Your Roofers – No Subcontractors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Taking pride and finding satisfaction in knowing that each of our jobs is done right is important, not only to us, but also, more importantly, to the homeowners we work for. This is why we do all our own work and do not use subcontractors. To schedule an estimate, please call 403‑650‑9654.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-slate-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Professional Affiliations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Inter-Provincial Red Seal Certified Journeyman Roofer</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>WCB Insured</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Fully Licensed and Insured</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl font-bold">Specialty: Asphalt Shingles Re-Roofing</p>
              <p className="mt-4">At Shingles & Shakes Roofing Co. Ltd., our commitment is to provide top quality service and excellent workmanship to our customers, including leaving the work site immaculately clean and no subcontracting of work.</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Shingles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-200 mb-4 rounded-md flex items-center justify-center">
                  <Image 
                    src=""
                    alt="Shingles"
                    fill
                    />
                   
                  </div>
                  <p>Quality installation of various shingle types to match your home's style and your budget.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Roofing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-200 mb-4 rounded-md flex items-center justify-center">
                    <Image 
                    src="/api/placeholder/400/320"
                    alt="Roofing"
                    fill
                    />
                 
                  </div>
                  <p>Complete roofing solutions including inspections, repairs, and full roof replacements.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Asphalt Shingles Re-Roofing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gray-200 mb-4 rounded-md flex items-center justify-center">
                  <Image 
                    src="/api/placeholder/400/320"
                    alt="Roofing"
                    fill
                    />
                    
                  </div>
                  <p>Our specialty service - efficient and high-quality re-roofing with premium asphalt shingles.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Design Your Own Roof</h3>
              <p className="max-w-2xl mx-auto mb-8">Interested in creating a roof tailored to your unique taste? Explore our premium roofing material partners:</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="bg-white">Malarkey Roofing Products</Button>
                <Button variant="outline" className="bg-white">IKO</Button>
                <Button variant="outline" className="bg-white">BP</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
            <p className="text-center max-w-2xl mx-auto mb-12">Don't just take our word for it - see what our satisfied customers have to say about our roofing services.</p>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {reviews.map((review, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <CardDescription>{review.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="italic">{review.text}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center">
                        <Image 
                    src="/api/placeholder/400/320"
                    alt="Roofing"
                    fill
                    />
                        <span className="text-sm text-gray-500">Google Review</span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get a Free Estimate!</h2>
            <p className="text-xl mb-8">Call us today. We'll assess your roof.</p>
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" /> 403-650-9654
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
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
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shingles & Shakes Roofing Co. Ltd.</h3>
              <p>Calgary&apos;s Asphalt Re-Roofing Specialists since 1990.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Shingles</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Roofing</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Asphalt Shingles Re-Roofing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <p className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2" /> 403-650-9654
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> Serving Calgary and local area
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Shingles & Shakes Roofing Co. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}