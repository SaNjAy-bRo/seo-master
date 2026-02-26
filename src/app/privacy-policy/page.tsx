import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | SEO Masterr",
    description: "Read the SEO Masterr Privacy Policy to understand how we collect, use, and protect your user information. We ensure full data transparency and security.",
    alternates: {
        canonical: "https://seomasterr.com/privacy-policy",
    }
};

export default function PrivacyPolicyPage() {
    return (
        <main>

            {/* Custom Header for Legal Pages */}
            <section style={{
                background: "linear-gradient(135deg, #111111 0%, #000000 100%)",
                padding: "10rem 1.5rem 6rem",
                textAlign: "center",
                color: "#fff"
            }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, marginBottom: "1rem", color: "#fff" }}>
                        Privacy Policy
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem" }}>
                        Last Updated: February 2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: "5rem 1.5rem", background: "#fff" }}>
                <div style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    color: "var(--color-body)",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem"
                }}>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Our Commitment to Your Privacy
                        </h2>
                        <p>
                            At SEO Masterr, your privacy is extremely important to us. This document outlines the types of information we collect when you visit our website, how we use it, and the measures we take to protect your data. By using our website, you are consenting to the practices described in this policy.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Information We Collect
                        </h2>
                        <p>
                            When you visit SEOMasterr.com, we may collect information to help us understand our audience and improve your experience.
                        </p>

                        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-heading)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Personal Information</h3>
                        <p>
                            We only collect personal information like your name and email address if you voluntarily provide it when you contact us directly.
                        </p>

                        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-heading)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Non-Personal Information</h3>
                        <p>
                            We automatically collect non-personal data about your visit, such as:
                        </p>
                        <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <li>Browser type and device type</li>
                            <li>IP address</li>
                            <li>Pages visited, date, and time of visit</li>
                        </ul>
                        <p style={{ marginTop: "1rem" }}>
                            This helps us improve the user experience and analyze website performance.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            How We Use Your Information
                        </h2>
                        <p>
                            The information collected is used exclusively to provide a better service:
                        </p>
                        <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <li>Respond to your inquiries and emails</li>
                            <li>Improve website content and functionality</li>
                            <li>Analyze traffic patterns and prevent spam</li>
                            <li>Communicate necessary updates</li>
                        </ul>
                        <p>
                            We do not sell, trade, or rent users’ personal information to third parties.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Cookies and Third-Party Services
                        </h2>
                        <p>
                            We use standard web technologies to optimize your experience:
                        </p>
                        <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <li><strong>Cookies:</strong> We use cookies to store visitor preferences and customize content based on your browser type. You can disable these through your individual browser options if you prefer.</li>
                            <li><strong>Third Parties:</strong> We may use services like Google Analytics and Google Search Console to understand site usage. These third parties have their own privacy policies governing data collection.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Affiliate Disclosure
                        </h2>
                        <p>
                            Please note that some pages contain affiliate links. If you purchase a product through these links, we may earn a small commission at no extra cost to you. We only recommend products we genuinely believe provide value.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Data Protection & Security
                        </h2>
                        <p>
                            We keep the non-personal data collected (like IP addresses and browsing logs) for a maximum of one year for analytics and security purposes.
                        </p>
                        <p style={{ marginTop: "1rem" }}>
                            We retain personal information (name and email provided via contact forms) only for as long as necessary to fulfill the purpose for which it was collected (e.g., responding to your inquiry or maintaining communication for an active business relationship). Once your data is no longer needed for its intended purpose, we securely delete or anonymize it.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Children’s Information
                        </h2>
                        <p>
                            We do not knowingly collect information from children under the age of 13. If you believe this has occurred, please contact us immediately so we can promptly remove the data.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Your Rights as a Data Principal (DPDP Act, 2023)
                        </h2>
                        <p>
                            Under the Indian Digital Personal Data Protection (DPDP) Act, you, as the 'Data Principal', have specific rights regarding your personal information:
                        </p>
                        <ul style={{ marginLeft: "1.5rem", marginTop: "0.5rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <li><strong>Right to Access:</strong> You have the right to confirm if your data is being processed and to request a summary of that data.</li>
                            <li><strong>Right to Correction & Erasure:</strong> You can request that inaccurate data be corrected or that your personal data be erased when no longer necessary for the original purpose.</li>
                            <li><strong>Right to Grievance Redressal:</strong> If you have a concern or complaint about our data practices, you have the right to a timely resolution.</li>
                            <li><strong>Right to Nominate:</strong> You may nominate another person to exercise these rights on your behalf in case of incapacity or death.</li>
                        </ul>
                        <p>
                            To exercise any of these rights, please contact us using the information provided below. We commit to responding to and resolving your grievance within 90 days as required by law.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Updates to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy periodically. Any changes will be posted here with an updated effective date.
                        </p>
                    </div>

                    <div style={{ background: "var(--color-bg-light)", padding: "2rem", borderRadius: "12px", border: "1px solid var(--color-border)" }}>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>
                            Contact Information
                        </h2>
                        <p style={{ marginBottom: "0.5rem" }}>
                            If you have any questions or concerns about this policy, please contact us at:
                        </p>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li><strong>Email:</strong> <a href="mailto:seomasterr.info@gmail.com" style={{ color: "var(--color-primary)" }}>seomasterr.info@gmail.com</a></li>
                            <li><strong>Location:</strong> India</li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    );
}
