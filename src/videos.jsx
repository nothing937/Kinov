import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Clock } from 'lucide-react';

export default function Videos() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        {
            id: 1,
            title: 'Premium Car Wash Process',
            description: 'Watch our meticulous hand wash and detailing process from start to finish',
            thumbnail: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
            duration: '3:45',
            views: '125K'
        },
        {
            id: 2,
            title: 'Window Film Installation',
            description: 'Professional tinting installation on a luxury sedan - step by step',
            thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
            duration: '5:20',
            views: '89K'
        },
        {
            id: 3,
            title: 'Before & After Transformations',
            description: 'Amazing results from our car washing and detailing services',
            thumbnail: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
            duration: '4:15',
            views: '156K'
        },
        {
            id: 4,
            title: 'Window Film Benefits',
            description: 'Learn about UV protection, heat reduction, and privacy benefits of quality tinting',
            thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
            duration: '6:30',
            views: '203K'
        },
        {
            id: 5,
            title: 'Interior Deep Cleaning',
            description: 'Complete interior detailing service transforming a used vehicle',
            thumbnail: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
            duration: '8:12',
            views: '94K'
        },
        {
            id: 6,
            title: 'Customer Testimonials',
            description: 'Hear from our satisfied customers about their AutoCare Pro experience',
            thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            duration: '4:50',
            views: '112K'
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
                            Our Work in Action
                        </h1>
                        <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
                            Watch professional car washing and window film installation transformations
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Videos Grid */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="relative rounded-2xl overflow-hidden mb-4 bg-slate-900 aspect-video">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                    
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border-2 border-white/50">
                                            <Play className="text-white ml-1" size={28} fill="white" />
                                        </div>
                                    </div>
                                    
                                    {/* Video Info Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <Clock size={14} />
                                            <span>{video.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                            <Eye size={14} />
                                            <span>{video.views}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                                        {video.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {video.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Video Section */}
            <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-cyan-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-900 to-violet-700 bg-clip-text text-transparent">
                            Featured Video
                        </h2>
                        <p className="text-lg text-slate-600">
                            See our premium car wash service in action
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-500/20 bg-slate-900 aspect-video group cursor-pointer"
                        onClick={() => setSelectedVideo(videos[0])}
                    >
                        <img
                            src={videos[0].thumbnail}
                            alt={videos[0].title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border-4 border-white/50">
                                <Play className="text-white ml-2" size={40} fill="white" />
                            </div>
                        </div>
                        
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <h3 className="text-3xl font-bold mb-3">{videos[0].title}</h3>
                            <p className="text-lg text-indigo-200">{videos[0].description}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedVideo(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="aspect-video bg-slate-800 flex items-center justify-center">
                            <div className="text-center text-white">
                                <Play size={64} className="mx-auto mb-4 opacity-50" />
                                <p className="text-lg opacity-75">Video Player</p>
                                <p className="text-sm opacity-50 mt-2">
                                    Connect your video source to display content
                                </p>
                            </div>
                        </div>
                        <div className="p-8 text-white">
                            <h3 className="text-2xl font-bold mb-3">{selectedVideo.title}</h3>
                            <p className="text-indigo-200">{selectedVideo.description}</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
