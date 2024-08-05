import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playDefault = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the button is rendered with the default text
  const button = await canvas.findByRole('button', { name: /SUBMIT/i });
  expect(button).toBeInTheDocument();

  // Check if the button does not have the processing class
  expect(button).not.toHaveClass('disabled:animate-pulse');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playProcessing = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if the button is rendered with the "Processing..." text
  const button = await canvas.findByRole('button', { name: /Processing.../i });
  expect(button).toBeInTheDocument();

  // Check if the button has the processing class
  expect(button).toHaveClass('disabled:animate-pulse');

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};