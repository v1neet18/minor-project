import React, { useState } from "react";
import Progress from "../components/Progress";
import SelectLabTest from "../components/SelectLabTest";
import SelectDate from "../components/SelectDate"
import AddPatientInfo from "../components/AddPatientInfo";
import Payment from "../components/Payment";

function BookAppointment() {
  const steps = ["Select Test", "Date & Time", "Patient Info", "Confirm"];

  const [value, setValue] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className="flex flex-col  max-w-2xl w-full">
        <Progress
          steps={steps}
          currentStep={currentStep}
          bgColor="bg-gray-300"
          fgColor="bg-green-600"
        />
        <section className="px-2 py-4 lg:p-6 md:p-10 w-9/10 max-w-2xl mx-auto bg-base-200 shadow-lg rounded-xl mb-12 border border-black/10">
          

          {currentStep === 1 && <SelectLabTest setValue={setValue} />}
          {currentStep === 2 && <SelectDate />}
          {currentStep === 3 && <AddPatientInfo />}
          {currentStep === 4 && <Payment />}
          <div className={`flex mt-6 ${currentStep > 1 ? "justify-between" : "justify-end"}`}>
            {currentStep > 1 && <button className="bg-indigo-600 text-white text-lg px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition duration-200 cursor-pointer"
              onClick={() => setCurrentStep(currentStep - 1)}
            >Previous</button>}
            <button 
             className="bg-indigo-600 text-white text-lg px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition duration-200 cursor-pointer"
             onClick={() => {
              if(currentStep + 1 <= 4) setCurrentStep(currentStep + 1)
             }}
            disabled={!value}
             >
              {currentStep < 4 ? "Next" : "Submit"}
            </button>
          </div>
        </section>
        {/* {
          <>
          currentStep === 1 && <SelectLabTest />,
          currentStep === 2 && <SelectDate />
          </>
        } */}
      </div>
    </>
  );
}

export default BookAppointment;
