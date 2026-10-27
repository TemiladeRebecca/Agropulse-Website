export default function Impact() {
  const impacts = [
    "Better livestock record keeping",
    "Greater support for responsible veterinary care",
    "Improved access to relevant animal health information",
    "Stronger trust between farmers, veterinarians, and buyers",
    "Potential contribution to livestock traceability and food safety",
    "Opportunities to improve digital inclusion and agricultural productivity",
  ];

  return (
    <section id="impact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-md font-semibold uppercase tracking-wide text-primary">Why Agropulse360 Matters</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Enabling more informed, responsible livestock management
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The intended impact is qualitative — better documentation, stronger collaboration, and
              greater trust across the livestock value chain. We focus on practical improvements, not
              unverified statistics.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {impacts.map((impact) => (
              <div key={impact} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                <p className="text-sm text-foreground/90">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
