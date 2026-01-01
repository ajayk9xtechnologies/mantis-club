"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "./components/admin/AdminSidebar";

export default function AdminPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Helper function to get cookie value
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
        }
    }, [router]);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-black text-white ">
            <AdminSidebar />

            <main className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-color-one mb-8">Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-[#f8db98] mb-2">Total Blogs</h3>
                            <p className="text-4xl font-bold">0</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-[#f8db98] mb-2">Categories</h3>
                            <p className="text-4xl font-bold">0</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-[#f8db98] mb-2">Tags</h3>
                            <p className="text-4xl font-bold">0</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
                        <h3 className="text-white mb-4">Welcome to Mantis Admin</h3>
                        <p className="text-gray-400 paragraph_three">
                            Use the sidebar to manage your blogs, categories, and tags.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}