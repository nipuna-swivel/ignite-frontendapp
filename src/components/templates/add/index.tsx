import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { EditEmployeeForm } from "../../organisms/Employee";
import { useAppDispatch, useAppSelector } from "@/components/hooks";
import { createEmployee, reSetAdd } from "@/slices/employeeSlice";
import { toast } from "react-hot-toast";
import Loading from "../../atoms/Loading";

function AddEmployee() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const isAdded = useAppSelector((state) => state.employees.isAdded);
	const loading = useAppSelector((state) => state.employees.loading);
	const error = useAppSelector((state) => state.employees.error);
	const saveEmployee = (data: {
		fname: string;
		lname: string;
		email: string | null;
		contactNum: string;
		gender: string;
	}) => {
		dispatch(
			createEmployee({
				fname: data.fname,
				lname: data.lname,
				email: data.email,
				contactNum: data.contactNum,
				gender: data.gender,
				photoUrl: "https://randomuser.me/api/portraits/men/30.jpg",
			})
		);
	};

	console.log("is Added staus", isAdded);

	useEffect(() => {
		if (isAdded) {
			router.push("/");
		}
		return () => {
			dispatch(reSetAdd());
		};
	}, [isAdded]);

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
			<EditEmployeeForm func={saveEmployee} />
		</div>
	);
}

export default AddEmployee;
