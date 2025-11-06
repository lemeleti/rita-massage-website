import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  title,
  className = '',
  children,
}: SectionProps) {
  return (
    <section className={`flex w-full flex-col pt-20 pb-20 ${className}`}>
      <div className="mx-auto flex w-3/5 flex-col items-center justify-center text-center">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
