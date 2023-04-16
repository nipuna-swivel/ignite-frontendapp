import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEmployee } from "../../../services/interfaces";
import { deleteMethod, get, post, put } from "../../utils/fetch-wrapper";

export const retrieveEmployee = createAsyncThunk(
	"/employees",
	async (
		{
			params,
		}: {
			params?:
				| string
				| string[][]
				| Record<string, string>
				| URLSearchParams
				| undefined;
		},
		{ rejectWithValue }
	) => {
		try {
			const response = await get(`employees?${params}`);
			if (response.code == 200) {
				return response;
			} else {
				return rejectWithValue(response);
			}
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

// Get One   ==========================================================================================

export const findEmployeeById = createAsyncThunk(
	"/employees",
	async ({ id }: { id: string | string[] }, { rejectWithValue }) => {
		try {
			const response = await get(`employees/${id}`);
			if (response.code == 200) {
				return response;
			} else {
				return rejectWithValue(response);
			}
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

//    ==========================================================================================

// Create   ==========================================================================================
export const createEmployee = createAsyncThunk(
	"/employees",
	async ({ data }: { data: any }, { rejectWithValue }) => {
		try {
			const response = await post(`/employees`, data);

			if (response.code == 200) {
				return response;
			} else {
				return rejectWithValue(response);
			}
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

//    ==========================================================================================

// Delete   ==========================================================================================
export const deleteEmployee = createAsyncThunk(
	"employees/delete",
	async ({ id }: { id: string | string[] }, { rejectWithValue }) => {
		try {
			const response = await deleteMethod(`employees/${id}`);
			if (response.code == 200) {
				response.data = id;
				return response;
			} else {
				return rejectWithValue(response);
			}
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

// Update Account Products
export const updateEmployee = createAsyncThunk(
	"employees/update",
	async (
		{ id, data }: { id: string | string[]; data: IEmployee },
		{ rejectWithValue }
	) => {
		try {
			const response = await put(`employees/${id}`, data);
			if (response.code == 200) {
				return response;
			} else {
				return rejectWithValue(response);
			}
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);
//   ==========================================================================================
