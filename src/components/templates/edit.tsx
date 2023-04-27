import React, { useEffect } from "react";
import { useRouter } from "next/router";
import EditEmployeeForm from "../organisms/employeeForm";
import { useDispatch, useSelector } from "react-redux";
import EmployeeDataService from "../../services/employeeService";
import { findEmployeeById } from "../../slices/employeeSlice";
import AlertService from "../../services/alertService";

const EditEmployee=()=> {
	const router = useRouter();
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
		console.log("Employee ID :",empId);
		initFetch();
	}, [empId]);

	console.log("redux store value :", employee);
	

	const updateEmployee = async (data) => {
		console.log("pulled data from edit form :", data);

		try {
			await EmployeeDataService.update(empId, data);
			router.reload();
			AlertService.success("Success!!", "success");
		} catch (error) {
			console.log("error creating employee :", error);
		}
	};

	return (
		<div>
			<EditEmployeeForm employeedetails={employee} func={updateEmployee} />
		</div>
	);
}

export default EditEmployee;
