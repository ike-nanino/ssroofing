import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
  

function GoogleReviews() {

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
  )
}

export default GoogleReviews