import React from "react";
import { useRouter } from "next/router";
import EmployeeForm from "@/components/EmployeeForm";
import EmployeeDataService from "@/services/employeeService";
import AlertService from "@/services/alertService";

function addEmployee() {
	const router = useRouter();
	const saveEmployee = async (data: {
		fname: string;
		lname: string;
		email: string | null;
		contactNum: string;
		gender: string;
	}) => {
		console.log("pulled data :", data);

		try {
			await EmployeeDataService.create({
				fname: data.fname,
				lname: data.lname,
				email: data.email,
				contactNum: data.contactNum,
				gender: data.gender,
				photoUrl: "https://randomuser.me/api/portraits/men/30.jpg",
			});
			AlertService.success("Succesfully deleted !!", "success");
			router.push("/");
		} catch (error) {
			console.log("error creating employee :", error);
			AlertService.error("Success!!", "error");
		}
	};
	return (
		<div>
			<EmployeeForm func={saveEmployee} employeedetails={null} />
		</div>
	);
}

export default addEmployee;
