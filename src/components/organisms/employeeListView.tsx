import React from "react";
import { useRouter } from "next/router";
import TableForm from "../molecules/table";
import { deleteEmployee } from "@/slices/employeeSlice";
import { useDispatch } from "react-redux";
import { IEmployee } from "@/services/interfaces";

//start of TableView Component.
function TableView(employees: IEmployee ) {

	console.log("EmployeeListComponent data", employees.employees);

	const router = useRouter();
	const dispatch = useDispatch();

	const handleDelete = (id: string) => {
		try {
			dispatch(deleteEmployee(id));
			router.reload();
		} catch (error) {
			console.log("error in deleting employee", error);
		}
	};
	//start of return statement.
	return (
		<div className="mt-2 bg-white">
			{" "}
			<TableForm
				employeeData={employees.employees}
				handleDelete={handleDelete}
			/>
		</div>
	); //end of return statement.
} //end of the tableViewComponent.

export default TableView;
