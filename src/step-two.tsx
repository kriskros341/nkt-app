import { Insulator, UserData } from "./types";
import { Button } from "./components/ui/button";

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

const StepTwo: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const onSubmit = (insulator: Insulator) => {
    setStep((n) => n + 1);
    setUserData({
      ...userData,
      insulator,
    });
  };

  return (
    <div>
      <Button value="pvc" onClick={() => onSubmit("pvc")}>
        PVC
      </Button>
      <Button value="xlpe" onClick={() => onSubmit("xlpe")}>
        XLPE
      </Button>
      <Button value="b2ca" onClick={() => onSubmit("b2ca")}>
        B2CA
      </Button>
    </div>
  );
};

export default StepTwo;
