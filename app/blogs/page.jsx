"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function BlogsPage() {
    const blogs = [
        {
            id: 1,
            title: "The Ultimate Nightlife Experience in Dubai",
            excerpt: "Discover why Mantis Dubai is the top destination for nightlife lovers...",
            date: "Oct 12, 2025",
        },
        {
            id: 2,
            title: "Top 5 Cocktails You Must Try at Mantis",
            excerpt: "Our mixologists have crafted a unique menu. Here are the top picks...",
            date: "Nov 05, 2025",
        },
        {
            id: 3,
            title: "Celebrity Sightings at Mantis Club",
            excerpt: "From international DJs to movie stars, see who’s been partying with us...",
            date: "Dec 20, 2025",
        },
    ];

    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="Our"
                    subtitle="Blogs"
                    description="Latest news, updates and stories from Mantis Dubai."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300 cursor-pointer"
                        >
                            <div className="h-48 bg-gray-800 rounded-xl mb-6 animate-pulse">
                                {/* Placeholder for Blog Image */}
                            </div>
                            <p className="text-sm text-[#f8db98] mb-2">{blog.date}</p>
                            <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {blog.excerpt}
                            </p>
                            <button className="mt-6 text-[#f8db98] text-sm font-semibold hover:underline">
                                Read More &rarr;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
