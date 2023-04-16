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
import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import EmployeeDataService from "@/services/employeeService";
import AlertService from "@/services/alertService";
import EditIconButton from "@/components/atoms/EditIconButton";
import DeleteIconButton from "@/components/atoms/DeleteIconButton";

function GridView(props: { employee: any }) {
	const router = useRouter();
	const [open, setOpen] = React.useState(false);

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
			<Fragment>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={{ lg: 6 }} columns={{ lg: 12 }}>
						{props.employees?.employees.map((emp) => (
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
			</Fragment>
		</div>
	);
} //end of gridview

export default GridView;
