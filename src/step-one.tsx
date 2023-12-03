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
  metal: z.enum(["Cu", "Al"]),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 mt-8">
        <div className="flex flex-col items-start gap-12 mt-4">
          <FormField
            control={form.control}
            name="metal"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl">Rodzaj metalu</FormLabel>
                <FormControl>
                  <div className="flex gap-6 mt-6">
                    <Button
                      className={cn(
                        choice.metal === "Cu" && "bg-primary text-white",
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
                        choice.metal === "Al" && "bg-primary text-white",
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
                <FormLabel className="text-xl">Nazwa przewodu/kabla</FormLabel>
                <Select
                  onValueChange={(e) => field.onChange(e)}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[280px] bg-white">
                      <SelectValue className="text-gray-100" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {choice.choices.map((choice) => (
                      <SelectItem
                        key={choice}
                        value={choice.toLowerCase()}
                        className="text-black cursor-pointer text-md"
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
          <div className="flex items-center justify-start gap-4">
            <Button className="p-6 text-xl" type="submit">
              Kontynuuj
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default StepOne;
