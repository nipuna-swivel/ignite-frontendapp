import React from "react";
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
import EditIconButton from "../atoms/EditIconButton";
import DeleteIconButton from "../atoms/DeleteIconButton";
import Link from "next/link";

function GridX({employeeData, handleDelete}) {
	console.log("Grid passed data: ", employeeData);
	return (
		<div>
			
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={{ lg: 6 }} columns={{ lg: 12 }}>
						{employeeData?.employees.map((emp) => (
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
export default GridX;
