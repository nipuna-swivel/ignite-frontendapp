import React from "react";
import { useRouter } from "next/router";
import EmployeeDataService from "@/services/employeeService";
import AlertService from "@/services/alertService";
import GridX from "@/components/molecules/grid";

function GridView(props) {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);
	console.log("grid component passed data1", props);
	const handleDelete = async (id: string) => {
		try {
			await EmployeeDataService.remove(id);
			router.reload();
			AlertService.success("Succesfully deleted !!", "success");
		} catch (error) {
			console.log("error deleting employee", error);
			AlertService.error("Success!!", "error");
		}
	};

	return (
		<div className="">
			<GridX employeeData={props.employees} handleDelete={handleDelete} />
		</div>
	);
} //end of gridview

export default GridView;
