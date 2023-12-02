import * as React from "react";
import { Button } from "./components/ui/button";
import { NumberOfStrands, UserData } from "./types";

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

const StepThree: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const onSubmit = (numberOfStrands: NumberOfStrands) => {
    setStep((n) => n + 1);
    setUserData({
      ...userData,
      numberOfStrands,
    });
  };

  return (
    <div>
      <Button value="2" onClick={() => onSubmit("2")}>
        2
      </Button>
      <Button value="3-wire" onClick={() => onSubmit("3-wire")}>
        3-wielożyłowy
      </Button>
      <Button value="3-core" onClick={() => onSubmit("3-core")}>
        3-jednożyłowy
      </Button>
    </div>
  );
};

export default StepThree;
