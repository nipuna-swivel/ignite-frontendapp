import { render } from "@testing-library/react";
import { Button } from "@mui/material";

const props = {
	class: "mt-2 mb-2 btn-lg",
	variant: "contained",
};

describe("Working Button component", () => {
	it("should render", () => {
		render(<Button />);		
	});
});
