import { Insulator, NumberOfStrands, UserData } from "./types";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import * as React from "react";
import { cn } from "./lib/utils";

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

const StepTwo: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const [insulator, setInsulator] = React.useState<Insulator>("pvc");
  const [numberOfStrands, setNumberOfStrands] =
    React.useState<NumberOfStrands>("2");

  const onSubmit = () => {
    setStep((n) => n + 1);
    setUserData({
      ...userData,
      insulator,
      numberOfStrands,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-6 mt-8 ">
        <Label className="text-xl">Wybierz rodzaj tworzywa izolacyjnego</Label>
        <div className="flex gap-6 mb-6">
          <Button
            className={cn(
              "p-6 text-xl",
              insulator === "pvc" ? "bg-[#00215F] text-white" : "",
            )}
            value="pvc"
            onClick={() => setInsulator("pvc")}
          >
            PVC
          </Button>
          <Button
            className={cn(
              "p-6 text-xl",
              insulator === "xlpe" ? "bg-[#00215F] text-white" : "",
            )}
            value="xlpe"
            onClick={() => setInsulator("xlpe")}
          >
            XLPE
          </Button>
          <Button
            className={cn(
              "p-6 text-xl",
              insulator === "b2ca" ? "bg-[#00215F] text-white" : "",
            )}
            value="b2ca"
            onClick={() => setInsulator("b2ca")}
          >
            B2CA
          </Button>
        </div>
        <Label className="mt-4 text-xl">Wybierz liczbę żył obciążonych</Label>
        <div className="flex gap-6 mb-6">
          <Button
            className={cn(
              "p-6 text-xl",
              numberOfStrands === "2" ? "bg-[#00215F] text-white" : "",
            )}
            value="2"
            onClick={() => setNumberOfStrands("2")}
          >
            2
          </Button>
          <Button
            className={cn(
              "p-6 text-xl",
              numberOfStrands === "3-wire" ? "bg-[#00215F] text-white" : "",
            )}
            value="3-wire"
            onClick={() => setNumberOfStrands("3-wire")}
          >
            3-wielożyłowy
          </Button>
          <Button
            className={cn(
              "p-6 text-xl",
              numberOfStrands === "3-core" ? "bg-[#00215F] text-white" : "",
            )}
            value="3-core"
            onClick={() => setNumberOfStrands("3-core")}
          >
            3-jednożyłowy
          </Button>
        </div>
        <div className="flex items-center justify-start gap-4 mt-8">
          <Button
            className="p-6 text-xl"
            onClick={() => {
              setStep((n) => n - 1);
            }}
          >
            Wróć
          </Button>
          <Button className="p-6 text-xl" onClick={() => onSubmit()}>
            Kontynuuj
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
