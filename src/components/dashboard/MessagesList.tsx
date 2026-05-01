interface MessageItem {
  id: string;
  from: string;
  class: string;
  preview: string;
  timestamp: string;
  read: boolean;
}

interface MessagesListProps {
  messages: MessageItem[];
  onSelect?: (message: MessageItem) => void;
}

export function MessagesList({ messages, onSelect }: MessagesListProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Recent Messages</p>
          <p className="text-sm text-slate-500">Latest communication previews</p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
          {messages.length}
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {messages.map((message) => (
          <button
            key={message.id}
            type="button"
            onClick={() => onSelect?.(message)}
            className="w-full rounded-3xl border border-slate-800 bg-slate-950 p-4 text-left transition hover:border-slate-600"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sm font-semibold text-slate-100">
                  {message.from.split(' ').map((part) => part[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-100">{message.from}</p>
                  <p className="text-xs text-slate-500">{message.class}</p>
                </div>
              </div>
              <span className="text-xs text-slate-500">{new Date(message.timestamp).toLocaleDateString('en-US')}</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{message.preview}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
