import React, { useState, useEffect, useCallback} from "react";
import { useAppDispatch, useAppSelector } from "@/components/hooks";
import { IconButton } from "@mui/material";
import { retrieveEmployee } from "../../slices/employeeSlice";
import Link from "next/link";
import {TableButton} from "../atoms";
import {GridButton} from "../atoms";
import {ThemeButton} from "../atoms";
import { EmployeeGridView } from "../organisms/Employee";
import {EmployeeListView } from "../organisms/Employee";

const ListView =()=> {
	const [toggle, setToggle] = useState(true); //this is used for maintaing the icon button.(Table and GridView).
	const handleClick = () => {
		setToggle(!toggle);
	};

	const employees = useAppSelector((state) => state.employees);
	const dispatch = useAppDispatch();

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
						<ThemeButton title={"Add"} variant={"contained"} />
					</Link>
					<IconButton onClick={handleClick}>
						{/* this is for changing Table view and grid view.*/}
						{toggle !== true ? <TableButton /> : <GridButton />}
					</IconButton>
				</div>
				<div>
					{toggle !== true ? (
						<EmployeeListView employees={employees?.employees || []} />
					) : (
						<EmployeeGridView employees={employees?.employees || []} />
					)}
				</div>
			</div>
		</div>
	);
} //end of listView

export default ListView;
