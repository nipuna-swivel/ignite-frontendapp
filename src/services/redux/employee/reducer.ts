import { createReducer } from "@reduxjs/toolkit";
import { ApiResponseInterface } from "../../../services/interfaces";
import { IEmployee } from "../../../services/interfaces";
import { ErrorResponseInterface } from "../../../services/interfaces";
//import { PaginationInterface } from "../../../services/interfaces/paginationInterface";
import { ResponseStatus } from "../../enums/responseStatus";

import {
	createEmployee,
	deleteEmployee,
	retrieveEmployee,
	findEmployeeById,
	updateEmployee,
} from "./action";

interface ReducerInitialStateInterface {
	data: IEmployee[];
	error: IEmployee;
	status: ResponseStatus;
	// pagination: PaginationInterface;
	key?: string;
	msg?: string;
}

const initialState: ReducerInitialStateInterface = {
	data: [],
	error: {} as IEmployee,
	// pagination: {} as PaginationInterface,
	status: ResponseStatus.INITIAL,
	key: undefined,
	msg: "",
};

export const employeeReducer = createReducer(initialState, (builder) => {
	// Get All ==========================================================
	builder
		.addCase(retrieveEmployee.pending, (state) => {
			state.status = ResponseStatus.LOADING;
			state.key = "view-all";
		})
		.addCase(retrieveEmployee.fulfilled, (state, { payload }) => {
			var data = payload as ApiResponseInterface;
			state.status = ResponseStatus.LOADED;
			state.key = "view-all";

			//state.pagination = data.data.meta;
			state.data = data.data.items as IEmployee[];
		})
		.addCase(retrieveEmployee.rejected, (state, error) => {
			state.status = ResponseStatus.ERROR;
			let myError = error.payload as ApiResponseInterface;
			state.error = myError.error;
			state.key = "view-all";
		});
	//===================================================================
	// Get One ==========================================================
	builder
		.addCase(findEmployeeById.pending, (state) => {
			state.status = ResponseStatus.LOADING;
			state.key = "view-one";
		})
		.addCase(findEmployeeById.fulfilled, (state, { payload }) => {
			var data = payload as ApiResponseInterface;
			state.status = ResponseStatus.LOADED;
			state.key = "view-one";
			state.data = [data.data] as IEmployee[];
		})
		.addCase(findEmployeeById.rejected, (state, error) => {
			state.status = ResponseStatus.ERROR;
			let myError = error.payload as ApiResponseInterface;
			state.error = myError.error;
			state.key = "view-one";
		});
	//===================================================================
	// Create ==========================================================
	builder
		.addCase(createEmployee.pending, (state) => {
			state.status = ResponseStatus.LOADING;
			state.key = "add";
			state.msg = "";
		})
		.addCase(createEmployee.fulfilled, (state, { payload }) => {
			var data = payload as ApiResponseInterface;
			state.status = ResponseStatus.LOADED;
			state.key = "add";
			state.msg = data.msg;
			state.data = [data.data] as IEmployee[];
		})
		.addCase(createEmployee.rejected, (state, error) => {
			state.status = ResponseStatus.ERROR;
			let myError = error.payload as ApiResponseInterface;
			state.error = myError.error;
			state.msg = "Error";
			state.key = "add";
		});
	//===================================================================
	// Update ==========================================================
	builder
		.addCase(updateEmployee.pending, (state) => {
			state.status = ResponseStatus.LOADING;
			state.key = "update";
		})
		.addCase(updateEmployee.fulfilled, (state, { payload }) => {
			var data = payload as ApiResponseInterface;
			state.status = ResponseStatus.LOADED;
			state.key = "update";
			state.msg = data.msg;
		})
		.addCase(updateEmployee.rejected, (state, error) => {
			state.status = ResponseStatus.ERROR;
			let myError = error.payload as ApiResponseInterface;
			state.error = myError.error;
			state.key = "update";
		});
	//===================================================================
	// Delete ==========================================================
	builder
		.addCase(deleteEmployee.pending, (state) => {
			state.status = ResponseStatus.LOADING;
			state.key = "delete";
		})
		.addCase(deleteEmployee.fulfilled, (state, { payload }) => {
			state.status = ResponseStatus.LOADED;
			var data = payload as ApiResponseInterface;
			state.key = "delete";
			state.msg = data.msg;
		})
		.addCase(deleteEmployee.rejected, (state, error) => {
			state.status = ResponseStatus.ERROR;
			let myError = error.payload as ApiResponseInterface;
			state.error = myError.error;
			state.key = "delete";
		});
	//===================================================================
});

export default employeeReducer;
