import React from 'react';
import { render, screen,fireEvent } from "@testing-library/react";
import EmployeeForm from "../organisms/old/employeeForm";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

const EmployeeFormComponent = ({ href = "" }) => {
	const router = useRouter();
	return <button onClick={() => router.reload}></button>;
};

describe("next-router-mock", () => {
	it("mocks the useRouter hook", () => {
		mockRouter.push("/initial-path");

		render(<EmployeeFormComponent href="/foo?bar=baz" />);

		fireEvent.click(screen.getByRole("button"));
	});
});

const employees = {
	employees: [
		{
			_id: "1",
			fname: "Nipuna",
			lname: "Bandara",
			email: "nipuna@gmail.com",
			contactNum: "+94776876567",
			gender: "M",
			photoUrl: "https://randomuser.me/api/portraits/men/30.jpg",
		},
	],
};

describe( "Edit Employee main component", () =>
{
    it( "Edit Employee form should render correctly", () =>
    {
        render( <EmployeeForm employeedetails={ employees } func={ ()=>{} } /> );

      
    } );
} );