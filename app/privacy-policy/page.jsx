"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function PrivacyPolicyPage() {
    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    title="Privacy"
                    subtitle="Policy"
                    description="How we collect, use, and protect your data."
                    align="start"
                />

                <div className="mt-12 space-y-8 text-gray-300 leading-relaxed paragraph_three">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">1. Information We Collect</h3>
                        <p>
                            We collect information you provide directly to us, such as when you
                            make a reservation, sign up for our newsletter, or contact us for
                            support.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">2. How We Use Information</h3>
                        <p>
                            We use the information we collect to operate, maintain, and improve
                            our services, as well as to communicate with you about promotions
                            and events.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">3. Data Security</h3>
                        <p>
                            We implement reasonable security measures to protect your personal
                            information from unauthorized access and disclosure.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">4. Cookies</h3>
                        <p>
                            Our website uses cookies to enhance your browsing experience. You
                            can choose to disable cookies through your browser settings.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">5. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact
                            us at info@mantisdubai.com.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
