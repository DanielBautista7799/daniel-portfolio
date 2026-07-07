import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

export function ContactSection() {
return (
<section id="contact" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="Contact"
    title="Let's connect"
    description="I'm currently looking for software engineering opportunities where I can build useful products and keep growing technically."
    />

    <Card className="mx-auto max-w-2xl text-center">
    <p className="text-zinc-600 dark:text-zinc-400">
        The best way to reach me is by email.
    </p>

    <div className="mt-6 flex justify-center">
        <ButtonLink href={`mailto:${profile.email}`}>
        Email Me
        <Mail className="ml-2" size={16} />
        </ButtonLink>
    </div>
    </Card>
</section>
);
}