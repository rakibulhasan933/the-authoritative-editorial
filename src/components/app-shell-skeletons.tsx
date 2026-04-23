import { Skeleton } from "@/components/ui/skeleton";

export function AppPageSkeleton() {
  return (
    <main className="min-h-screen bg-muted/30 px-4 py-10 md:px-6">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <div className="rounded-2xl border bg-background p-6 md:p-8">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-4 h-10 w-full max-w-2xl" />
          <Skeleton className="mt-3 h-5 w-full max-w-3xl" />
          <Skeleton className="mt-8 h-5 w-full" />
          <Skeleton className="mt-3 h-5 w-[92%]" />
          <Skeleton className="mt-3 h-5 w-[85%]" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-52 rounded-xl" />
          <Skeleton className="h-52 rounded-xl" />
        </div>
      </div>
    </main>
  );
}

export function LoginPageSkeleton() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-muted/40 p-6">
      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-sm">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-3 h-4 w-full" />
        <Skeleton className="mt-8 h-4 w-16" />
        <Skeleton className="mt-2 h-10 w-full" />
        <Skeleton className="mt-5 h-4 w-24" />
        <Skeleton className="mt-2 h-10 w-full" />
        <Skeleton className="mt-8 h-10 w-full" />
      </div>
    </div>
  );
}

export function DashboardPageSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-5 md:gap-6">
      <section className="md:col-span-2">
        <div className="rounded-xl border bg-background p-6">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-3 h-4 w-full" />
          <div className="mt-6 space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="rounded-lg border bg-muted/40 p-4">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="mt-2 h-5 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:col-span-3">
        <div className="rounded-xl border bg-background p-6">
          <Skeleton className="h-6 w-44" />
          <Skeleton className="mt-3 h-4 w-full" />
          <div className="mt-6 space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <Skeleton className="h-4 w-32" />
                <Skeleton className="mt-2 h-10 w-full" />
              </div>
            ))}
            <Skeleton className="mt-2 h-10 w-40" />
          </div>
        </div>
      </section>
    </div>
  );
}

export function SearchDialogSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-4 w-32" />
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="mt-2 h-3 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-28" />
        <div className="mt-4 space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-lg border p-4">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="mt-2 h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SearchResultsSkeleton() {
  return (
    <div className="mt-5 space-y-6">
      <div>
        <Skeleton className="h-4 w-40" />
        <div className="mt-4 space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-lg border p-4">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="mt-2 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-[90%]" />
              <Skeleton className="mt-3 h-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
