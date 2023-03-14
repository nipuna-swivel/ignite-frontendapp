
import { render, screen, waitFor } from "@testing-library/react";
import EmployeLists from "./index";

beforeEach(() => {
  render(
  
        <EmployeLists />
      
  );
});

describe("Employe List display", () => {
  test("should add Employe Button", async () => {
    await waitFor(() => {
        const loadingText = screen.queryByText(/Add Employee/i);
      expect(loadingText).toBeInTheDocument();
    });
  });
  test('Should hide loading when successfully loaded', async () => {
    await waitFor(() => {
      const loadingText = screen.queryByText(/Add Employee/i);
      expect(loadingText).toBeInTheDocument();
    });
  });
});