import { render, screen } from "@testing-library/react";
import TableView from "../organisms/old/employeeListView";
import GridView from "../organisms/old/employeeGridView";
import "@testing-library/jest-dom";

describe("ListView main component", () => {
	it("Add button render correctly", () => {
		const addButtonElement = screen.getByRole("button");
		expect(addButtonElement).toBeInDocument();
	});

	it("Table view should render correctly", async () => {
		render(<TableView />);
		const TableButton = await screen.findByRole("button", {
			name: "TableButton",
		});
		expect(TableButton).toBeInTheDocument();
	});

	it("Grid view should render correctly", async () => {
		render(<GridView />);
		const GridButton = await screen.findByRole("button", {
			name: "TableButton",
		});
		expect(GridButton).toBeInTheDocument();
	});
});


