import React from 'react';
import { render, screen } from "@testing-library/react";
import EmployeeForm from "../organisms/employeeForm";
import '@testing-library/jest-dom/extend-expect';

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

describe( "Add Employee main component", () =>
{
    it( "Employee form should render correctly", () =>
    {
        render( <EmployeeForm employeedetails={ employees } func={ ()=>{} } /> );

        const divElement = screen.getByRole("link",{name:"List View"});
        expect( divElement).toBeInDocument( );
    } );
} );
