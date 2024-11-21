"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/_components/card";
import Image from "next/image";
import iconThankYou from "@/app/images/icon-thank-you.svg";

export function StepFive() {
  return (
    <CardContent className="py-16">
      <CardHeader className="text-center flex flex-col items-center justify-center flex-1">
        <Image src={iconThankYou} alt="" className="my-4" />
        <CardTitle>Thank you!</CardTitle>
        <CardDescription>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgamin.com.
        </CardDescription>
      </CardHeader>
    </CardContent>
  );
}
