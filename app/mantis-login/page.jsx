"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MantisLogin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Store auth token/session in cookie (expires in 7 days)
                document.cookie = "mantis_admin=true; path=/; max-age=" + (7 * 24 * 60 * 60);
                router.push("/mc-admin");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-20">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-color-one mb-2">Mantis</h1>
                    <h3 className="text-white">Admin Login</h3>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    {error && (
                        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                            Email
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-[#f8db98]">
                            Password
                        </label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#f8db98] transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="animated-button px-10"
                    >
                        <div className="animated-inner">
                            <span>{loading ? "Logging in..." : "Login"}</span>
                            <span aria-hidden="true"></span>
                        </div>
                    </button>
                </form>
            </div>
        </section>
    );
}
