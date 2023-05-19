import React from "react";
import { render } from "@testing-library/react";
import DeleteIconButton from "../DeleteIconButton";

describe("Working Button component", () => {
	it("should render", () => {
		render(<DeleteIconButton  />);		
	});
});