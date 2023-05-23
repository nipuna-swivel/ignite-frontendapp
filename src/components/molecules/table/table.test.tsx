import React from "react";
import { render, screen } from "@testing-library/react";
import {TableList} from "@/components/molecules/table";
import "@testing-library/jest-dom";

const employees = {
	employees: [
		{
			id: 1,
			fname: "Henriia",
			lname: "Rodrigue",
			email: "darrin_Rippin@gmail.com",
			contactNum: "0771277218",
			gender: "M",
			photoUrl: "https://randomuser.me/api/portraits/men/30.jpg",
		}
	
	],
};

describe("Table", () => {
	it("renders table headers and data", () => {
		render(<TableList employeeData={employees} handleDelete={() => {}} />);

		expect(screen.getByText("Image")).toBeInTheDocument();
		expect(screen.getByText("FirstName")).toBeInTheDocument();
		expect(screen.getByText("LastName")).toBeInTheDocument();
		expect(screen.getByText("Email")).toBeInTheDocument();
		expect(screen.getByText("Phone")).toBeInTheDocument();
		expect(screen.getByText("Gender")).toBeInTheDocument();
		expect(screen.getByText("Actions")).toBeInTheDocument();

		
		expect(screen.getByText("Henriia")).toBeInTheDocument();
		expect(screen.getByText("Rodrigue")).toBeInTheDocument();
		expect(screen.getByText("darrin_Rippin@gmail.com")).toBeInTheDocument();
		expect(screen.getByText("0771277218")).toBeInTheDocument();
		expect(screen.getByText("Male")).toBeInTheDocument();
		
	});
});
