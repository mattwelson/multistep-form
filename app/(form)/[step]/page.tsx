import { Card, CardHero } from "@/app/_components/card";
import { Steps, type StepNumber } from "@/app/_components/steps";
import { z } from "zod";
import { StepForm } from "./step-form";

export default async function FormPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const step = z.coerce
    .number()
    .int()
    .min(1)
    .max(5)
    .parse((await params).step) as StepNumber;

  return (
    <Card>
      <CardHero>
        <Steps step={step} />
      </CardHero>
      <StepForm step={step} />
    </Card>
  );
}
