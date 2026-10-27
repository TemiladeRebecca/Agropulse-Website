export default function Hero() {
  return (
    <section id="home" className="section-padding pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-1 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            Agricultural Technology • Livestock Management
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Building a Safer, Smarter Future for Livestock Farming.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Agropulse360 is building a more connected approach to livestock management — helping farmers
            organise animal records, support responsible veterinary care, and build trusted relationships
            with livestock buyers.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Discover Our Solution
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Partner With Us
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cattle grazing on a green pasture representing livestock farming"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <p className="text-sm font-medium">Connected livestock management</p>
              <p className="text-xs text-white/80">Records • Veterinary support • Trusted connections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
