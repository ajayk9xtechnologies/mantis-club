'use client';
import { usePathname } from 'next/navigation';
import SafeLink from './SafeLink';

export default function Breadcrumbs({ customItems }) {
    const pathname = usePathname();

    // If custom items are provided, use them
    if (customItems) {
        return (
            <div className="flex py-2 text-sm">
                {customItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                        {item.href ? (
                            <SafeLink href={item.href} className="hover:text-[#f8db98] transition-colors">
                                {item.label}
                            </SafeLink>
                        ) : (
                            <span className="text-gray-500">{item.label}</span>
                        )}
                        {index < customItems.length - 1 && <span className="mx-2">/</span>}
                    </div>
                ))}
            </div>
        );
    }

    // Auto-generate breadcrumbs from pathname
    const pathSegments = pathname.split('/').filter(Boolean);

    // Always start with Home
    const breadcrumbs = [{ label: 'Home', href: '/' }];

    // Build breadcrumbs from path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;

        // Format the label (capitalize and replace hyphens with spaces)
        const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Last segment should not be a link
        breadcrumbs.push({
            label,
            href: index === pathSegments.length - 1 ? null : currentPath
        });
    });

    return (
        <div className="flex py-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                    {crumb.href ? (
                        <SafeLink href={crumb.href} className="hover:text-[#f8db98] transition-colors">
                            {crumb.label}
                        </SafeLink>
                    ) : (
                        <span className="text-gray-500">{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                </div>
            ))}
        </div>
    );
}
