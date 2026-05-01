import { EventItem } from '@/lib/mock-data';
import { CalendarDays } from 'lucide-react';

interface EventDrawerProps {
  eventItem: EventItem;
}

export function EventDrawer({ eventItem }: EventDrawerProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-3xl bg-slate-950 p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-slate-100">
          <CalendarDays size={24} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Event details</p>
          <p className="text-xl font-semibold text-slate-100">{eventItem.title}</p>
          <p className="text-sm text-slate-400">{eventItem.tag}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Date</p>
          <p className="mt-2 text-sm text-slate-100">
            {new Date(eventItem.date).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Type</p>
          <p className="mt-2 text-sm text-slate-100">{eventItem.type}</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-sm font-semibold text-slate-100">Description</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{eventItem.description}</p>
      </div>
    </div>
  );
}
