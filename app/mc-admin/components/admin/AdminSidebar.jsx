"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Tag, FolderOpen, LogOut } from "lucide-react";

export default function AdminSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Blogs", icon: FileText, href: "/mc-admin/blogs" },
        { name: "Categories", icon: FolderOpen, href: "/mc-admin/categories" },
        { name: "Tags", icon: Tag, href: "/mc-admin/tags" },
    ];

    const handleLogout = () => {
        // Delete the cookie
        document.cookie = "mantis_admin=; path=/; max-age=0";
        window.location.href = "/mantis-login";
    };

    return (
        <aside className="w-64 bg-black/50 border-r border-white/10 min-h-screen p-6">
            <div className="lg:mb-10">
                <Link href="/mc-admin"><span className="text-color-one text-3xl ">Mantis Admin</span></Link>
            </div>

            <nav className="space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${isActive
                                ? "bg-[#f8db98]/20 text-[#f8db98] border border-[#f8db98]/30"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition mt-8 w-full"
            >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
            </button>
        </aside>
    );
}
