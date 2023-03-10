import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header(props: any) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ padding: 3 }}>
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit" component="div">
						<h4>Employee Manager</h4>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
