import React, { ReactNode, useState } from 'react';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { Form, Formik, FormikConfig } from 'formik';

import { FormikStepProps } from './FormikStep';
import { MultiFormValuesType } from './MultiFormInitialValues';

type MultiSteperProps = {
  children: ReactNode;
} & FormikConfig<MultiFormValuesType>;

const FIRST_STEP_INDEX = 0;

export const MultiSteperForm = ({ children, ...props }: MultiSteperProps) => {
  const steps = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(FIRST_STEP_INDEX);

  const oneStep = 1;

  const currentChild = steps[step];
  const totalSteps = steps.length;
  // eslint-disable-next-line no-magic-numbers
  const isLastStep = step >= totalSteps - 1;

  const back = () => {
    if (step > FIRST_STEP_INDEX) {
      setStep((prev) => prev - oneStep);
    }
  };

  const next = () => {
    if (!isLastStep) {
      setStep((prev) => prev + oneStep);
    }
  };

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={(values, helpers) => {
        if (isLastStep) {
          return props.onSubmit(values, helpers);
        } else {
          next();
        }
      }}
    >
      {() => (
        <Form>
          <Stepper alternativeLabel activeStep={step}>
            {steps.map((step) => (
              <Step key={step.props.label}>
                <StepLabel>{step.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}
          <br />
          <Button disabled={step <= FIRST_STEP_INDEX} variant='contained' onClick={back}>
            Back
          </Button>
          <Button type='submit' variant='contained'>
            {isLastStep ? 'Submit' : 'Next'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
