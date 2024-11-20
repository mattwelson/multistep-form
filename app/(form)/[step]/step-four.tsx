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
  confirmation: { plan, period },
}: {
  confirmation: ExtractAtomValue<typeof confirmationAtom>;
}) {
  const price = prices.plans[plan.keyValue][period.keyValue];
  return (
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
        ${price}/{period.abbreviation}
      </div>
    </div>
  );
}

function TotalDetails() {
  return (
    <div>
      <div>Total (per month)</div>
      <div>+$12/mo</div>
    </div>
  );
}

export function StepFour() {
  const confirmation = useAtomValue(confirmationAtom);

  console.log({ confirmation });

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Finishing up</CardTitle>
        <CardDescription>
          Double-check everything looks OK before confirming.
        </CardDescription>
      </CardHeader>
      <div className="p-4 bg-page-background">
        <PlanDetails confirmation={confirmation} />
      </div>
      <TotalDetails />
      <CardFooter>
        <div className="justify-self-end">
          <Button type="submit" className="bg-primary">
            Confirm
          </Button>
        </div>
        <Button variant="link" asChild>
          <Link href="/1">Go Back</Link>
        </Button>
      </CardFooter>
    </CardContent>
  );
}
