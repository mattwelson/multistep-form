import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Expando card, takes the full page on mobile and then is card format on desktop
 */
export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-page-background z-0 min-h-screen flex flex-col md:grid md:grid-cols-[auto_1fr] md:grid-rows-[1fr_auto] md:w-full md:min-h-fit md:bg-background md:p-4 md:rounded-xl md:max-w-6xl md:mx-auto md:mt-16">
      {children}
    </div>
  );
}

export function CardHero({ children }: { children: ReactNode }) {
  return <div className="">{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex-1 mt-auto bg-background fixed bottom-0 inset-x-0 flex flex-row-reverse items-center justify-between p-4 md:relative md:items-end",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="px-4">
      <div
        className={cn(
          "flex flex-col relative bg-background rounded-lg p-4 px-6 z-10 mx-auto shadow-lg max-w-xl w-full md:shadow-none md:max-w-2xl md:min-h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-2 my-4", className)}>{children}</div>;
}

export function CardTitle({ children }: { children: string }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export function CardDescription({ children }: { children: string }) {
  return <p className="text-muted-foreground">{children}</p>;
}
