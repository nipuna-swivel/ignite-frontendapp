import React from "react";
import { render } from "@testing-library/react";
import EditIconButton from "./EditIconButton";

describe("Working Button component", () => {
	it("should render", () => {
		render(<EditIconButton  />);		
	});
});