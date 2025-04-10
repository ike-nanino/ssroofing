"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Phone, MapPin, Check, Menu, X, MessageCircle, Mail, Facebook, Instagram } from 'lucide-react';
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


const imgs = [
  '/images/malarkey.png',
  '/images/bp.png',
  '/images/velux.jpg',
  '/images/iko.png',
]



export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const visibleImages = 3;
  ;
  const [currentIndexPhoto, setCurrentIndexPhoto] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false); // Trigger exit animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imgs.length - visibleImages ? 0 : prevIndex + 1
        );
        setIsVisible(true); // Trigger enter animation
      }, 200); // Slight delay for smooth transition
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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


  const imagesHero = ["/images/hero2.jpg", "/images/hero3.jpg", "/images/hero1.jpg"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndexPhoto((prevIndex) => (prevIndex + 1) % imagesHero.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [imagesHero.length]);
  // Change image every 5 seconds


  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 72;
      setScrolled(isScrolled);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        handleScroll();
      }
    };

    // Initial check when component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);



  return (
    <div className="flex flex-col min-h-screen">

      <div className="bg-slate-800 lg:flex justify-between items-center lg:px-20 py-3 hidden text-white border-b border-b-accent-400">
        {/* Left - Phone */}
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-white" />
          <span>403-650-9654</span>
        </div>

        {/* Right - Email & Socials */}
        <div className="flex items-center space-x-6">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-white" />
            <span>info@shinglesandshakes.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 hover:text-sky-300 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 hover:text-pink-300 transition" />
            </a>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className='text-white p-4 sticky top-0 left-0 right-0 z-50 
    transition-all duration-300 bg-slate-800'>
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
      {/* <section className="relative text-white" style={{ backgroundImage: `url('/images/hero1.jpg')` }}>
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
                 <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                   Get A Free Estimate
                   <Phone className="ml-2 h-4 w-4" />
                 </Button>

               </div>
             </motion.div>
           </div>
         </section> */}

      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden text-white">
        {/* Carousel Background Images */}
        <AnimatePresence mode="wait">
          {imagesHero.map((src, index) =>
            index === currentIndexPhoto ? (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute w-full h-full"
              >
                <Image
                  src={src}
                  alt={`Hero ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 z-10"></div>

        {/* Hero content */}
        <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold my-4">
              Calgary&apos;s Asphalt Re-Roofing Specialists
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              When it comes to roofing, a company doesn&apos;t have to be big to do high quality work. That&apos;s why we work on the principle of &quot;small company, big on quality.&quot;
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                Learn More
                <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About Section */}

      {/*          
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
                       <p>Shingles & Shakes Roofing Co. Ltd. provides roofing services from an Interprovincial Red Seal certified journeyman roofer with more than 40 years&apos; experience in the roofing business. We have been licensed and insured since 1990.</p>
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
         </section> */}



      <section id="about" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-sky-700">Certified Journeyman Roofing Contractor in Calgary</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <Card className="overflow-hidden shadow-md pt-0">
                  <Image
                    src="/images/shingles1.jpg"
                    alt="Red Seal Certified"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-sky-600">Red Seal Certified, Licensed & Insured</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Shingles & Shakes Roofing Co. Ltd. provides roofing services from an Interprovincial Red Seal certified journeyman roofer with more than 40 years' experience. Licensed and insured since 1990.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <Card className="overflow-hidden shadow-md pt-0">
                  <Image
                    src="/images/asphalt1.jpg"
                    alt="Roofing Materials"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-sky-600">Brand-Name Roofing Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">We specialize in asphalt roofing using only top-quality materials from Malarkey, IKO, and BP to ensure long-lasting protection for your home. We believe you will make the right choice</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 relative">
          <Card className="overflow-hidden shadow-md pt-0">
            <Image
              src="/images/roofing1.jpg"
              alt="Our Roofing Team"
              width={1000}
              height={400}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-sky-600">We Are Your Roofers – No Subcontractors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">We take pride in our craftsmanship and ensure every job is completed to the highest standards. That’s why we never subcontract. Call 403‑650‑9654 to schedule an estimate.</p>
            </CardContent>
          </Card>
        </motion.div> */}
            </div>

            {/* <div className="mt-12 p-6 bg-slate-100 rounded-lg shadow-inner animate-fadeIn">
        <h3 className="text-xl font-bold mb-4 text-sky-700">Professional Affiliations</h3>
        <ul className="space-y-2 text-gray-700">
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
      </div> */}

            <div className="mt-8 text-center">
              <p className="text-xl font-bold text-sky-700">Specialty: Asphalt Shingles Re-Roofing</p>
              <p className="mt-4 text-gray-700 max-w-3xl mx-auto">At Shingles & Shakes Roofing Co. Ltd., we are committed to top-quality service and excellent workmanship, leaving the site clean and never subcontracting our work.</p>
            </div>
          </motion.div>
        </div>
      </section>





      {/* EiEuro Shield */}

      <section className="relative h-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden mb-8">
        {/* Left content */}
        <div className="w-full lg:w-1/2 bg-sky-500 p-6 sm:p-10 lg:p-14 text-white">
          <div className="flex items-start gap-4">
            <div className="bg-white text-sky-500 p-2 rounded-full">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
                Curious about Euroshield® for your home in Calgary and its Environs?
              </h2>
              <p className="mt-4 text-base sm:text-lg font-semibold">
                Give Shingles & Shakes Roofing a call and we will be happy to help!
              </p>

              <button className="mt-6 bg-black text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition">
                WE CAN HELP →
              </button>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative">
          <Image
            src="/images/hero2.jpg" // 🔁 Replace with your actual image path
            alt="Roof"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-100">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Our Services
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Shingles',
                  img: '/images/shingles.jpg',
                  desc: 'Quality installation of various shingle types to match your home\'s style and your budget.',
                },
                {
                  title: 'Roofing',
                  img: '/images/roofing.jpg',
                  desc: 'Complete roofing solutions including inspections, repairs, and full roof replacements.',
                },
                {
                  title: 'Asphalt Shingles Re-Roofing',
                  img: '/images/asphalt.jpg',
                  desc: 'Our specialty service – efficient and high-quality re-roofing with premium asphalt shingles.',
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
                >
                  <CardHeader>

                    <div className="h-48 w-full relative rounded-t-md overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="p-4 text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-sm text-gray-700">
                    {item.desc}
                  </CardContent>
                </Card>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* Featured */}


      <div className='bg-white py-16 text-center px-10'>

        <div className='max-w-6xl mx-auto overflow-hidden'>
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                className='flex'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: `-${currentIndex * (100 / visibleImages)}%`
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                {[...imgs, ...imgs].map((img, index) => (
                  <motion.div
                    key={index}
                    className='flex-shrink-0'
                    style={{ width: `${100 / visibleImages}%` }}
                  >
                    <Image
                      src={img}
                      alt={`Featured publication ${index + 1}`}
                      width={200}
                      height={80}
                      className='h-24 w-auto object-contain mx-auto'
                      priority={index < visibleImages}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>




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
            <p className="text-center max-w-2xl mx-auto mb-12">Don&apos;t just take our word for it - see what our satisfied customers have to say about our roofing services.</p>

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
      {/* <section className="py-16 bg-red-600 text-white">
           <div className="container mx-auto px-4">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
               className="text-center"
             >
               <h2 className="text-3xl font-bold mb-4">Get a Free Estimate!</h2>
               <p className="text-xl mb-8">Call us today. We&apos;ll assess your roof.</p>
               <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                 <Phone className="mr-2 h-5 w-5" /> 403-650-9654
               </Button>
             </motion.div>
           </div>
         </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16" style={{ backgroundImage: `url('/images/hero2.jpg')` }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl text-white font-bold text-center mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 mt-1 text-sky-600" />
                      <div>
                        <h4 className="font-medium text-gray-100">Phone</h4>
                        <p className="text-gray-100">403-650-9654</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-sky-600" />
                      <div>
                        <h4 className="font-medium text-gray-100">Service Area</h4>
                        <p className='text-gray-100'>Calgary and surrounding areas</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-medium mb-2 text-gray-100">Business Hours</h4>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="hours">
                          <AccordionTrigger className="text-white">View our hours</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-2 gap-2 text-gray-100">
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
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Send us a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-100">Name</label>
                          <Input id="name" placeholder="Your name" className='text-gray-100' />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-100">Phone</label>
                          <Input id="phone" placeholder="Your phone number" className='text-gray-100' />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-100">Email</label>
                        <Input id="email" type="email" placeholder="Your email" className='text-gray-100' />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-100">Message</label>
                        <Textarea id="message" placeholder="Tell us about your roofing needs" rows={4} className='text-gray-100' />
                      </div>
                      <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Send Message</Button>
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
