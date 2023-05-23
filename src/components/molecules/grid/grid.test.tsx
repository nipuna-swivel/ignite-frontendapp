import { render, screen } from "@testing-library/react";
import GridX from "@/components/molecules/grid";
import '@testing-library/jest-dom'


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

describe("render gridview properly", () => {
	it("should render", () => {
		render(<GridX employeeData={employees} handleDelete={() => {}} />);

		const listItemElement = screen.getAllByRole("listitem");
		expect(listItemElement).toHaveLength(3); 

        const linkElement = screen.getAllByRole("link");
        expect(linkElement).toHaveLength(1);

        const buttonElement = screen.getAllByRole("button");
        expect(buttonElement).toHaveLength(2);
	});
});
