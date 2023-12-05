import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectButton from "../components/SelectButton";

test("SelectButton changes color on click", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <SelectButton onClick={onClickMock}>Test Button</SelectButton>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const button = getByText("Test Button");
  fireEvent.click(button);

  expect(button).toHaveStyle("backgroundColor: skyblue");
});
