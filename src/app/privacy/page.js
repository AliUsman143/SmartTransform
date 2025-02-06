import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Privacy = () => {
    return (
        <>
            <Navbar />
            <div>
                <section className="bg-gray-800 text-white py-10 mt-14">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
                    </div>
                </section>

                {/* Main Content */}
                <section className="bg-white py-4">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-100 bg-slate-100 shadow-lg mt-5">
                        <div className="p-4">
                            {/* Objective and Scope */}
                            <h2 className="text-2xl font-bold mb-4">1. Objective and Scope</h2>
                            <p className="mb-4">
                                We at [Company], Inc. (“Company,” “we,” “our,” “us”) value your privacy and are committed
                                to protecting it. This privacy policy outlines how we collect, use, and share information
                                about our website and services.
                            </p>
                            <p className="mb-4">
                                Our aim is to only gather and use information that is essential to provide the products
                                or services you request. Any additional information collected is done with your consent
                                for specific purposes.
                            </p>

                            {/* Acceptance of Terms */}
                            <h2 className="text-2xl font-bold mb-4">2. Acceptance of Terms</h2>
                            <p className="mb-4">
                                By using our website, you acknowledge and agree to the terms outlined in this privacy
                                policy. If you do not agree, please refrain from using our website.
                            </p>

                            {/* Collection of Information */}
                            <h2 className="text-2xl font-bold mb-4">3. Collection of Information</h2>
                            <p className="mb-4">
                                We collect the following types of information:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Personal information: Email address, phone number, and other details that identify you.</li>
                                <li>Non-personal information: IP address, browsing behavior, and other technical data.</li>
                            </ul>
                            <p className="mb-4">
                                This information helps us enhance your experience and improve our services.
                            </p>

                            {/* Use of Personal Information */}
                            <h2 className="text-2xl font-bold mb-4">4. Use of Personal Information</h2>
                            <p className="mb-4">
                                We use personal information to deliver services, respond to inquiries, and improve your
                                experience. Non-personal information helps us analyze website usage and optimize our platform.
                            </p>

                            {/* Disclosure of Information */}
                            <h2 className="text-2xl font-bold mb-4">5. Disclosure of Information</h2>
                            <p className="mb-4">
                                Your information is only shared with third parties when necessary to provide services
                                or as required by law. We never sell your personal data.
                            </p>

                            {/* External Parties */}
                            <h2 className="text-2xl font-bold mb-4">6. External Parties and Websites</h2>
                            <p className="mb-4">
                                Our website may contain links to external sites. We are not responsible for the privacy
                                practices or content of these third-party sites.
                            </p>

                            {/* Security */}
                            <h2 className="text-2xl font-bold mb-4">7. Security</h2>
                            <p className="mb-4">
                                We implement robust security measures to protect your data. However, no method of
                                transmission or storage is completely secure, and we cannot guarantee absolute protection.
                            </p>

                            {/* Retention */}
                            <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
                            <p className="mb-4">
                                We retain your information only as long as necessary to fulfill the purposes outlined
                                in this policy or comply with legal obligations.
                            </p>

                            {/* Amendments */}
                            <h2 className="text-2xl font-bold mb-4">9. Policy Amendments</h2>
                            <p className="mb-4">
                                We may update this policy from time to time. Any changes will be posted on this page,
                                and your continued use of our website signifies your acceptance of the updated terms.
                            </p>

                            {/* Access and Accuracy */}
                            <h2 className="text-2xl font-bold mb-4">10. Access and Accuracy</h2>
                            <p className="mb-4">
                                You have the right to access and correct your personal information. Contact us for
                                any updates or concerns regarding your data.
                            </p>

                            {/* Additional Privacy Protection */}
                            <h2 className="text-2xl font-bold mb-4">11. Additional Privacy Protection</h2>
                            <p className="mb-4">
                                We provide additional protections for children under 13 and ensure compliance with
                                applicable privacy regulations.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;
