import React from "react";
import { Button } from "@mui/material";

const Buttonx = (props: any) => {
	return (
		<>
			<Button variant="contained">{props.title}</Button>
		</>
	);
};

export default Buttonx;
