import { screen, render, fireEvent } from "@testing-library/react";
import TableView from "./employeeListView";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

const TableViewComponent = ({ href = "" }) => {
	const router = useRouter();
	return <button onClick={() => router.reload}></button>;
};

describe("next-router-mock", () => {
	it("mocks the useRouter hook", () => {
		mockRouter.push("/initial-path");

		render(<TableViewComponent href="/foo?bar=baz" />);

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

describe("EmployeeListView", () => {
	it("List view should render", () => {
		render(<TableView employeeData={employees} handleDelete={() => {}} />);
	});
});
