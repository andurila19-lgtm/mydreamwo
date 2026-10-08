import React from 'react';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  action?: React.ReactNode;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  action,
}: PageHeaderProps) {
  return (
    <section className="bg-primary text-on-primary pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 border-b border-[#005243]">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-2.5 sm:mb-3">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-label-md uppercase tracking-wider text-white/60">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-1.5 sm:gap-2">
                  {idx > 0 && <span className="text-white/30">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="hover:text-gold-shimmer transition-colors">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-gold-shimmer font-semibold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-3xl space-y-2">
            {eyebrow && (
              <span className="inline-block font-label-md text-gold-shimmer text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
                {eyebrow}
              </span>
            )}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-[1.28] tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="font-body text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-2xl pt-1">
                {description}
              </p>
            )}
          </div>

          {action && <div className="flex-shrink-0 pt-1 md:pt-0">{action}</div>}
        </div>
      </div>
    </section>
  );
}
