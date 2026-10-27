export default function ProblemSolution() {
  const problems = [
    "Inadequate or fragmented livestock records",
    "Limited access to appropriate veterinary guidance",
    "Difficulty maintaining reliable animal health and medication histories",
    "Challenges connecting livestock farmers with trustworthy buyers",
    "Need for responsible medication use, traceability, and consumer confidence",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">The Problem</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Fragmented records make responsible livestock management harder
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Agropulse360 was conceived in response to concerns about livestock farmers administering
                antibiotics and other medications without adequate veterinary knowledge or guidance.
                These challenges call for better access to veterinary guidance, reliable records, and
                practical tools that support responsible livestock management.
              </p>
            </div>
            <ul className="grid gap-3">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  <span className="text-sm text-foreground/90">{problem}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              These are challenges the product aims to help address — not claims about every Nigerian
              farmer. The focus is on enabling safer, more informed decisions.
            </p>
          </div>

          <div id="solution" className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our Solution</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A connected approach to records, care, and trust
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Agropulse360 brings together organised livestock records, veterinary involvement, and
                better connections between farmers and buyers in one connected digital product.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  title: "Better livestock records",
                  description: "Keep livestock information organised and maintain consistent farm record keeping over time.",
                },
                {
                  title: "More informed, veterinary-supported care",
                  description: "Support animal health management with veterinary involvement and verifiable documentation where applicable.",
                },
                {
                  title: "Greater trust and transparency",
                  description: "Strengthen relationships across the value chain with clearer, more reliable information.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Agropulse360 does not independently diagnose diseases, prescribe medication, guarantee food
              safety, or certify livestock as safe for consumption. It is designed to support qualified
              veterinary professionals, not replace them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
