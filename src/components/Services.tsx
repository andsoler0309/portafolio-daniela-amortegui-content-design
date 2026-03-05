import { services } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="min-h-screen bg-bg-primary flex flex-col justify-center py-20 md:py-28"
    >
      <div className="container-main flex flex-col h-full gap-12 md:gap-16">
        <SectionHeader label="Lo que hago" count={services.length} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-1">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone/20 hover:border-sage/40 bg-bg-card transition-all duration-500 hover:shadow-xl hover:shadow-sage/5 overflow-hidden"
              style={{ padding: "2.5rem 3rem 3rem 3rem" }}
            >
              {/* subtle background number watermark */}
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -right-2 text-[9rem] md:text-[11rem] font-[family-name:var(--font-display)] font-light leading-none text-fg-primary/[0.03] select-none pointer-events-none transition-all duration-500 group-hover:text-terracotta/10"
              >
                {service.number}
              </span>

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-terracotta font-[family-name:var(--font-display)] text-4xl md:text-5xl font-light opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    {service.number}
                  </span>
                  
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium mb-4 group-hover:text-terracotta transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>
                <p className="text-fg-secondary text-sm md:text-base leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
