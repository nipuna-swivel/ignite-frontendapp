import {render,screen,fireEvent} from "@testing-library/react";
import {EmployeeGridView} from "./index";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

const GridViewComponent = ({ href = "" }) => {
	const router = useRouter();
	return <button onClick={() => router.reload}></button>;
};

describe("next-router-mock", () => {
	it("mocks the useRouter hook", () => {
		mockRouter.push("/initial-path");

		render(<GridViewComponent href="/foo?bar=baz" />);

		fireEvent.click(screen.getByRole("button"));
	});
});

describe("GridView", () => {
    it(" grid view should render correctly", () => {
        render(<EmployeeGridView employees={ [] } />);
    })
})