import React from "react";
import { useRouter } from "next/router";
import EmployeeForm from "../organisms/employeeForm";
import { useAppDispatch} from "@/components/hooks";
import { createEmployee } from "@/slices/employeeSlice";

function AddEmployee() {
	const router = useRouter();
	const dispatch = useAppDispatch();
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
		router.reload();
		router.push("/");
	};

	return (
		<div>
			<EmployeeForm func={saveEmployee} employeedetails={null} />
		</div>
	);
}

export default AddEmployee;
