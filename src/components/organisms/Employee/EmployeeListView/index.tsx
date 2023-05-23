import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { deleteEmployee } from "@/slices/employeeSlice";
import { IEmployee, IEmployeeState } from "@/services/interfaces";
import { useAppDispatch, useAppSelector } from "@/components/hooks";
import TableList from "@/components/molecules/table";
import { toast } from "react-hot-toast";
import Loading from "@/components/atoms/Loading";

interface Props {
	employees: IEmployee[];
	loading: IEmployeeState;
	error: IEmployeeState;
}

//start of TableView Component.
export const EmployeeListView = ({ employees }: Props) => {
	console.log("EmployeeListComponent data", employees);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.employees.loading);
	const error = useAppSelector((state) => state.employees.error);
	const handleDelete = (id: string) => {
		try {
			dispatch(deleteEmployee(id));
			//router.reload();
		} catch (error) {
			console.log("error in deleting employee", error);
		}
	};

	useEffect(() => {
		if (error) {
			toast.error(error.massage);
		}
	}, [error]);

	if (loading) {
		return <Loading />;
	}

	//start of return statement.
	return (
		<div className="mt-2 bg-white">
			{" "}
			<TableList employees={employees || []} handleDelete={handleDelete} />
		</div>
	); //end of return statement.
}; //end of the tableViewComponent.
