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
import { Choice } from "./types";
import { aluminiumChoice, copperChoice } from "./const";
import Footer from "./components/Footer" 

interface Props {
  setStep: any;
  choice: Choice;
  setChoice: (choice: Choice) => void;
}

const StepOne: React.FC<Props> = ({ setStep, choice, setChoice }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <Button
          className={cn(
            choice.metal === "Cu" && "bg-[#FF8D07] hover:bg-[#FCB665]",
          )}
          size="lg"
          onClick={() => setChoice({ ...copperChoice })}
        >
          Cu
        </Button>
        <Button
          className={cn(
            choice.metal === "Al" && "bg-[#FF8D07] hover:bg-[#FCB665]",
          )}
          size="lg"
          onClick={() => setChoice({ ...aluminiumChoice })}
        >
          Al
        </Button>
      </div>
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
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
      <Button
        // onClick={() => setStep((step) => step + 1)}
        // className="text-black"
      >
        Dalej
      </Button>
    </div>
  );
};

export default StepOne;
