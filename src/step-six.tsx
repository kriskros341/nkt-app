import * as React from "react";
import { UserData } from "./types";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { useState } from "react";
import { Button } from "./components/ui/button";

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
    <form>
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-[60%] h-5"
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
    </form>
  );
};

const valueMapping: Record<number, number> = {
  0: 0.5,
  1: 0.7,
  2: 1,
  3: 1.5,
  4: 2,
  5: 2.5,
  6: 3,
};

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

// THIS STEP IS ONLY WHEN IN PREVIOUS STEP WE CHOSE temperatureType = "ground"
const StepSix: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const [thermalResistivity, setThermalResistivity] = React.useState(1);

  const onSubmit = () => {
    setUserData({ ...userData, thermalResistivity });
    setStep((n) => n + 1);
  };

  return (
    <div className="w-[800px]">
      <div>{thermalResistivity}</div>
      <SliderDemo
        defaultValue={[2]}
        step={0.01}
        min={0}
        max={6}
        setValue={setThermalResistivity}
      />
      <Button onClick={() => onSubmit()}>Znajdź kabel</Button>
    </div>
  );
};

export default StepSix;
