import React, { useEffect, useState, FC } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useFormik } from "formik";
import employeeSchema from "@/utils/employeeShema";
import { IEditEmployeeFormProps } from "@/types";
import AlertMessage from "@/shared/alertMessage";
//employee form functional component start.
const EditEmployeeForm: FC<IEditEmployeeFormProps> = ({
	employeedetails,
	func,
}) => {
	let data = employeedetails;
	console.log("passed data", employeedetails);

	// selection options for gender selection.
	const options = [
		{ value: "", label: "Choose" },
		{ value: "M", label: "Male" },
		{ value: "F", label: "Female" },
	];
	//form configuration regurding the formik.
	const formik = useFormik({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			contactNum: "",
			gender: "",
			photoUrl: "https://randomuser.me/api/portraits/men/30.jpg",
		},

		validationSchema: employeeSchema,

		onSubmit: (values) => {
			func(values);
			console.log("submitted", values);
		},
	});

	useEffect(() => {
		formik.setFieldValue("fname", employeedetails?.fname);
		formik.setFieldValue("lname", employeedetails?.lname);
		formik.setFieldValue("email", employeedetails?.email);
		formik.setFieldValue("contactNum", employeedetails?.contactNum);
		formik.setFieldValue("gender", employeedetails?.gender);
	}, [employeedetails]);
	//start return statement.
	return (
		<>
			
			<div className="d-flex justify-content-end">
				<Link href="/employees/list">
					<Button className="mt-2 mb-2 btn-lg" variant="contained">
						List View
					</Button>
				</Link>
			</div>
			<div className=" card w-100 p-3">
			
				<div className=" d-flex justify-content-center m-5">
					<form className="w-100 p-3" onSubmit={formik.handleSubmit}>
						<div className="col-md-4">
							<label htmlFor="validationCustom01" className="form-label">
								First name
							</label>
							<input
								type="text"
								className={`form-control ${
									formik.touched.fname && formik.errors.fname
										? "border-danger border-3"
										: "border-secondary-subtle border-1"
								}`}
								id="fname"
								name="fname"
								required
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.fname}
							/>
							{formik.touched.fname && formik.errors.fname && (
								<div className="text-danger">{formik.errors.fname}</div>
							)}
						</div>
						<div className="col-md-4">
							<label htmlFor="validationCustom01" className="form-label">
								Last name
							</label>
							<input
								type="text"
								className={`form-control ${
									formik.touched.lname && formik.errors.lname
										? "border-danger border-3"
										: "border-secondary-subtle border-1"
								}`}
								id="lname"
								onChange={formik.handleChange}
								value={formik.values.lname}
								onBlur={formik.handleBlur}
								name="lname"
								required
							/>
							{formik.touched.lname && formik.errors.lname && (
								<span className="text-danger">{formik.errors.lname}</span>
							)}
						</div>
						<div className="col-md-4">
							<label htmlFor="validationCustom01" className="form-label">
								Email
							</label>
							<input
								type="text"
								className={`form-control ${
									formik.touched.email && formik.errors.email
										? "border-danger border-3"
										: "border-secondary-subtle border-1"
								}`}
								id="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								name="email"
								required
							/>
							{formik.touched.email && formik.errors.email && (
								<span className="text-danger">{formik.errors.email}</span>
							)}
						</div>
						<div className="col-md-4">
							<label htmlFor="validationCustom01" className="form-label">
								Phone
							</label>
							<input
								type="text"
								className={`form-control ${
									formik.touched.contactNum && formik.errors.contactNum
										? "border-danger border-3"
										: "border-secondary-subtle border-1"
								}`}
								id="contactNum"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.contactNum}
								name="contactNum"
								required
							/>
							{formik.touched.contactNum && formik.errors.contactNum && (
								<span className="text-danger">{formik.errors.contactNum}</span>
							)}
						</div>
						<div className="col-md-4">
							<label htmlFor="validationCustom01" className="form-label">
								Gender
							</label>

							<select
								className={`form-select ${
									formik.touched.gender && formik.errors.gender
										? "border-danger border-3"
										: "border-secondary-subtle border-1"
								}`}
								id="gender"
								name="gender"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.gender}
							>
								{options.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							{formik.touched.gender && formik.errors.gender && (
								<span className="text-danger">{formik.errors.gender}</span>
							)}
						</div>
						<div className="col-auto mt-3">
							<button type="submit" className="btn btn-outline-primary">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	); //end of return statement.
}; //end of function.

export default EditEmployeeForm;
