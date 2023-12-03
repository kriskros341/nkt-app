import * as React from "react";
import StepOne from "./step-one";
import { Choice, UserData } from "./types";
import { copperChoice } from "./const";
import Footer from "./components/Footer";
import VerticalLine from "./components/VerticalLine";
import StepTwo from "./step-two";
import StepFour from "./step-four";
import StepFive from "./step-five";
import { backend } from './lib/main.js'
import { Button } from "./components/ui/button.js";
import { Input } from "./components/ui/input.js";

function App() {
  const [choice, setChoice] = React.useState<Choice>(copperChoice);
  const [step, setStep] = React.useState(0);
  const [userData, setUserData] = React.useState<UserData | null>(null);
  const [, setFefresh] = React.useState(0);

  const [route, setRoute] = React.useState()
  const [p, setP] = React.useState()
  const [fi, setFi] = React.useState()
  const [Iobl, setIobl] = React.useState()

  const onIoblChange = (event: any) => {
    setIobl(parseFloat(event.target.value)) // To dziala. jebac typescript bezuzyteczny smiec
  }

  const onPChange = (event: any) => {
    setP(parseFloat(event.target.value))
  }

  const onFiChange = (event: any) => {
    setFi(parseFloat(event.target.value))
  }

  const onRoute = (route: string) => () => {
    setStep(c => c+1)
    setRoute(route)
  }

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
      <div className="flex h-full justify-center items-center gap-16">
        <div>
          <Button onClick={onRoute("I")} className="p-8">
            Podaj Iobl 
          </Button>
        </div>
        <div>
          <Button onClick={onRoute("P")} className="p-8">
            Podaj P i cos(fi)
          </Button>
        </div>
      </div>
    ),
    () => route === "I" ? (
      <div className="flex h-full justify-center flex-col items-center gap-16">
        <Input type="number" value={Iobl} onChange={onIoblChange} placeholder="Iobj"/>
        <Button onClick={() => setStep(c => c+1)}>Dalej</Button>
      </div>  
    ) : (
      <div className="flex h-full justify-center items-center gap-16 flex-col">
        <Input type="number" value={p} onChange={onPChange} placeholder="P"/>
        <Input type="number" value={fi} onChange={onFiChange} placeholder="cos(fi) = 0.8"/>
        <Button onClick={() => setStep(c => c+1)}>Dalej</Button>
      </div>
    ),
    () => {
      <div />
    }
  ];

  if (step === 6) {
    console.log(userData, {route, p, fi, Iobl})
    const values: any = backend(userData, {route, p, fi: fi ?? 0.8, Iobl})
    console.log(values)
    let a = "#"
    if("ydy" === values["reeeee"]) {
      a = "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/ydy-450-750-v"
    }
    if("ydyp" === values["reeeee"]) {
      a = "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/przewody-instalacyjne/nkt-instal-ydyp-450-750-v"
    }
    if("yky" === values["reeeee"]) {
      a = "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yky-0-6-1-kv"
    } 
    if("ykxs" === values["reeeee"]) {
      a = "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/ykxs-0-6-1-kv"
    }
    if("n2xh" === values["reeeee"]) {
      a = "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/nopovic-n2xh-0-6-1-kv"
    }
    if("yakxs" === values["reeeee"]) {
      a = "https://www.nkt.com.pl/produkty-rozwiazania/niskie-napiecie/kable-1-kv/yakxs-0-6-1-kv"
    }

    return (
      <main className="flex flex-col w-full h-screen overflow-hidden">
        <div className="flex justify-between w-full gap-4">
        <div className="py-24 pl-20 w-[50%]">
          <ul>
            <li>
              Nazwa przewodu/kabla - <a href={a} className="text-[#00215F]">{values["japierdole"]}</a>
            </li>
            <li>
            obwód - {values["obwód"]}
            </li>
            <li>
              metoda referencyjna - {values["metoda referencyjna"]}
            </li>
            <li>
              sposób instalacji - {values["sposób instalacji"]}
            </li>
            {values["temp otoczenia (powietrza)"].length !== 0 && (
              <li>
              temp otoczenia (powietrza) - {values["temp otoczenia (powietrza)"]}
              </li>
            )}
            {values["temp. gruntu"].length !== 0 && (
              <li>
              temp. gruntu - {values["temp. gruntu"]}
              </li>
            )}
            {values["rezystywność gruntu"].length !== 0 && (
              <li>
              rezystywność gruntu - {values["rezystywność gruntu"]}
              </li>
            )}
            {values["głębokość ułożenia"] && (
            <li>
              głębokość ułożenia - {values["głębokość ułożenia"]}
            </li>
            )}
            <li>
            temp. żyły - {values["temp. żyły"]}
            </li>
            <li>
              Liczba przewodów wielożyłowych - {values["Liczba przewodów wielożyłowych"]}
            </li>
            <li>
              izolacja - {values["izolacja"]}
            </li>
            <li>
              liczba żył obciążonych prądowo - {values["liczba żył obciążonych prądowo"]}
            </li>
            <li>
            liczba żył - {values["liczba żył"]}
            </li>
            <li>
              obwód - {values["obwód"]}
            </li>
            <li>
              rodzaj żyły (metal) - {values["rodzaj żyły (metal)"]}
            </li>
          </ul>
        </div>
        <div style={{ flex: 4 }} className="hidemeonsmall sticky top-0 h-screen ml-4">
          <VerticalLine step={step} setStep={setStep} />
        </div>
      </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="flex flex-col w-full h-screen max-h-screen overflow-hidden">
      <div className="flex justify-between w-full gap-4">
        <div className="py-24 pl-20 w-[50%]">
          {/* <ActionTitleLine /> */}
          {steps[step]()}
          <button onClick={() => setFefresh}>setFefresh</button>
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
