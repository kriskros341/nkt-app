import * as React from "react";
import StepOne from "./step-one";
import { Choice, UserData } from "./types";
import { copperChoice } from "./const";
import Footer from "./components/Footer";
import VerticalLine from "./components/VerticalLine";
import StepTwo from "./step-two";
import StepFour from "./step-four";
import StepFive from "./step-five";
import StepSix from "./step-six";

function App() {
  const [choice, setChoice] = React.useState<Choice>(copperChoice);
  const [step, setStep] = React.useState(0);
  const [userData, setUserData] = React.useState<UserData | null>(null);

  const steps = [
    () => (
      <StepOne
        setStep={setStep}
        choice={choice}
        setChoice={setChoice}
        setUserData={setUserData}
      />
    ),
    () => (
      <StepTwo
        setStep={setStep}
        setUserData={setUserData}
        userData={userData}
      />
    ),
    () => (
      <StepFour
        setStep={setStep}
        setUserData={setUserData}
        userData={userData}
      />
    ),
    () => (
      <StepFive
        setStep={setStep}
        setUserData={setUserData}
        userData={userData}
      />
    ),
    () => (
      <StepSix
        setStep={setStep}
        setUserData={setUserData}
        userData={userData}
      />
    ),
  ];

  console.log(userData);

  return (
    <main className="flex flex-col w-full h-screen">
      <div className="flex justify-between w-full gap-4">
        <div className="py-24 pl-20 w-[50%]">
          {/* <ActionTitleLine /> */}
          {steps[step]()}
        </div>
        <div style={{ flex: 4 }} className="sticky top-0 h-screen ml-4">
          <VerticalLine step={step} setStep={setStep} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
