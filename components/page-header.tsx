interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader({
  className,
  children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`max-w-5xl mx-auto ${className || ""}`}>
      <div className="text-center">
        <div className="relative flex items-center justify-center gap-4 mb-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,var(--color-teal-300),transparent)1] dark:before:[border-image:linear-gradient(to_left,--theme(--color-teal-300/.16),transparent)1] before:shadow-xs before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,var(--color-teal-300),transparent)1] dark:after:[border-image:linear-gradient(to_right,--theme(--color-teal-300/.16),transparent)1] after:shadow-xs after:shadow-white/20 dark:after:shadow-none">
          <div className="relative text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,--theme(--color-teal-400/.12)_33%,--theme(--color-pink-400/.12)_66%,--theme(--color-amber-200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,--theme(--color-teal-400/.16),--theme(--color-teal-600/.16)_50%,transparent_100%)] shadow-sm">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 bg-teal-500/15 dark:bg-gray-800/65 rounded-xs -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,--theme(--color-teal-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-teal-500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,--theme(--color-teal-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-teal-500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            />
            <span className="relative text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-teal-500 dark:to-teal-50">
              {children}
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-inter-tight text-5xl md:text-6xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-teal-200 dark:to-gray-200 pb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
