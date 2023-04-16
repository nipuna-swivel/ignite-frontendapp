import React from "react";
import EmployeeDataService from "@/services/employeeService";
import AlertService from "@/services/alertService";
import { useRouter } from "next/router";
import TableForm from "@/components/molecules/table";
//start of TableView Component.
function TableView(employees: any) {
	console.log("EmployeeListComponent", employees.employees);
	const router = useRouter();
	const handleDelete = async (id: string) => {
		try {
			await EmployeeDataService.remove(id);
			router.reload();
			AlertService.success("Succesfully deleted !!", "success");
		} catch (error) {
			console.log("error deleting employee", error);
			AlertService.error("Success!!", "error");
		}
	};
	//start of return statement.
	return (
		<div className="mt-2">
			{" "}
			<TableForm
				employeeData={employees.employees}
				handleDelete={handleDelete}
			/>
		</div>
	); //end of return statement.
} //end of the tableViewComponent.

export default TableView;
