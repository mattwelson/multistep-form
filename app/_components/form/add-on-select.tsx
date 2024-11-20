"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { prices } from "./data";
import { useAtom, useAtomValue } from "jotai";
import {
  onlineServicesAtom,
  periodAtom,
  profileAtom,
  storageAtom,
} from "./atoms";
import { PERIOD } from "./schema";
import { cn } from "@/lib/utils";

function AddOnSelectItem({
  checked,
  onCheckedChange,
  addOnKey,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  addOnKey: keyof (typeof prices)["addons"];
}) {
  const period = useAtomValue(periodAtom);
  const addOn = prices.addons[addOnKey];
  const price = addOn[period === PERIOD.MONTHLY ? "monthly" : "yearly"];
  return (
    <div
      onClick={() => onCheckedChange(!checked)}
      className={cn("flex items-center gap-4 border rounded-lg p-2 px-4", {
        "border-primary bg-page-background": checked,
      })}
    >
      <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
      <div className="flex-1">
        <h3 className="font-bold">{addOn.title}</h3>
        <p className="text-sm text-muted-foreground">{addOn.description}</p>
      </div>
      <div className="text-primary">
        +${price}/{period === PERIOD.MONTHLY ? "mo" : "yr"}
      </div>
    </div>
  );
}

export function AddOnSelect() {
  const [onlineService, setOnlineService] = useAtom(onlineServicesAtom);
  const [storage, setStorage] = useAtom(storageAtom);
  const [profile, setProfile] = useAtom(profileAtom);
  return (
    <div className="flex flex-col gap-4 mb-8">
      <AddOnSelectItem
        checked={onlineService}
        onCheckedChange={setOnlineService}
        addOnKey="onlineService"
      />
      <AddOnSelectItem
        checked={storage}
        onCheckedChange={setStorage}
        addOnKey="storage"
      />
      <AddOnSelectItem
        checked={profile}
        onCheckedChange={setProfile}
        addOnKey="profile"
      />
    </div>
  );
}
