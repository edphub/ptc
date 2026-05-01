import type { ReactNode } from 'react';

interface DrawerContentProps {
  children: ReactNode;
}

export function DrawerContent({ children }: DrawerContentProps) {
  return <div className="space-y-6">{children}</div>;
}
