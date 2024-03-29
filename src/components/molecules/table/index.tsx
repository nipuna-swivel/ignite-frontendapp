import React from "react";
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
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IEmployee } from "@/services/interfaces";

interface Props {
	employees: IEmployee[];
	handleDelete: (id: string) => void;
}

export const TableList = ({ employees, handleDelete }: Props) => {
	console.log("employeData:", employees);

	return (
		<div>
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
						{employees.map((emp: IEmployee) => (
							<TableRow hover key={emp._id}>
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
	);
};
