import React from 'react';
import { render, screen } from "@testing-library/react";
import HeaderBar from "./HeaderBar";
import "@testing-library/jest-dom";

describe("HeaderBar", () => {
	it("Header Bar renders correcly", () => {
		render(<HeaderBar/> );
		const textElement = screen.getByText("Employee Manager");
		expect(textElement).toBeInTheDocument();
	});
});

test("Header Bar",()=>{
	render(<HeaderBar/>)
	const textElement = screen.getByText("Employee Manager");
	expect(textElement).toBeInTheDocument();
})