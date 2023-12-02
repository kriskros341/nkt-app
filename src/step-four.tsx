import * as React from "react";
import { InstallationMethod, UserData } from "./types";
import { Button } from "./components/ui/button";

const installationMethods = [
  { header: "A1", description: "bezpośrednio w ścianie izolowanej cieplnie" },
  {
    header: "A2",
    description: "w rurze instalacyjnej w ścianie izolowanej cieplnie",
  },
  {
    header: "B1",
    description:
      "w rurze instalacyjnej na ścianie/murze - dla kabli jednożyłowych",
  },
  {
    header: "B2",
    description:
      "w rurze instalacyjnej na ścianie/murze - dla kabli i przewodów wielożyłowych",
  },
  {
    header: "E",
    description:
      "w powietrzu (np. perforowane korytko) - dla kabli i przewodów wielożyłowych",
  },
  {
    header: "F",
    description:
      "w powietrzu (np. perforowane korytko) - dla kabli jednożyłowych",
  },
  { header: "D1", description: "w rurze osłonowej w ziemi" },
  { header: "D2", description: "bezpośrednio w ziemi" },
] as const;

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

const StepFour: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const onSubmit = (installationMethod: InstallationMethod) => {
    setStep((n) => n + 1);
    setUserData({
      ...userData,
      installationMethod,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {installationMethods.map((installationMethod) => {
        return (
          <Button
            key={installationMethod.header}
            onClick={() => onSubmit(installationMethod.header)}
            className="flex flex-col p-6"
          >
            <div>{installationMethod.header}</div>
            <div className="text-slate-600 text-sm">
              {installationMethod.description}
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default StepFour;
