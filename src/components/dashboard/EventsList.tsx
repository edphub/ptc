interface EventItem {
  id: string;
  title: string;
  date: string;
  tag: string;
  description: string;
}

interface EventsListProps {
  events: EventItem[];
}

export function EventsList({ events }: EventsListProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Events & Announcements</p>
          <p className="text-sm text-slate-500">Upcoming school activity highlights</p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
          {events.length}
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {events.map((event) => (
          <div key={event.id} className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-100">{event.title}</p>
                <p className="mt-2 text-sm text-slate-400">{event.description}</p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                {event.tag}
              </span>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-500">{new Date(event.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
