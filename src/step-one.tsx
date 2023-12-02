import * as React from "react";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { cn } from "./lib/utils";
import { Choice, UserData } from "./types";
import { aluminiumChoice, copperChoice } from "./const";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Props {
  setStep: any;
  choice: Choice;
  setChoice: (choice: Choice) => void;
  setUserData: (userData: UserData) => void;
}
const FormSchema = z.object({
  metal: z.enum(["Cu", "Al"], {
    required_error: "siema eniu",
  }),
  type: z.string({
    required_error: "Please select an type to display.",
  }),
});

const StepOne: React.FC<Props> = ({
  setStep,
  choice,
  setChoice,
  setUserData,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      metal: "Cu",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setStep((n) => n + 1);
    setUserData({
      metal: data.metal,
      type: data.type,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <div className="flex flex-col gap-6 items-start">
          <FormField
            control={form.control}
            name="metal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rodzaj metalu</FormLabel>
                <FormControl>
                  <div className="flex gap-6">
                    <Button
                      className={cn(
                        choice.metal === "Cu" &&
                          "bg-[#FF8D07] hover:bg-[#FCB665]",
                      )}
                      size="lg"
                      value="Cu"
                      type="button"
                      onClick={(e) => {
                        field.onChange(e);
                        setChoice({ ...copperChoice });
                      }}
                      defaultValue={field.value}
                      {...field}
                    >
                      Cu
                    </Button>
                    <Button
                      className={cn(
                        choice.metal === "Al" &&
                          "bg-[#FF8D07] hover:bg-[#FCB665]",
                      )}
                      size="lg"
                      value="Al"
                      type="button"
                      onClick={(e) => {
                        field.onChange(e);
                        setChoice({ ...aluminiumChoice });
                      }}
                      {...field}
                    >
                      Al
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>typ</FormLabel>
                <Select
                  onValueChange={(e) => field.onChange(e)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="" className="text-black" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {choice.choices.map((choice) => (
                      <SelectItem
                        key={choice}
                        value={choice.toLowerCase()}
                        className="text-black text-md"
                      >
                        {choice}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-700" />
              </FormItem>
            )}
          />
          <Button type="submit" className="text-black">
            Dalej
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default StepOne;
