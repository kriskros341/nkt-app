import * as React from "react";
import { UserData } from "./types";


import { Button } from "./components/ui/button";





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
