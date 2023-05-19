import React from "react";
import { Button } from "@mui/material";

export const ThemeButton = (props: any) => {
	return (
		<>
			<Button className={props.class} variant={props.variant}>
				{props.title}
			</Button>
		</>
	);
};
