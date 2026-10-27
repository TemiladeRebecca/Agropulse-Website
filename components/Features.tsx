const existingFeatures = [
  {
    title: "Livestock Records and Management",
    description:
      "Organise livestock information and support more consistent farm record keeping. Built to help farmers maintain clear, accessible records over time.",
    status: "Existing / In Testing",
  },
  {
    title: "Veterinary Verification and Certification Records",
    description:
      "Support recording and managing veterinary verification or certification information, reflecting functionality actively being tested as part of the product's development.",
    status: "Existing / Under Testing",
  },
];

const plannedFeatures = [
  {
    title: "Farmer-to-Buyer Connections",
    description:
      "Develop ways to help farmers connect with retailers and other livestock buyers to build trusted relationships.",
    status: "Planned",
  },
  {
    title: "Expanded Digital Livestock Management",
    description:
      "Explore additional tools for improving livestock records and broader farm management needs.",
    status: "Planned",
  },
  {
    title: "Improved Traceability and Transparency",
    description:
      "Explore ways to make relevant livestock health and verification information easier to maintain and review across the value chain.",
    status: "Planned",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-md font-semibold uppercase tracking-wide text-primary">Features</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Practical tools for a more trusted value chain
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We distinguish between what&apos;s currently available/in testing and what&apos;s planned for the
            future.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Existing capabilities & active development</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              These reflect features present in the application or actively being tested.
            </p>
            <div className="mt-6 grid gap-4">
              {existingFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {feature.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground">Planned or developing capabilities</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Future-focused capabilities under exploration.
            </p>
            <div className="mt-6 grid gap-4">
              {plannedFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {feature.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
