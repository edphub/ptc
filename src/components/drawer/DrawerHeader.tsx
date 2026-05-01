import type { ReactNode } from 'react';

interface DrawerHeaderProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export function DrawerHeader({ icon, title, subtitle }: DrawerHeaderProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-blue-400">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-100 truncate">{title}</p>
        <p className="mt-1 text-sm text-slate-400 truncate">{subtitle}</p>
      </div>
    </div>
  );
}
