"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/app/_components/card";
import { PeriodSelect } from "@/app/_components/form/period-select";
import { PlanSelect } from "@/app/_components/form/plan-select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StepTwo() {
  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Select your plan</CardTitle>
        <CardDescription>
          You have the optioon of monthly or yearly billing.
        </CardDescription>
      </CardHeader>
      <PlanSelect />
      <PeriodSelect />
      <CardFooter>
        <Button asChild>
          <Link href="/3">Next Step</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/1">Go Back</Link>
        </Button>
      </CardFooter>
    </CardContent>
  );
}
