import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { EditEmployeeForm } from "../../organisms/Employee";
import { useAppDispatch, useAppSelector } from "@/components/hooks";
import { findEmployeeById, reSetUpdate } from "../../../slices/employeeSlice";
import { updateEmployee } from "@/slices/employeeSlice";
import Loading from "../../atoms/Loading";
import { toast } from "react-hot-toast";

const EditEmployee = () => {
	const { query } = useRouter();
	const router = useRouter();
	let empId = query.id as string;

	const employee = useAppSelector((state: any) => state.employees.employee);
	const dispatch = useAppDispatch();
	const isUpdated = useAppSelector((state) => state.employees.isUpdated);
	const loading = useAppSelector((state) => state.employees.loading);
	const error = useAppSelector((state) => state.employees.error);

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

	useEffect(() => {
		if (isUpdated) {
			router.push("/");
		}
		return () => {
			dispatch(reSetUpdate());
		};
	}, [isUpdated]);

	useEffect(() => {
		if (error) {
			toast.error(error.message);
		}
	}, [error]);

	if (loading) {
		return <Loading />;
	}

	return (
		<div>
			<EditEmployeeForm employeedetails={employee} func={updateEmploye} />
		</div>
	);
};

export default EditEmployee;
