import React from "react";
import { useState } from "react";
import { Button } from "../button";
import { CircleCheck } from "lucide-react";

interface IStep {
  title: string;
  component: JSX.Element;
}

export interface IStepper {
  steps: IStep[];
  onComplete: () => void;
  onCancel?: () => void;
  onNext: () => void;
  onPrevious: () => void;
  footerClassName?: string;
}

export const Stepper = (props: IStepper) => {
  const { steps, onComplete, onCancel, onPrevious, onNext, footerClassName } =
    props;
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep === steps.length) {
      onComplete();
    } else {
      onNext();
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      onPrevious();
    }
  };
  return (
    <>
      <div className="flex flex-row self-center align-center">
        {steps?.map((step, i) => (
          <>
            <div className="px-2" key={`step-${i}`}>
              <span className="flex items-center">
                <span className="flex flex-shrink-0 pr-2">
                  {i + 1 < currentStep ? (
                    <CircleCheck className="w-6 h-6 text-white fill-green-500" />
                  ) : (
                    <span
                      className={`content-around w-5 h-5 text-center text-xs justify-center rounded-full text-white-500 ${
                        i + 1 == currentStep
                          ? "bg-blue-500 text-white "
                          : "bg-gray-300"
                      }`}
                    >
                      {i + 1}
                    </span>
                  )}
                </span>

                <span
                  className={`text-xs ${
                    i + 1 < currentStep
                      ? "font-bold"
                      : i + 1 === currentStep
                      ? "font-bold text-black"
                      : "bg-dbdbdb"
                  }`}
                >
                  {step.title}
                </span>
              </span>
            </div>
            {i !== steps.length - 1 && (
              <div className="self-center flex-auto">
                <span className="block border-t-2 border-solid border-zinc-300"></span>
              </div>
            )}
          </>
        ))}
      </div>

      <div className="p-5">{steps[currentStep - 1].component}</div>

      <div className={footerClassName ? footerClassName : "flex flex-row"}>
        <div className="flex justify-start w-6/12">
          {currentStep > 1 && (
            <Button className="ml-3" variant="ghost" onClick={handlePrevious}>
              {"Previous"}
            </Button>
          )}
        </div>

        {currentStep <= steps.length && (
          <div className="flex justify-end w-6/12">
            {onCancel && (
              <Button
                className="ml-5"
                variant="secondary"
                onClick={() => {
                  onCancel();
                }}
              >
                {"Cancel"}
              </Button>
            )}
            <Button className="ml-5" onClick={handleNext}>
              {currentStep === steps.length ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
