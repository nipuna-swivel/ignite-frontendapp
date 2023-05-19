import React from "react";
import { render } from "@testing-library/react";
import {TableButton} from "./index";

describe("Working Table Button component", () => {
	it("should render", () => {
		render(<TableButton  />);		
	});
});