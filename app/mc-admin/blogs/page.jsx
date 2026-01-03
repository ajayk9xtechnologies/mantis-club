"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../components/admin/AdminSidebar";
import { Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { getBaseUrl } from "../../lib/getBaseUrl";
export default function BlogsPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        content: "",
        category: "",
        tags: [],
        thumbnail: "",
    });

    useEffect(() => {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        };

        const auth = getCookie("mantis_admin");
        if (!auth) {
            router.push("/mantis-login");
        } else {
            setIsAuthenticated(true);
            fetchData();
        }
    }, [router]);

    const fetchData = async () => {
        try {
            const [blogsRes, categoriesRes, tagsRes] = await Promise.all([
                fetch(`${getBaseUrl()}/blog`),
                fetch(`${getBaseUrl()}/category`),
                fetch(`${getBaseUrl()}/tag`),
            ]);

            const blogsData = await blogsRes.json();
            const categoriesData = await categoriesRes.json();
            const tagsData = await tagsRes.json();

            setBlogs(blogsData.blogs || []);
            setCategories(categoriesData.categories || []);
            setTags(tagsData.tags || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = editingBlog
                ? { ...formData, _id: editingBlog._id }
                : formData;

            const response = await fetch(`${getBaseUrl()}/blog`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setShowModal(false);
                setFormData({
                    title: "",
                    slug: "",
                    description: "",
                    content: "",
                    category: "",
                    tags: [],
                    thumbnail: "",
                });
                setEditingBlog(null);
                fetchData();
            }
        } catch (error) {
            console.error("Error saving blog:", error);
        }
    };

    const handleDelete = async (id) => {

        try {
            const response = await fetch(`${getBaseUrl()}/blog?id=${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                fetchData();
            }
        } catch (error) {
            console.error("Error saving blog:", error);
        }
    };

    const handleEdit = (blog) => {
        setEditingBlog(blog);
        setFormData({
            title: blog.title,
            slug: blog.slug || blog.title.replace(/\s+/g, '-').toLowerCase(),
            description: blog.description,
            content: blog.content,
            category: blog.category,
            tags: blog.tags || [],
            thumbnail: blog.thumbnail || "",
        });

        setShowModal(true);

    };

    const handleTagToggle = (tagName) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.includes(tagName)
                ? prev.tags.filter(t => t !== tagName)
                : [...prev.tags, tagName]
        }));
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-black text-white">
            <AdminSidebar />

            <main className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-color-one">Blogs</h1>
                        <button
                            onClick={() => setShowModal(true)}
                            className="animated-button flex items-center gap-2"
                        >
                            <div className="animated-inner">
                                <span className="flex items-center gap-2">
                                    <Plus size={20} />
                                    Add Blog
                                </span>
                                <span aria-hidden="true"></span>
                            </div>
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center text-gray-400">Loading blogs...</div>
                    ) : (
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-[#f8db98]">Title</th>
                                        <th className="px-6 py-4 text-left text-[#f8db98]">Category</th>
                                        <th className="px-6 py-4 text-left text-[#f8db98]">Tags</th>
                                        <th className="px-6 py-4 text-left text-[#f8db98]">Created At</th>
                                        <th className="px-6 py-4 text-right text-[#f8db98]">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-8 text-center text-gray-400">
                                                No blogs yet. Create your first one!
                                            </td>
                                        </tr>
                                    ) : (
                                        blogs.map((blog) => (
                                            <tr key={blog._id} className="border-b border-white/5 hover:bg-white/5">
                                                <td className="px-6 py-4">{blog.title}</td>
                                                <td className="px-6 py-4 text-gray-400">{blog.category}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-wrap gap-1">
                                                        {blog.tags?.map((tag, idx) => (
                                                            <span key={idx} className="px-2 py-1 bg-[#f8db98]/20 text-[#f8db98] text-xs rounded">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-gray-400">
                                                    {new Date(blog.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button
                                                        onClick={() => handleEdit(blog)}
                                                        className="text-blue-400 hover:text-blue-300 mr-4"
                                                    >
                                                        <Edit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(blog._id)}
                                                        className="text-red-400 hover:text-red-300"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/80 flex items-start justify-center z-50 p-4 overflow-y-scroll top-0">
                    <div className="bg-black border border-white/20 rounded-2xl p-8 max-w-2xl w-full "  >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => {
                                        const title = e.target.value;
                                        const slug = title
                                            .toLowerCase()
                                            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
                                            .trim()
                                            .replace(/\s+/g, '-') // Replace spaces with hyphens
                                            .replace(/-+/g, '-'); // Remove consecutive hyphens
                                        setFormData({ ...formData, title, slug });
                                    }}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                                    required
                                />
                                <label className="block text-sm font-semibold mt-2 mb-2 text-[#f8db98]">
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                                    rows="3"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                                    Content
                                </label>
                                <textarea
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                                    rows="6"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                                    Category (Select One)
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                                    required
                                >
                                    <option value="">Select a category...</option>
                                    {categories.map((cat) => (
                                        <option key={cat._id} value={cat.name}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                                    Tags (Select Multiple)
                                </label>
                                <div>
                                    {tags.length === 0 && (
                                        <div className="text-gray-400 mb-2">No tags available. <Link className="text-[#0060d1] mb-2" href="/mc-admin/tags">Add tags here</Link></div>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-3 p-4 bg-black/50 border border-white/20 rounded-lg">
                                    {tags.map((tag) => (
                                        <label key={tag._id} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.tags.includes(tag.name)}
                                                onChange={() => handleTagToggle(tag.name)}
                                                className="w-4 h-4 accent-[#f8db98]"
                                            />
                                            <span className="text-white">{tag.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                                    Thumbnail URL (Optional)
                                </label>
                                <input
                                    type="text"
                                    value={formData.thumbnail}
                                    onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditingBlog(null);
                                        setFormData({
                                            title: "",
                                            description: "",
                                            content: "",
                                            category: "",
                                            tags: [],
                                            thumbnail: "",
                                        });
                                    }}
                                    className="flex-1 px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 animated-button"
                                >
                                    <div className="animated-inner">
                                        <span>{editingBlog ? "Update" : "Create"}</span>
                                        <span aria-hidden="true"></span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
