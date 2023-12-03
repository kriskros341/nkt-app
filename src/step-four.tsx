import * as React from "react";
import { InstallationMethod, UserData } from "./types";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

const installationMethods = [
  {
    header: "A1",
    description: "bezpośrednio w ścianie izolowanej cieplnie",
  } as const,
  {
    header: "A2",
    description: "w rurze instalacyjnej w ścianie izolowanej cieplnie",
  } as const,
  {
    header: "B1",
    description:
      "w rurze instalacyjnej na ścianie/murze - dla kabli jednożyłowych",
  } as const,
  {
    header: "B2",
    description:
      "w rurze instalacyjnej na ścianie/murze - dla kabli i przewodów wielożyłowych",
  } as const,
  {
    header: "E",
    description:
      "w powietrzu (np. perforowane korytko) - dla kabli i przewodów wielożyłowych",
  } as const,
  {
    header: "F",
    description:
      "w powietrzu (np. perforowane korytko) - dla kabli jednożyłowych",
  } as const,
  { header: "D1", description: "w rurze osłonowej w ziemi" } as const,
  { header: "D2", description: "bezpośrednio w ziemi" } as const,
] as const;

interface Props {
  setStep: any;
  setUserData: (userData: UserData) => void;
  userData: UserData;
}

const StepFour: React.FC<Props> = ({ setStep, setUserData, userData }) => {
  const [installationMethod, setInstallationMethod] =
    React.useState<InstallationMethod>("A1");

  const onSubmit = () => {
    setStep((n) => n + 1);
    setUserData({
      ...userData,
      installationMethod,
    });
  };

  return (
    <div className="flex flex-col flex-none gap-6">
      {installationMethods.map((installationM) => {
        return (
          <Button
            key={installationM.header}
            onClick={() => setInstallationMethod(installationM.header)}
            className={cn(
              "flex items-center justify-start p-6 py-[20px]",
               installationMethod === installationM.header ? "bg-[#00215F] text-white" : "",
            )}
          >
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap items-center justify-start w-5 h-5 mr-4">
                {installationM.header} -
              </div>
              <div className="flex flex-wrap items-center text-gray-800 text-md">
                <span className={cn(installationMethod === installationM.header ? "text-white" : "")}>
                  {installationM.description}

                </span>
              </div>
            </div>
          </Button>
        );
      })}
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
  );
};

export default StepFour;
