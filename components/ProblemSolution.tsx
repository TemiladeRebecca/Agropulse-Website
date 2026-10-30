export default function ProblemSolution() {
  const problems = [ 
  "Inadequate or fragmented livestock records",
  "Limited access to appropriate veterinary guidance",
  "Difficulty maintaining reliable animal health and medication histories",
  "Inappropriate antibiotic use and inadequate withdrawal-period management, increasing the risk of antibiotic residues in meat and other animal products",
  "Antimicrobial resistance associated with inappropriate antimicrobial use in livestock, posing risks to animal and human health",
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
                A connected approach to responsible livestock management
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Agropulse360 brings together digital livestock records, veterinary collaboration, responsible medication management, and farmer-to-buyer connections in one platform. By improving how livestock health information is recorded, managed, and shared, we aim to promote more responsible farming practices, strengthen traceability, and build greater trust across Nigeria&apos;s livestock value chain.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                  {
                  title: "Centralised livestock records",
                  description:
                  "Provide farmers with a digital platform to organise livestock information, maintain individual animal records, and improve the consistency of farm record keeping.",
                  },
                  {
                  title: "Stronger farmer–veterinarian collaboration",
                  description:
                  "Promote access to appropriate veterinary guidance and strengthen collaboration between farmers and qualified veterinary professionals in managing livestock health.",
                  },
                  {
                  title: "Animal health and medication tracking",
                  description:
                  "Maintain documented animal health histories, treatment records, and medication information to support informed livestock management and continuity of care.",
                  },
                  {
                  title: "Responsible antibiotic use and withdrawal-period tracking",
                  description:
                  "Support responsible medication practices by documenting antibiotic administration and relevant withdrawal periods, helping farmers and veterinary professionals monitor compliance before animals or animal products enter the food supply.",
                  },
                  {
                  title: "Support for antimicrobial stewardship",
                  description:
                  "Encourage veterinary-guided antimicrobial use and better medication documentation to help address inappropriate antibiotic use and contribute to efforts to combat antimicrobial resistance.",
                  },
                  {
                  title: "Farmer-to-buyer connections",
                  description:
                  "Connect livestock farmers with retailers and potential buyers, creating opportunities for more transparent sourcing and stronger commercial relationships.",
                  },
                  {
                  title: "Veterinary verification and traceability",
                  description:
                  "Maintain relevant veterinary inspection and verification records to help buyers access reliable livestock information and make more informed sourcing decisions.",
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
