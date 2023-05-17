import React,{FC} from "react";
import { useRouter } from "next/router";
import GridX from "../molecules/grid";
import { deleteEmployee } from "@/slices/employeeSlice";
import { useAppDispatch} from "@/components/hooks";
import { IEmployee, IEmployeeState,IEditEmployeeFormProps } from "@/services/interfaces";

const GridView:FC<IEmployeeState>=(props: { employees: IEditEmployeeFormProps })=> {
	const router = useRouter();
	const dispatch = useAppDispatch();

	console.log("grid component passed data", props);

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
			<GridX employeeData={props.employees} handleDelete={handleDelete} />
		</div>
	);
} //end of gridview

export default GridView;
