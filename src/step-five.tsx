import * as React from "react";
import { Button } from "./components/ui/button";
import { TemperatureType } from "./types";
import { Form } from "./components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  temperature: z.number(),
});

const StepFive: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const [temperatureType, setTemperatureType] =
    React.useState<TemperatureType>("air");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      temperature: temperatureType === "air" ? 30 : 20,
    },
  });

  const onSubmit = (temperatureValue: number) => {
    setStep((n) => n + 1);
    setUserData({
      ...userData,
      temperatureType,
      temperatureValue,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <Button type="button" onClick={() => setTemperatureType("air")}>
            Temperatura otoczenia
          </Button>
          <Button type="button" onClick={() => setTemperatureType("ground")}>
            Temperatura gruntu
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepFive;
