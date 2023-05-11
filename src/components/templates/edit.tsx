import React, { useEffect } from "react";
import { useRouter } from "next/router";
import EditEmployeeForm from "../organisms/employeeForm";
import { useDispatch, useSelector } from "react-redux";
import { findEmployeeById } from "../../slices/employeeSlice";
import { updateEmployee } from "@/slices/employeeSlice";

const EditEmployee = () => {
	
	const { query } = useRouter();
	console.log("id :", query.id);
	let empId = query.id;
	console.log("emp by id :", empId);

	const employee = useSelector((state) => state.employees.employee);
	const dispatch = useDispatch();

	const initFetch = () => {
		return dispatch(findEmployeeById(empId));
	};

	useEffect(() => {
		console.log("Employee ID :", empId);
		initFetch();
	}, [empId]);

	console.log("redux store value :", employee);

	const updateEmploye = (data: any) => {
		try {
			dispatch(updateEmployee({ empId, data }));
			
		} catch (error) {
			console.log("error creating employee :", error);
		}
	};

	return (
		<div>
			<EditEmployeeForm employeedetails={employee} func={updateEmploye} />
		</div>
	);
};

export default EditEmployee;
