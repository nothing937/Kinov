import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            content: 'info@autocarepro.com',
            link: 'mailto:info@autocarepro.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: '+1 (555) 789-AUTO',
            link: 'tel:+15557892886'
        },
        {
            icon: MapPin,
            title: 'Visit Our Shop',
            content: '456 Auto Center Drive, San Francisco, CA 94110',
            link: '#'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="max-w-7xl mx-auto text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-bold mb-6">
                            Book Your Service
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
                            Schedule your car wash or window film installation appointment today
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                                    Contact Information
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Get in touch to schedule your car wash or window film installation. 
                                    We're here to answer any questions about our services.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-start gap-6 bg-gradient-to-br from-violet-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-violet-100"
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <info.icon className="text-white" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900 mb-1">
                                                {info.title}
                                            </h3>
                                            <p className="text-slate-600">
                                                {info.content}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">
                                    Service Hours
                                </h3>
                                <div className="space-y-3 text-slate-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-semibold">8:00 AM - 7:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday - Sunday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between pt-2 border-t">
                                        <span className="font-medium">Drop-off Available</span>
                                        <span className="font-semibold text-violet-700">24/7</span>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                                <div className="text-center text-slate-600">
                                    <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                                    <p className="font-medium">Map Location</p>
                                </div>
                            </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Need Immediate Service?
                        </h2>
                        <p className="text-xl text-indigo-200 mb-8">
                            Call us now to book your appointment or ask about our services
                        </p>
                        <a
                            href="tel:+15557892886"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <Phone size={20} />
                            Call (555) 789-AUTO
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
