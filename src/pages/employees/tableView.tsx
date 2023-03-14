import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import EmployeeDataService from "@/services/employeeService";
import AlertService from "@/services/alertService";
import { useRouter } from "next/router";
//start of TableView Component.
function TableView(props: { employee: any }) {
	const router = useRouter();
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
	//start of return statement.
	return (
		<div className="mt-2">
			{" "}
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Image</TableCell>
							<TableCell>FirstName</TableCell>
							<TableCell>LastName</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.employees?.employees.map((emp) => (
							<TableRow hover key={emp.id}>
								<TableCell>
									<img src={emp?.photoUrl} alt={"employee image"} />
								</TableCell>
								<TableCell> {emp?.fname} </TableCell>
								<TableCell> {emp?.lname} </TableCell>
								<TableCell> {emp?.email}</TableCell>
								<TableCell> {emp?.contactNum}</TableCell>

								{emp?.gender === "M" ? (
									<TableCell> Male</TableCell>
								) : (
									<TableCell> Feale</TableCell>
								)}
								<TableCell>
									<Link href={`/employees/edit/${emp._id}`}>
										<EditIcon color="primary" />
									</Link>
									<IconButton onClick={() => handleDelete(emp._id)}>
										<DeleteIcon color="primary" />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	); //end of return statement.
} //end of the tableViewComponent.

export default TableView;
