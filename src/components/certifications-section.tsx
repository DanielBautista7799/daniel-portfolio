import { ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function CertificationsSection() {
if (certifications.length === 0) {
return null;
}

return (
<section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="Certifications"
    title="Recent technical learning"
    description="Additional certifications focused on software engineering, AI, machine learning, and professional technical skills."
    />

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {certifications.map((certification) => (
        <Card key={certification.name} className="flex h-full flex-col">
        <div className="flex-1">
            <h3 className="text-lg font-bold">{certification.name}</h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {certification.issuer}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
            {certification.date}
            </p>
        </div>

        {certification.credentialUrl ? (
            <div className="mt-6">
            <ButtonLink
                href={certification.credentialUrl}
                variant="outline"
                external
            >
                View Credential
                <ExternalLink className="ml-2" size={15} />
            </ButtonLink>
            </div>
        ) : null}
        </Card>
    ))}
    </div>
</section>
);
}