"use client";
import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function TermsPage() {
    return (
        <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <SectionTitle
                    title="Terms &"
                    subtitle="Conditions"
                    description="Please read these terms and conditions carefully."
                    align="start"
                />

                <div className="mt-12 space-y-8 text-gray-300 leading-relaxed paragraph_three">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">1. Introduction</h3>
                        <p>
                            Welcome to Mantis Dubai. By accessing our website and using our
                            services, you agree to comply with and be bound by the following
                            terms and conditions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">2. Reservations</h3>
                        <p>
                            Table reservations are subject to availability and confirmation. We
                            reserve the right to cancel or modify reservations at our discretion.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">3. Code of Conduct</h3>
                        <p>
                            Guests are expected to behave in a respectful manner. Mantis Dubai
                            maintains a strict dress code and reserves the right to refuse entry.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">4. Privacy</h3>
                        <p>
                            Your use of our website is also governed by our Privacy Policy.
                            Please review our Privacy Policy to understand our practices.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">5. Modifications</h3>
                        <p>
                            We reserve the right to change these terms at any time. Continued
                            use of the site signifies your acceptance of any adjustments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
