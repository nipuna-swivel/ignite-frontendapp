import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import TableView from "../organisms/employeeListView";
import GridView from "../organisms/employeeGridView";
import { retrieveEmployee } from "../../slices/employeeSlice";
import Link from "next/link";
import TableButton from "../atoms/TableButton";
import GridButton from "../atoms/GridButton";
import Button from "../atoms/button";

function ListView() {
	const [toggle, setToggle] = useState(true); //this is used for maintaing the icon button.(Table and GridView).
	const handleClick = () => {
		setToggle(!toggle);
	};

	const employees = useSelector((state) => state.employees);
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
		return dispatch(retrieveEmployee());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);

	return (
		<div>
			<div className="container 	bg-white">
				<div className="float-xl-end mt-5 mb-2 bg-white">
					{" "}
					<Link href="/employees/addEmployee">
						<Button title={"Add"} variant={"contained"} />
					</Link>
					<IconButton onClick={handleClick}>
						{/* this is for changing Table view and grid view.*/}
						{toggle !== true ? <TableButton /> : <GridButton />}
					</IconButton>
				</div>
				<div>
					{toggle !== true ? (
						<TableView employees={employees} />
					) : (
						<GridView employees={employees} />
					)}
				</div>
			</div>
		</div>
	);
} //end of listView

export default ListView;
