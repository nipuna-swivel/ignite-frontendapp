import React from "react";
import { Button } from "@mui/material";

const Buttonx = (props: any) => {
	return (
		<>
			<Button className={props.class} variant={props.variant}>
				{props.title}
			</Button>
		</>
	);
};
export default Buttonx;
