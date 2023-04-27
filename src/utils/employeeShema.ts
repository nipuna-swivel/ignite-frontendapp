import * as yup from "yup";
    //regular expression for validating phone number.
	const phoneRegExp = /['0][\d]{2}[\d]{7}/;
	//validation schema for employee attributes.
	
	const employeeSchema = yup.object().shape({
		fname: yup
			.string()
			.min(6, "Too Short!")
			.max(10, "Too Long")
			.required("Required"),
		lname: yup
			.string()
			.min(6, "Too Short!")
			.max(10, "Too Long")
			.required("Required"),
		email: yup.string().email("Invalid email").required("Required"),
		contactNum: yup
			.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("Required"),
		gender: yup.string().required("Required"),
		photoUrl: yup.string().url().required("Required"),
	});
export default employeeSchema