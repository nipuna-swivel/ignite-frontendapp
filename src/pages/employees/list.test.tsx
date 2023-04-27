import { render} from "@testing-library/react";
import React from 'react';
import ListView from "../../components/templates/list";
import "@testing-library/jest-dom";

describe("ListView main page", () => {
    it("list view page should render correctly", () => {
        render(<ListView/>);
    })
})