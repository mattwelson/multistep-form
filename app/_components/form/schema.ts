import { z } from "zod";

export enum PLAN_TYPE {
  ARCADE,
  ADVANCED,
  PRO,
}

export enum PERIOD {
  MONTHLY,
  YEARLY,
}

export const page1Schema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z.string().min(1, { message: "This field is required" }),
  phoneNumber: z.string().min(1, { message: "This field is required" }),
});

export const page2Schema = z.object({
  plan: z.nativeEnum(PLAN_TYPE),
  period: z.nativeEnum(PERIOD),
});

export const page3Schema = z.object({
  onlineService: z.boolean(),
  storage: z.boolean(),
  profile: z.boolean(),
});
