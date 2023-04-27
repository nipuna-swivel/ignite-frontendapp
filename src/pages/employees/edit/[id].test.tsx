import { render} from "@testing-library/react";
import React from "react";
import EditPage from "./[id]";
import "@testing-library/jest-dom";

describe("Edit Page in pages folder", () => {
	it("should render", () => {
		render(<EditPage />);
	});
});
