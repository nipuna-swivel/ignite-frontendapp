import React, { FC } from "react";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import {EditIconButton} from "../../atoms";
import {DeleteIconButton} from "../../atoms";
import Link from "next/link";
import { IEmployee, IEmployeeState } from "@/services/interfaces";


interface Props {
	employees : IEmployee[]
	handleDelete : (id : string) => void
}
EditIconButton
export const GridX = ({employees, handleDelete} : Props) => {
	console.log("Grid passed data: ", employees);
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ lg: 6 }} columns={{ lg: 12 }}>
					{employees.map((emp: IEmployee) => (
						<Grid item lg={4} key={emp?._id}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									component="img"
									alt={emp?.fname}
									height="200"
									image={emp?.photoUrl}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5">
										{emp?.fname} {emp?.lname}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										<li>Email: {emp?.email}</li>
										<li>Phone: {emp?.contactNum}</li>
										{emp?.gender === "M" ? (
											<li>Gender : Male</li>
										) : (
											<li>Gender :Female</li>
										)}
									</Typography>
								</CardContent>
								<CardActions>
									<Link href={`/employees/edit/${emp?._id}`}>
										<EditIconButton />
									</Link>
									<IconButton onClick={() => handleDelete(emp?._id)}>
										<DeleteIconButton />
									</IconButton>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
};

