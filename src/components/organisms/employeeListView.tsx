import React from "react";
import { useRouter } from "next/router";
import TableForm from "../molecules/table";
import { deleteEmployee } from "@/slices/employeeSlice";
import { IEmployee ,IEmployeeState} from "@/services/interfaces";
import { useAppDispatch} from "@/components/hooks";

//start of TableView Component.
function TableView(employees: IEmployeeState ) {

	console.log("EmployeeListComponent data", employees.employees);

	const router = useRouter();
	const dispatch = useAppDispatch();

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
