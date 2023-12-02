import * as React from "react";
import StepOne from "./step-one";
import { Choice } from "./types";
import { copperChoice } from "./const";
import Footer from "./components/Footer";
import VerticalLine from "./components/VerticalLine";
import ActionTitleLine from "./components/ActionTitleLine";

function App() {
  const [choice, setChoice] = React.useState<Choice>(copperChoice);
  const [step, setStep] = React.useState(0);

  return (
    <>
    <div className="flex flex-1 items-center justify-center flex-col gap-4">
      <ActionTitleLine/>
      {step === 0 ? (
        <StepOne setStep={setStep} choice={choice} setChoice={setChoice} />
      ) : null}
      <VerticalLine/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
