import { ReactNode } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
    return <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>{children}</div>
}