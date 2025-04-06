export default function ListSkeleton() {
  return (
    <div className="my-6">
      <div className="mb-6 space-y-6">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-lg border border-transparent bg-slate-100/50 p-4 dark:border-slate-800 dark:bg-slate-800/30"
          >
            <div className="h-6 w-3/4 rounded-md bg-slate-200 dark:bg-slate-700" />
            <div className="mt-2 flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-700" />
              <div className="h-4 w-24 rounded-md bg-slate-200 dark:bg-slate-700" />
            </div>
            <div className="mt-2 h-4 w-full rounded-md bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>

      <div className="flex justify-center py-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-sky-500 dark:bg-sky-400" />
          <div
            className="h-2 w-2 animate-pulse rounded-full bg-sky-500 dark:bg-sky-400"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="h-2 w-2 animate-pulse rounded-full bg-sky-500 dark:bg-sky-400"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
