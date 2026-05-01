'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function AppDrawer({ open, onClose, title, children, footer }: AppDrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
      <div
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative h-full w-full max-w-md bg-slate-950 border-l border-slate-800 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-slate-800 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Details</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-900 hover:text-slate-100 transition-colors"
            aria-label="Close drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">{children}</div>

        {footer ? <div className="border-t border-slate-800 p-5">{footer}</div> : null}
      </div>
    </div>
  );
}
