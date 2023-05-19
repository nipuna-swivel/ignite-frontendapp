import { screen, render } from "@testing-library/react";
import {EditEmployeeForm} from "./index";
import "@testing-library/jest-dom";


const employees = [
	{
		id: "1",
		fname: "Nipuna",
		lname: "Bandara",
		email: "nipuna@gmail.com",
		contactNum: "+94776876567",
		gender: "M",
		photoUrl: "https://randomuser.me/api/portraits/men/30.jpg",
	},
];

describe("Employee form rendered properly", () => {
	it("Employee form should render", () => {
		render(<EditEmployeeForm employeedetails={employees} func={() => {}} />);

		const buttonElement = screen.getByRole("button", { name: "List View" });
		expect(buttonElement).toBeInDocument();

		const submitButtonElement = screen.getByRole("button", { name: "Save" });
		expect(submitButtonElement).toBeInDocument();

		const fnameElement = screen.getByRole("textbox",{name:'fname'});
		expect(fnameElement).toBeInDocument();

		const lnameElement = screen.getByRole("textbox");
		expect(lnameElement).toBeInDocument();
	});

	it("Employee Form elements testing", async () => {
		render(<EditEmployeeForm employeedetails={employees} func={() => {}} />);
		
		expect(screen.getByRole("textbox", { name: "fname" })).toHaveAttribute(
			"value",
			employees.fname
		);
		expect(screen.getByRole("textbox", { name: "lname" })).toHaveAttribute(
			"value",
			employees.lname
		);
		expect(screen.getByRole("textbox", { name: "email" })).toHaveAttribute(
			"value",
			employees.email
		);
		expect(screen.getByRole("textbox", { name: "contactNum" })).toHaveAttribute(
			"value",
			employees.contactNum
		);

      
       
	 });
});
