import React from "react";
import { render } from "@testing-library/react";
import EditIconButton from "./index";

describe("Working Button component", () => {
	it("should render", () => {
		render(<EditIconButton  />);		
	});
});