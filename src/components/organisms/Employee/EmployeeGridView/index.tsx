import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {GridX} from "@/components/molecules/grid";
import { deleteEmployee } from "@/slices/employeeSlice";
import { useAppDispatch, useAppSelector } from "@/components/hooks";
import { IEmployee, IEmployeeState } from "@/services/interfaces";
import { toast } from "react-hot-toast";
import Loading from "@/components/atoms/Loading";

interface Props {
	employees: IEmployee[];
	loading: IEmployeeState;
	error: IEmployeeState;
}

export const EmployeeGridView = ({ employees }: Props) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.employees.loading);
	const error = useAppSelector((state) => state.employees.error);

	console.log("grid component passed data", employees);

	const handleDelete = (id: string) => {
		try {
			dispatch(deleteEmployee(id));
		} catch (error) {
			console.log("error in deleting employee", error);
		}
	};
	useEffect(() => {
		if (error) {
			toast.error(error.massage);
		}
	}, [error]);
	console.log("Loading...", loading);
	if (loading) {
		return <Loading />;
	}

	return (
		<div className="bg-white">
			<GridX employees={employees || []} handleDelete={handleDelete} />
		</div>
	);
};

// export default EmployeeGridView;
