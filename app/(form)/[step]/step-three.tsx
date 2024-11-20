import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/app/_components/card";
import { AddOnSelect } from "@/app/_components/form/add-on-select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StepThree() {
  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Pick add-ons</CardTitle>
        <CardDescription>
          Add-ons help enhance your gaming experience.
        </CardDescription>
      </CardHeader>
      <AddOnSelect />
      <CardFooter>
        <Button asChild>
          <Link href="/4">Next Step</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/2">Go Back</Link>
        </Button>
      </CardFooter>
    </CardContent>
  );
}
