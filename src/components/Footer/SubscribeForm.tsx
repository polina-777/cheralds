"use client";

import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { FormTextInput } from "common/FormInputs";
import { Button } from "common/UI";

import { getDefaults } from "utils/zod";

const formSchema = z.object({
  email: z.string().email().default(""),
});

type Form = z.infer<typeof formSchema>;

export function SubscribeForm() {
  // const router = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  // const subscribe = useMutation({
  //   mutationFn: (data: Form) => console.log(data),
  //   onSuccess: (data) => {
  //     router.refresh();
  //   },
  // });

  function onSubmit(data: Form) {
    try {
      fetch("api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err: unknown) {}
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={
          "flex w-full flex-col justify-end gap-x-6 gap-y-4 sm:flex-row sm:items-center"
        }
      >
        <FormTextInput<Form>
          fieldName={"email"}
          placeholder={"Enter your Email"}
          className={{ wrapper: "flex-1 md:max-w-[390px]" }}
        />
        <Button
          type={"submit"}
          colorVariant={"white"}
          // loading={subscribe.isLoading}
        >
          Subscribe
        </Button>
      </form>
    </FormProvider>
  );
}
