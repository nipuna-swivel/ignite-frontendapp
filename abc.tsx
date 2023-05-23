import React from "react";
const AddEmployee = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { loading, addedEmployee, error } = useSelector(
		(state) => state.employee.addEmployee
	);

	useEffect(() => {
		if (addedEmployee) {
			router.push("/");
		}
	}, [addedEmployee]);


	useEffect(() => {
		if (error) {
			toast.error(error.msg);
		}
	}, [error]);

    
	const handleAddClick = (data) => {
		dispatch(addEmployee(data));
	};
	if (loading) {
		return <span>Loading</span>;
	}
	return (
		<div>
			{" "}
			<span>AddEmployee form</span>{" "}
			<button onClick={handleAddClick}>Submit</button>{" "}
		</div>
	);
};
export default AddEmployee;
