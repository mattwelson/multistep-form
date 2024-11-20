"use client";

import iconArcade from "@/app/images/icon-arcade.svg";
import iconAdvanced from "@/app/images/icon-advanced.svg";
import iconPro from "@/app/images/icon-pro.svg";
import Image from "next/image";
import { PERIOD, PLAN_TYPE } from "./schema";
import { prices } from "./data";
import { useAtom, useAtomValue } from "jotai";
import { periodAtom, planAtom } from "./atoms";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function getPriceMessage(key: keyof (typeof prices)["plans"], period: PERIOD) {
  const price =
    prices.plans[key][period === PERIOD.MONTHLY ? "monthly" : "yearly"];
  if (period === PERIOD.YEARLY) return `$${price}/yr`;
  return `$${price}/mo`;
}

function getDiscountMessage(
  key: keyof (typeof prices)["plans"],
  period: PERIOD
) {
  if (period === PERIOD.MONTHLY) return null;
  const monthlyDiscount = prices.plans[key].monthlyDiscount;
  return `${monthlyDiscount} months free`;
}

export function PlanItem({
  plan,
  children,
}: {
  plan: PLAN_TYPE;
  children: ReactNode;
}) {
  const [selectedPlan, setSelectedPlan] = useAtom(planAtom);

  return (
    <div
      onClick={() => setSelectedPlan(plan)}
      className={cn(
        "flex-1 border rounded-lg p-4 gap-4 sm:h-48 flex sm:flex-col sm:justify-end cursor-pointer",
        {
          "border-foreground bg-page-background": plan === selectedPlan,
        }
      )}
    >
      {children}
    </div>
  );
}

export function PlanSelect() {
  const period = useAtomValue(periodAtom);

  return (
    <div className="flex gap-4 my-6 flex-col sm:flex-row">
      <PlanItem plan={PLAN_TYPE.ARCADE}>
        <Image src={iconArcade} alt="" className="mb-auto" />
        <div>
          <div className="text-lg font-semibold">Arcade</div>
          <div className="text-muted-foreground">
            {getPriceMessage("arcade", period)}
          </div>
          <div className="text-foreground text-sm">
            {getDiscountMessage("arcade", period)}
          </div>
        </div>
      </PlanItem>
      <PlanItem plan={PLAN_TYPE.ADVANCED}>
        <Image src={iconAdvanced} alt="" className="mb-auto" />
        <div>
          <div className="text-lg font-semibold">Advanced</div>
          <div className="text-muted-foreground">
            {getPriceMessage("advanced", period)}
          </div>
          <div className="text-foreground text-sm">
            {getDiscountMessage("advanced", period)}
          </div>
        </div>
      </PlanItem>
      <PlanItem plan={PLAN_TYPE.PRO}>
        <Image src={iconPro} alt="" className="mb-auto" />
        <div>
          <div className="text-lg font-semibold">Pro</div>
          <div className="text-muted-foreground">
            {getPriceMessage("pro", period)}
          </div>
          <div className="text-foreground text-sm">
            {getDiscountMessage("pro", period)}
          </div>
        </div>
      </PlanItem>
    </div>
  );
}
