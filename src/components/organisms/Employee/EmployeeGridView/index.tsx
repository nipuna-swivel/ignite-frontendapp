import React from "react";
import { useRouter } from "next/router";
import GridX from "../../../molecules/grid";
import { deleteEmployee } from "@/slices/employeeSlice";
import { useAppDispatch} from "@/components/hooks";
import { IEmployee } from "@/services/interfaces";

interface Props {
	employees : IEmployee[];
}

export const EmployeeGridView = ({ employees }:Props)=> {
	const router = useRouter();
	const dispatch = useAppDispatch();

	console.log("grid component passed data", employees);

	const handleDelete = (id: string) => {
		try {
			dispatch(deleteEmployee(id));
			router.reload();
		} catch (error) {
			console.log("error in deleting employee", error);
		}
		
	};

	return (
		<div className="bg-white">
			 <GridX employees={employees || []}
				handleDelete={handleDelete}/> 
		</div>
	);
}

// export default EmployeeGridView;
