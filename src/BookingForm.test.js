// Import necessary dependencies for testing
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers

// Import the functions to be tested
import { initializeTimes, updateTimes } from "../src/components/Main";

// Mock fetchAPI function
jest.mock("../src/api", () => ({
  fetchAPI: jest
    .fn()
    .mockResolvedValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]),
}));

// Test for initializeTimes function
test("initializeTimes returns the expected initial times", async () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // Act
  const result = await initializeTimes();

  // Assert
  expect(result).toEqual(expectedTimes);
});

// Test for updateTimes function
test("updateTimes updates the available booking times based on the selected date", async () => {
  // Arrange
  const selectedDate = "2024-02-14";
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Assuming the same initial times for simplicity
  const dispatch = jest.fn(); // Mock dispatch function

  // Act
  await updateTimes(selectedDate, dispatch);

  // Assert
  expect(dispatch).toHaveBeenCalledWith({
    type: "UPDATE_TIMES",
    payload: expectedTimes,
  });
});
