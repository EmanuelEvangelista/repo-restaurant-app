import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import BookingForm from "./components/BookingForm/BookingForm.jsx";
import { RestaurantProvider } from "./RestaurantContext/restaurantContext.jsx";
import { fetchAPI } from "./utils/api.js";
import { MemoryRouter } from "react-router-dom";

// Helper para renderizar con Provider
const renderWithProvider = (ui) => {
  return render(<RestaurantProvider>{ui}</RestaurantProvider>);
};

describe("Restaurant App Tests", () => {
  //
  // 📌 TEST 1 — Render del formulario
  //
  test("renders the Booking Form title", () => {
    renderWithProvider(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>);
    const heading = screen.getByText("Choose Your Table");
    expect(heading).toBeInTheDocument();
  });

  //
  // 📌 TEST 2 — fetchAPI retorna array de horarios
  //
  test("fetchAPI returns array of times in HH:MM format", () => {
    const testDate = new Date("2025-11-12");
    const result = fetchAPI(testDate);

    // Verificar que es un array
    expect(Array.isArray(result)).toBe(true);

    // Verificar que tiene elementos
    expect(result.length).toBeGreaterThan(0);

    // Verificar que cada elemento tiene formato HH:MM
    result.forEach((time) => {
      expect(time).toMatch(/^\d{2}:\d{2}$/);
    });

    // Verificar que los horarios están entre 17:00 y 23:30
    result.forEach((time) => {
      const [hours] = time.split(":").map(Number);
      expect(hours).toBeGreaterThanOrEqual(17);
      expect(hours).toBeLessThanOrEqual(23);
    });
  });

  //
  // 📌 TEST 3 — fetchAPI es determinista (mismo resultado para misma fecha)
  //
  test("fetchAPI returns consistent times for the same date", () => {
    const testDate = new Date("2025-11-12");

    const result1 = fetchAPI(testDate);
    const result2 = fetchAPI(testDate);

    // Para la misma fecha, debe retornar exactamente los mismos horarios
    expect(result1).toEqual(result2);
  });
});
