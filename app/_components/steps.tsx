import Image from "next/image";
import bgMobile from "@/app/images/bg-sidebar-mobile.svg";
import bgDesktop from "@/app/images/bg-sidebar-desktop.svg";

import { cn } from "@/lib/utils";

export type StepNumber = 1 | 2 | 3 | 4 | 5;

export function Steps({ step }: { step: StepNumber }) {
  return (
    <div className="relative grid">
      <Image
        src={bgMobile}
        alt=""
        className="md:hidden w-full row-start-1 col-start-1 absolute"
      />
      <Image
        src={bgDesktop}
        alt=""
        className="hidden md:block row-start-1 col-start-1"
      />

      <div className="flex justify-center gap-4 row-start-1 col-start-1 my-8 relative md:flex-col md:justify-start md:px-6 text-white">
        <Step number={1} title="Your info" currentStep={step} />
        <Step number={2} title="Select plan" currentStep={step} />
        <Step number={3} title="Add-ons" currentStep={step} />
        <Step number={4} title="Summary" currentStep={step} />
      </div>
    </div>
  );
}

export function Step({
  number,
  title,
  currentStep,
}: {
  number: StepNumber;
  title: string;
  currentStep: StepNumber;
}) {
  return (
    <div className="flex gap-6 items-center">
      <div
        className={cn(
          "size-8 flex items-center justify-center rounded-full bg-transparent text-white border",
          {
            "bg-accent text-accent-foreground border-accent":
              number === currentStep || (currentStep === 5 && number === 4),
          }
        )}
      >
        {number}
      </div>
      <div className="hidden md:block">
        <div className="text-xs text-muted">STEP {number}</div>
        <div className=" uppercase font-bold">{title}</div>
      </div>
    </div>
  );
}
