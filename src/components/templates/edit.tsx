import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {EditEmployeeForm} from "../organisms/Employee";
import { useAppDispatch, useAppSelector } from "@/components/hooks";
import { findEmployeeById } from "../../slices/employeeSlice";
import { updateEmployee } from "@/slices/employeeSlice";

const EditEmployee = () => {
	const { query } = useRouter();
	let empId = query.id as string;

	const employee = useAppSelector((state:any) => state.employees.employee);
	const dispatch = useAppDispatch();

	const initFetch = () => {
		return dispatch(findEmployeeById(empId));
	};

	useEffect(() => {
		console.log("Employee ID :", empId);
		initFetch();
	}, [empId]);

	

	const updateEmploye = (data: any) => {
		dispatch(updateEmployee({ empId, data }));
	};

	return (
		<div>
			<EditEmployeeForm employeedetails={employee} func={updateEmploye} />
		</div>
	);
};

export default EditEmployee;
