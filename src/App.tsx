import * as React from "react";
import StepOne from "./step-one";
import { Choice, UserData } from "./types";
import { copperChoice } from "./const";
import Footer from "./components/Footer";
import VerticalLine from "./components/VerticalLine";
import ActionTitleLine from "./components/ActionTitleLine";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import StepFour from "./step-four";

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
      <StepThree
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
  ];

  console.log(userData);

  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 gap-4">
        <ActionTitleLine />
        {steps[step]()}
        <VerticalLine />
      </div>
      <Footer />
    </>
  );
}

export default App;
