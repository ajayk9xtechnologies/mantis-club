'use client';
import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { getBaseUrl } from "../lib/getBaseUrl";
import { MantisImage } from "../common";

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${getBaseUrl()}/blog`);
                const data = await response.json();
                setBlogs(data.blogs || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="Our"
                    subtitle="Blogs"
                    description="Latest news, updates and stories from Mantis Dubai."
                />

                {loading ? (
                    <div className="text-center text-gray-400 mt-12">Loading blogs...</div>
                ) : blogs.length === 0 ? (
                    <div className="text-center text-gray-400 mt-12">
                        No blogs available yet. Check back soon!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition duration-300 cursor-pointer group"
                            >
                                <div className="relative h-48 bg-gray-800 overflow-hidden">
                                    <Image
                                        src={blog.thumbnail || MantisImage}
                                        alt={blog.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-[#f8db98] mb-2">
                                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </p>
                                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {blog.description}
                                    </p>
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {blog.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-[#f8db98]/20 text-[#f8db98] text-xs rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <Link
                                        href={`/blogs/${blog._id}`}
                                        className="text-[#f8db98] text-sm font-semibold hover:underline inline-block"
                                    >
                                        Read More &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
