const steps = [
  {
    number: "01",
    title: "Record",
    description:
      "Farmers maintain organised records about their livestock, creating a clearer picture of their animals over time.",
  },
  {
    number: "02",
    title: "Manage",
    description:
      "Relevant livestock health and management information is maintained, supporting more consistent and informed decision making.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Veterinary professionals support appropriate verification and documentation where applicable, with veterinary verification being actively tested.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "As the platform evolves, farmers will be able to connect with potential buyers and fellow farmers, building a community where they can share knowledge, exchange experiences, and explore new market opportunities. These capabilities are being developed and are not yet broadly available."
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-md font-semibold uppercase tracking-wide text-primary">How It Works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A practical journey from records to trusted connections
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Actual workflows may vary as features are in testing; some steps are planned for future
            releases.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <span className="text-4xl font-semibold text-primary/20">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
