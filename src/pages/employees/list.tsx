import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
import TableView from "@/pages/employees/tableView";
import GridView from "@/pages/employees/gridView";
import { retrieveEmployee } from "@/slices/employeeSlice";
import Link from "next/link";
import { object } from "prop-types";


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
			<div className="container">
				<div className="float-xl-end mt-5 mb-2">
					{" "}
					<Link href="/employees/addEmployee">
						<Button variant="contained">Add Employee</Button>
					</Link>
					<IconButton onClick={handleClick}>
						{/* this is for changing Table view and grid view.*/}
						{toggle !== true ? <ViewModuleIcon /> : <ViewListIcon />}
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
