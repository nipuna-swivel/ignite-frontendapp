import * as React from "react";
import Header from "@/layouts/header";

export default function AppLayout(props: any) {
	return (
		<>
			<Header />
			<div className="container bg-white" >{props.children}</div>
		</>
	);
}
