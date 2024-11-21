import { atom } from "jotai";
import type { z } from "zod";
import { PERIOD, PLAN_TYPE, type page1Schema } from "./schema";
import { prices } from "./data";

export const nameAtom = atom("");
export const emailAtom = atom("");
export const phoneNumberAtom = atom("");

// Trying a readwrite atom for page 1
export const page1Atom = atom(
  (get) => ({
    name: get(nameAtom),
    email: get(emailAtom),
    phoneNumber: get(phoneNumberAtom),
  }),
  (_, set, formValues: z.infer<typeof page1Schema>) => {
    set(nameAtom, formValues.name);
    set(emailAtom, formValues.email);
    set(phoneNumberAtom, formValues.phoneNumber);
  }
);

export const planAtom = atom(PLAN_TYPE.ARCADE);
export const periodAtom = atom(PERIOD.MONTHLY);

export const onlineServicesAtom = atom(false);
export const storageAtom = atom(false);
export const profileAtom = atom(false);

export const addOnAtom = atom(
  (get) =>
    [
      get(onlineServicesAtom) && "onlineService",
      get(storageAtom) && "storage",
      get(profileAtom) && "profile",
    ].filter((x) => x) as Array<"onlineService" | "storage" | "profile">
);

function getPlanName(plan: PLAN_TYPE) {
  switch (plan) {
    case PLAN_TYPE.ARCADE:
      return "Arcade";
    case PLAN_TYPE.ADVANCED:
      return "Advanced";
    case PLAN_TYPE.PRO:
      return "Pro";
  }
}

// A readonly atom for the final configuration
export const confirmationAggregateAtom = atom((get) => ({
  period: {
    keyValue: (get(periodAtom) === PERIOD.MONTHLY ? "monthly" : "yearly") as
      | "monthly"
      | "yearly",
    title: get(periodAtom) === PERIOD.MONTHLY ? "Monthly" : "Yearly",
    abbreviation: get(periodAtom) === PERIOD.MONTHLY ? "mo" : "yr",
    per: get(periodAtom) === PERIOD.MONTHLY ? "per month" : "per year",
  },
  plan: {
    title: getPlanName(get(planAtom)) as ReturnType<typeof getPlanName>,
    keyValue: getPlanName(get(planAtom)).toLowerCase() as Lowercase<
      ReturnType<typeof getPlanName>
    >,
  },
  addOns: get(addOnAtom).map((key) => prices.addons[key]),
  onlineService: get(onlineServicesAtom),
  storage: get(storageAtom),
  profile: get(profileAtom),
}));

// A readonly atom for the final configuration
export const confirmationAtom = atom((get) => {
  const confirmation = get(confirmationAggregateAtom);
  const planPrice =
    prices.plans[confirmation.plan.keyValue][confirmation.period.keyValue];
  const addOns = confirmation.addOns.map((a) => ({
    ...a,
    price: a[confirmation.period.keyValue],
  }));
  const totalPrice =
    planPrice + addOns.reduce((acc, cur) => acc + cur.price, 0);

  return {
    ...confirmation,
    plan: {
      ...confirmation.plan,
      price: planPrice,
    },
    addOns,
    totalPrice,
  };
});
