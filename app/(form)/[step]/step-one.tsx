"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/app/_components/card";
import { page1Schema } from "@/app/_components/form/schema";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { page1Atom } from "@/app/_components/form/atoms";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function StepOne() {
  const [defaultValues, setValues] = useAtom(page1Atom);
  const form = useForm<z.infer<typeof page1Schema>>({
    resolver: zodResolver(page1Schema),
    defaultValues,
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof page1Schema>) {
    // update the atom
    setValues(values);
    router.push("/2");
  }

  return (
    <CardContent>
      <CardHeader>
        <CardTitle>Personal info</CardTitle>
        <CardDescription>
          Please provide your name, email address, and phone number.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex-1 flex flex-col"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Stephen King" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. stephenking@lorem.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. +1 234 567 890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CardFooter>
            <div className="justify-self-end">
              <Button type="submit">Next Step</Button>
            </div>
          </CardFooter>
        </form>
      </Form>
    </CardContent>
  );
}
