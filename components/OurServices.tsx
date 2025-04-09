import { motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';




const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function OurServices() {
    return (
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
                                <p>Quality installation of various shingle types to match your home&apos;s style and your budget.</p>
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

                </motion.div>
            </div>
        </section>
    )
}

export default OurServices;