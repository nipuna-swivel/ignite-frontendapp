import React from "react";
import { useRouter } from "next/router";
import { deleteEmployee } from "@/slices/employeeSlice";
import { IEmployee} from "@/services/interfaces";
import { useAppDispatch} from "@/components/hooks";
import TableList from "@/components/molecules/table";

interface Props {
	employees : IEmployee[];
}

//start of TableView Component.
export const EmployeeListView = ({employees}: Props )=> {

	console.log("EmployeeListComponent data", employees);

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
			<TableList
				employees={employees || []}
				handleDelete={handleDelete}
			/>
		</div>
	); //end of return statement.
} //end of the tableViewComponent.


