"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Image from "next/image";

interface Feature {
    title: string;
    description?: string;
}

interface ServiceFeaturesProps {
    label?: string;
    title: React.ReactNode;
    description: string;
    features: Feature[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

export default function ServiceFeatures({ label, title, description, features, imageSrc, imageAlt, reverse = false }: ServiceFeaturesProps) {
    const header = useScrollReveal();
    const imageReveal = useScrollReveal({ delay: 200, threshold: 0.1 });
    const listReveals = features.map((_, i) => useScrollReveal({ delay: 100 + i * 50 }));

    return (
        <section className="section" style={{ background: "var(--color-bg-white)", position: "relative" }}>
            <div className="section-inner">
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "4rem",
                    alignItems: "center",
                    flexDirection: reverse ? "row-reverse" : "row"
                }}>

                    {/* Text Content */}
                    <div style={{ flex: "1 1 500px" }}>
                        <div ref={header.ref} className={`reveal reveal-up ${header.isVisible ? "visible" : ""}`}>
                            {label && (
                                <span className="section-label">{label}</span>
                            )}
                            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                                {title}
                            </h2>
                            <p style={{ color: "var(--color-body)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                                {description}
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                {features.map((feature, i) => (
                                    <div
                                        key={i}
                                        ref={listReveals[i].ref as React.Ref<HTMLDivElement>}
                                        className={`reveal reveal-up ${listReveals[i].isVisible ? "visible" : ""}`}
                                        style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
                                    >
                                        <div style={{
                                            width: 28, height: 28, borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "var(--color-primary)",
                                            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px"
                                        }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: "1.1rem", color: "var(--color-heading)", lineHeight: 1.5, fontWeight: 700, display: "block" }}>
                                                {feature.title}
                                            </span>
                                            {feature.description && (
                                                <span style={{ fontSize: "0.95rem", color: "var(--color-body)", lineHeight: 1.5, display: "block", marginTop: "0.25rem" }}>
                                                    {feature.description}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Graphic / Image */}
                    <div
                        ref={imageReveal.ref}
                        className={`reveal ${reverse ? "reveal-right" : "reveal-left"} ${imageReveal.isVisible ? "visible" : ""}`}
                        style={{ flex: "1 1 500px", position: "relative" }}
                    >
                        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)" }}>
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, #F97316 0%, #EA580C 100%)", opacity: 0.1, zIndex: 1 }} />
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                style={{ objectFit: "cover", objectPosition: "center" }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
