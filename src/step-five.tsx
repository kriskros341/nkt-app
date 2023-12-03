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
import { cn } from "./lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { useState } from "react";

const FormSchema = z.object({
  temperature: z.coerce.number({
    invalid_type_error: "Podaj wartość liczbową.",
  }),
});

const valueMapping: Record<number, number> = {
  0: 0.5,
  1: 0.7,
  2: 1.0,
  3: 1.5,
  4: 2.0,
  5: 2.5,
  6: 3.0,
};

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  setValue: any;
}

const SliderDemo = (props: SliderProps) => {
  const [mappedValues, setMappedValues] = useState(() =>
    props.defaultValue !== undefined
      ? [valueMapping[Math.round(props.defaultValue[0] ?? 0)]]
      : [0],
  );

  return (
    <>
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-[283px] h-5"
        onValueChange={(newValues) => {
          const roundedValue = Math.round(newValues[0]);

          const newMappingValue = [valueMapping[roundedValue]] as [number];
          props.setValue(newMappingValue);
          setMappedValues(newMappingValue);
        }}
        {...props}
      >
        <SliderPrimitive.Track className="bg-gray-600 relative grow rounded-full h-[3px]">
          <SliderPrimitive.Range className="absolute h-full rounded-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block w-5 h-5 bg-primary shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none"
          aria-label="Volume"
        >
          <div className="absolute h-4 text-xs text-center text-white -translate-x-1/2 left-1/2 top-7 w-fit">
            {mappedValues[0]}
          </div>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </>
  );
};

const StepFive: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const [thermalResistivity, setThermalResistivity] = React.useState(1);
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
      <form className="flex gap-12 flex-col items-start" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-6">
          <Button
            type="button"
            onClick={() => setTemperatureType("air")}
            className={cn(
              temperatureType === "air" ? "bg-[#00215F] text-white p-8" : "p-8",
            )}
          >
            Temperatura otoczenia
          </Button>
          <Button
            type="button"
            onClick={() => setTemperatureType("ground")}
            className={cn(
              temperatureType === "ground" ? "bg-[#00215F] text-white p-8" : "p-8",
            )}
          >
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
                <Input type="number" placeholder="temperatura" {...field} />
              </FormControl>
              <FormMessage className="text-gray-700" />
            </FormItem>
          )}
        />
        {temperatureType === "ground" && (
          <div>
            <div className="text-xl mb-6">Wartosc rezystencji cieplnej {thermalResistivity}</div>
            <SliderDemo
              defaultValue={[2]}
              step={0.01}
              min={0}
              max={6}
              setValue={setThermalResistivity}
            />
          </div>
        )}
        <div className="flex items-center justify-start gap-4 mt-8">
          <Button
            className="p-6 text-xl"
            onClick={() => {
              setStep((n) => n - 1);
            }}
          >
            Wróć
          </Button>
          <Button className="p-6 text-xl" type="submit">
            Kontynuuj
          </Button>
        </div>
      </form>
      
    </Form>
  );
};

export default StepFive;
