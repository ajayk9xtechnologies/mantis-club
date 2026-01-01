"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getBaseUrl } from "../../lib/getBaseUrl";
import { MantisImage } from "../../common";

export default function BlogDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`${getBaseUrl()}/blog`);
                const data = await response.json();
                const foundBlog = data.blogs?.find(b => b._id === params.id);

                if (foundBlog) {
                    setBlog(foundBlog);
                } else {
                    router.push('/blogs');
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
                router.push('/blogs');
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchBlog();
        }
    }, [params.id, router]);

    if (loading) {
        return (
            <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center text-gray-400">
                    Loading blog...
                </div>
            </section>
        );
    }

    if (!blog) {
        return null;
    }

    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => router.push('/blogs')}
                    className="text-[#f8db98] hover:underline mb-8 flex items-center gap-2"
                >
                    ← Back to Blogs
                </button>

                {/* Blog Image */}
                <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
                    <Image
                        src={blog.thumbnail || MantisImage}
                        alt={blog.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Blog Meta */}
                <div className="mb-6">
                    <p className="text-sm text-[#f8db98] mb-2">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <span className="px-3 py-1 bg-[#f8db98]/20 text-[#f8db98] text-sm rounded">
                        {blog.category}
                    </span>
                </div>

                {/* Blog Title */}
                <h1 className="text-color-one mb-6">{blog.title}</h1>

                {/* Blog Description */}
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {blog.description}
                </p>

                {/* Blog Content */}
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-wrap paragraph_three">
                        {blog.content}
                    </p>
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h3 className="text-white mb-4">Tags:</h3>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/5 border border-white/10 text-white text-sm rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
