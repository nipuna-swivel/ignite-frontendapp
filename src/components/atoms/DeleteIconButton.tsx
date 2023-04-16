import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteIconButton = () => {
	return (
		<>
			<IconButton>
				<DeleteIcon color="primary" />
			</IconButton>
		</>
	);
};

export default DeleteIconButton;
