"use client";

import { useAtom } from "jotai";
import { periodAtom } from "./atoms";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PERIOD } from "./schema";
import { cn } from "@/lib/utils";

export function PeriodSelect() {
  const [period, setPeriod] = useAtom(periodAtom);

  function handleChange(checked: boolean) {
    setPeriod(checked ? PERIOD.YEARLY : PERIOD.MONTHLY);
  }

  return (
    <div className="bg-page-background rounded-lg p-2 flex items-center justify-center gap-4">
      <Label
        className={cn({
          "text-muted-foreground": period !== PERIOD.MONTHLY,
        })}
        onClick={() => handleChange(false)}
      >
        Monthly
      </Label>
      <Switch
        checked={period === PERIOD.YEARLY}
        onCheckedChange={handleChange}
      />
      <Label
        className={cn({
          "text-muted-foreground": period !== PERIOD.YEARLY,
        })}
        onClick={() => handleChange(true)}
      >
        Yearly
      </Label>
    </div>
  );
}
