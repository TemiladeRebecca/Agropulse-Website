"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.interest.trim()) newErrors.interest = "Area of interest is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // No backend configured - do not send; show clear state
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Partnership &amp; Grant Call to Action</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Help Us Build a More Trusted Livestock Value Chain.
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                We are working towards a future where livestock management is better documented,
                veterinary guidance is easier to incorporate into everyday decisions, and farmers and
                buyers can build relationships based on greater trust.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-muted p-6">
                <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  This form is currently not connected to a submission service. To enable real
                  submissions, configure an email service, form backend, or API endpoint. No
                  credentials are stored client-side.
                </p>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-border bg-muted p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground">Message ready to send</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your message has been validated. Since no submission service is configured, please
                    share these details via your preferred verified contact method once configured.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="organisation" className="text-sm font-medium text-foreground">
                      Organisation (optional)
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      value={formData.organisation}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="text-sm font-medium text-foreground">
                      Area of interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <option value="">Select an option</option>
                      <option value="grant">Grant / Funding</option>
                      <option value="partnership">Partnership</option>
                      <option value="veterinary">Veterinary Collaboration</option>
                      <option value="buyer">Livestock Buyer / Retailer</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.interest && <p className="mt-1 text-xs text-red-600">{errors.interest}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Discuss a Partnership
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
