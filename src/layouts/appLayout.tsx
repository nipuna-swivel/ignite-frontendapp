import * as React from "react";
import HeaderBar from "./HeaderBar";

const AppLayout=(props:any)=> {
	return (
		<>
			<HeaderBar />
			<div className="container bg-white" >{props.children}</div>
		</>
	);
}
export default AppLayout