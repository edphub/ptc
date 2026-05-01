import { MessageItem } from '@/lib/mock-data';
import { MessageCircle } from 'lucide-react';

interface MessageDrawerProps {
  message: MessageItem;
}

export function MessageDrawer({ message }: MessageDrawerProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-3xl bg-slate-950 p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-slate-100">
          <MessageCircle size={24} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Message from</p>
          <p className="text-xl font-semibold text-slate-100">{message.from}</p>
          <p className="text-sm text-slate-400">{message.class}</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-sm font-semibold text-slate-100">Preview</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{message.preview}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Received</p>
          <p className="mt-2 text-sm text-slate-100">
            {new Date(message.timestamp).toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
            })}
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Status</p>
          <p className="mt-2 text-sm text-slate-100">{message.read ? 'Read' : 'Unread'}</p>
        </div>
      </div>
    </div>
  );
}
