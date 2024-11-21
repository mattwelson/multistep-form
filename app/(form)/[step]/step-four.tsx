"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/app/_components/card";
import { confirmationAtom } from "@/app/_components/form/atoms";
import { prices } from "@/app/_components/form/data";
import { Button } from "@/components/ui/button";
import { useAtomValue, type ExtractAtomValue } from "jotai";
import Link from "next/link";

function PlanDetails({
  confirmation: { plan, period, addOns },
}: {
  confirmation: ExtractAtomValue<typeof confirmationAtom>;
}) {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex-1">
          <div className="font-bold">
            {plan.title} ({period.title})
          </div>
          <Link href="/2" className="text-muted-foreground underline">
            Change
          </Link>
        </div>
        <div className="font-bold">
          ${plan.price}/{period.abbreviation}
        </div>
      </div>
      {!!addOns.length && <div className="h-px w-full bg-border my-2" />}
      {addOns.map((addOn) => (
        <div key={addOn.title} className="flex first-of-type:border-t py-1">
          <div className="flex-1 text-muted-foreground">{addOn.title}</div>
          <div>
            +${addOn.price}/{period.abbreviation}
          </div>
        </div>
      ))}
    </div>
  );
}

function TotalDetails() {
  const confirmation = useAtomValue(confirmationAtom);
  return (
    <div className="flex p-4 text-muted-foreground">
      <div className="flex-1">Total ({confirmation.period.per})</div>
      <div className="text-primary font-semibold">
        +${confirmation.totalPrice}/mo
      </div>
    </div>
  );
}

export function StepFour() {
  const confirmation = useAtomValue(confirmationAtom);

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Finishing up</CardTitle>
        <CardDescription>
          Double-check everything looks OK before confirming.
        </CardDescription>
      </CardHeader>
      <div className="p-4 bg-page-background rounded-md">
        <PlanDetails confirmation={confirmation} />
      </div>
      <TotalDetails />
      <CardFooter>
        <Button asChild className="bg-primary">
          <Link href="/5">Confirm</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/3">Go Back</Link>
        </Button>
      </CardFooter>
    </CardContent>
  );
}
