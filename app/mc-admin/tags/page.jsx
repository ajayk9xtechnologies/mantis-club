"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../components/admin/AdminSidebar";
import { Plus, Edit, Trash2 } from "lucide-react";
import {getBaseUrl} from "../../lib/getBaseUrl";

export default function TagsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTag, setEditingTag] = useState(null);
  const [formData, setFormData] = useState({ name: "" });
   
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    const auth = getCookie("mantis_admin");
    if (!auth) {
      router.push("/mantis-login");
    } else {
      setIsAuthenticated(true);
      fetchTags();
    }
  }, [router]);

  const fetchTags = async () => {
    try {
      const response = await fetch(`${getBaseUrl()}/tag`);
      const data = await response.json();
      console.log("Fetched tags:", data);
      setTags(data.tags || []);
    } catch (error) {
      console.error("Error fetching tags:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${getBaseUrl()}/tag`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(false);
        setFormData({ name: "" });
        setEditingTag(null);
        fetchTags();
      }
    } catch (error) {
      console.error("Error saving tag:", error);
    }
  };

  const handleEdit = (tag) => {
    setEditingTag(tag);
    setFormData({ name: tag.name });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
     try {
      const response = await fetch(`${getBaseUrl()}/tag?id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setShowModal(false);
        setFormData({ name: "" });
        setEditingTag(null);
        fetchTags();
      }
    } catch (error) {
      console.error("Error saving tag:", error);
    }
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
            <h1 className="text-color-one">Tags</h1>
            <button
              onClick={() => setShowModal(true)}
              className="animated-button flex items-center gap-2"
            >
              <div className="animated-inner">
                <span className="flex items-center gap-2">
                  <Plus size={20} />
                  Add Tag
                </span>
                <span aria-hidden="true"></span>
              </div>
            </button>
          </div>

          {loading ? (
            <div className="text-center text-gray-400">Loading tags...</div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-[#f8db98]">Name</th>
                    <th className="px-6 py-4 text-left text-[#f8db98]">
                      Created At
                    </th>
                    <th className="px-6 py-4 text-right text-[#f8db98]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tags.length === 0 ? (
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-8 text-center text-gray-400"
                      >
                        No tags yet. Create your first one!
                      </td>
                    </tr>
                  ) : (
                    tags.map((tag) => (
                      <tr
                        key={tag._id}
                        className="border-b border-white/5 hover:bg-white/5"
                      >
                        <td className="px-6 py-4">{tag.name}</td>
                        <td className="px-6 py-4 text-gray-400">
                          {new Date(tag.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleEdit(tag)}
                            className="text-blue-400 hover:text-blue-300 mr-4"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(tag._id)}
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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-white/20 rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-[#f8db98] text-2xl mb-6">
              {editingTag ? "Edit Tag" : "Add Tag"}
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                  Tag Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingTag(null);
                    setFormData({ name: "" });
                  }}
                  className="flex-1 px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
                >
                  Cancel
                </button>
                <button type="submit" className="flex-1 animated-button">
                  <div className="animated-inner">
                    <span>{editingTag ? "Update" : "Create"}</span>
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
