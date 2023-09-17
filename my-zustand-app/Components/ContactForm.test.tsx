import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("updates the form data when input fields change", () => {
  const { getByLabelText } = render(<ContactForm />);
  const emailInput = getByLabelText("Your Email") as HTMLInputElement;
  const messageInput = getByLabelText("Your Message") as HTMLInputElement;

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(messageInput, { target: { value: "Test message" } });

  expect(emailInput.value).toBe("test@example.com");
  expect(messageInput.value).toBe("Test message");
});
