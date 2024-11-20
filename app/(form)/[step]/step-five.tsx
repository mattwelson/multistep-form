"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/app/_components/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StepFive() {
  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Personal info</CardTitle>
        <CardDescription>
          Please provide your name, email address, and phone number.
        </CardDescription>
      </CardHeader>
      <div>Some form, name etc</div>
      <CardFooter>
        <div className="justify-self-end">
          <Button type="submit">Next Step</Button>
        </div>
        <Button variant="link" asChild>
          <Link href="/1">Go Back</Link>
        </Button>
      </CardFooter>
    </CardContent>
  );
}
