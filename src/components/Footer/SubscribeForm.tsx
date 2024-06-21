"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { getDefaults } from "utils/zod";

const formSchema = z.object({
  email: z.string().email().default(""),
});

type Form = z.infer<typeof formSchema>;

console.log(process.env.VERCEL_URL);
console.log(`https://${process.env.VERCEL_URL}/static/video.MOV`);

export function SubscribeForm() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  async function onSubmit(data: Form) {
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch("api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { message } = await res.json();

      setSuccess(message);
      setLoading(false);

      form.reset();

      setTimeout(() => setSuccess(""), 4000);
    } catch (err) {
      setLoading(false);
      if (err instanceof Error) {
        setError(err?.message);
      }
    }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"w-full md:max-w-[540px]"}
      >
        <div
          className={
            "mb-2 flex flex-col justify-end gap-x-6 gap-y-4 sm:flex-row sm:items-center"
          }
        >
          <div className={"flex-1 md:max-w-[390px]"}>
            <FormTextInput<Form>
              fieldName={"email"}
              placeholder={"Enter your Email"}
            />
          </div>
          <Button type={"submit"} colorVariant={"white"} loading={loading}>
            Subscribe
          </Button>
        </div>
        {success && (
          <p className={"ml-3 text-center text-green_ch-400 md:text-left"}>
            {success}
          </p>
        )}
        {!error && (
          <p className={"ml-3 text-center text-red-500 md:text-left"}>
            {error}
          </p>
        )}
      </form>
    </FormProvider>
  );
}
