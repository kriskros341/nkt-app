import * as React from "react";
import { Button } from "./components/ui/button";
import { TemperatureType, UserData } from "./types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./components/ui/input";

const FormSchema = z.object({
  temperature: z.coerce.number({
    invalid_type_error: "Podaj wartość liczbową.",
  }),
});

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

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
      temperatureValue: temperatureValue,
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
        <FormField
          control={form.control}
          name="temperature"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Temperatura</FormLabel>
              <FormControl>
                <Input placeholder="temperatura" {...field} />
              </FormControl>
              <FormMessage className="text-gray-700" />
            </FormItem>
          )}
        />
        <Button type="submit">Dalej</Button>
      </form>
    </Form>
  );
};

export default StepFive;
