import { render} from "@testing-library/react";
import React from "react";
import AddEmployee from "./addEmployee";
import "@testing-library/jest-dom";

describe("Add Page in pages folder", () => {
	it("Add page should render", () => {
		render(<AddEmployee />);
	});
});