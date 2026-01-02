import SectionTitle from "../SectionTitle";
import { MantisImage } from "../../common";
import GsapReveal from "../GsapRevealImage";
import SafeLink from "../SafeLink";
import Breadcrumbs from "../Breadcrumbs";
import connectToDatabase from "../../lib/db";
import Blogs from "../../../models/blogs";

async function getBlogs() {
    try {
        await connectToDatabase();
        // Plain objects are required for Server Components if passing to Client Components or for general stability
        const blogs = await Blogs.find().sort({ createdAt: -1 }).lean();
        return JSON.parse(JSON.stringify(blogs));
    } catch (error) {
        console.error("Error fetching blogs from DB:", error);
        return [];
    }
}

export default async function HomeBlogSection({ isBlogPage = false }) {
    const allBlogs = await getBlogs();
    const blogs = isBlogPage ? allBlogs : allBlogs.slice(0, 3);

    if (blogs.length === 0) return null;

    return (
        <section className={`bg-black text-white px-6 md:px-12 ${isBlogPage ? 'pt-32 pb-10 min-h-screen' : 'py-10'}`}>

            {isBlogPage && <Breadcrumbs />}
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 text-center">
                    <SectionTitle
                        title="Our"
                        subtitle={isBlogPage ? "Blogs" : "Stories"}
                        description={isBlogPage ? "Latest news, updates and stories from Mantis Dubai." : "Dive into the world of Mantis Dubai. Discover the latest news, events, and stories from the heart of the nightlife."}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition duration-300 cursor-pointer group"
                        >
                            <div className="relative h-48 bg-gray-800 overflow-hidden">

                                <GsapReveal
                                    src={blog.thumbnail || MantisImage}
                                    alt={blog.title}
                                    animation="fade-in"
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
                                <SafeLink href={`/blogs/${blog.slug}`} className="text-[#f8db98] text-sm font-semibold hover:underline inline-block">
                                    Read More &rarr;
                                </SafeLink>

                            </div>
                        </div>
                    ))}
                </div>

                {!isBlogPage && (
                    <div className="mt-12 text-center">

                        <SafeLink href="/blogs" className="inline-block px-8 py-3 border border-[#f8db98] text-[#f8db98] rounded-full hover:bg-[#f8db98] hover:text-black transition duration-300 font-bold">
                            VIEW ALL STORIES
                        </SafeLink>
                    </div>
                )}
            </div>
        </section>
    );
}
