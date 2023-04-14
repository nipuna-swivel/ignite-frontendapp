import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import TableView from "@/components/organisms/employeeListView";
import GridView from "@/components/organisms/employeeGridView";
import { retrieveEmployee } from "@/slices/employeeSlice";
import Link from "next/link";
import AddButton from "@/components/AddButton";
import TableButton from "@/components/TableButton";
import GridButton from "@/components/GridButton";


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
						
						<AddButton/>
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