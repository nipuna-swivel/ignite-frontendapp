import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EmployeeDataService from "../services/employeeService";
import AlertService from "../services/alertService";
import { IEmployee } from "@/services/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	employees: [],
	employee: null,
};

export const createEmployee = createAsyncThunk(
	"employees",
	async ({ fname, lname, email, contactNum, gender, photoUrl }: IEmployee) => {
		try {
			 await EmployeeDataService.create({
				fname,
				lname,
				email,
				contactNum,
				gender,
				photoUrl,
			});
			AlertService.success("Employee created Success!!", "success");
		} catch (error) {
			console.log("there is an error in create api call", error);
			AlertService.error("there is an error in create api call!!", "error");
		}
	}
);

export const retrieveEmployee = createAsyncThunk("employees", async () => {
	try {
		const res = await EmployeeDataService.getAll();
		return res.data;
	} catch (error) {
		console.log("there is an error in retrieve api call", error);
		AlertService.error("there is an error in retrieve api call!!", "error");
	}
});

export const updateEmployee = createAsyncThunk(
	"employees/update",
	async (params: { empId: string; data: any }) => {
		try {
			const res = await EmployeeDataService.update(params.empId, params.data);
			AlertService.success("Employee updated Success!!", "success");
			return res.data;
		} catch (error) {
			console.log("there is an error in update api call", error);
			AlertService.error("there is an error in update api call!!", "error");
		}
	}
);

export const deleteEmployee = createAsyncThunk(
	"employees/delete",
	async (id: string) => {
		try {
			await EmployeeDataService.remove(id);
			AlertService.success("Employee deleted Success!!", "success");
			return { id };
		} catch (error) {
			console.log("there is an error in delete api call", error);
			AlertService.error("there is an error in create api call!!", "error");
		}
	}
);

export const findEmployeeById = createAsyncThunk(
	"employees/getbyid",
	async (id) => {
		try {
			const res = await EmployeeDataService.findById(id);
			return res.data;
		} catch (error) {
			console.log("there is an error in findbyID api call", error);
			AlertService.success("there is an error in findbyID api call!!", "error");
		}
	}
);

const employeeSlice = createSlice({
	name: "employee",
	initialState,
	extraReducers: {
		[createEmployee.fulfilled]: (state: any, action: PayloadAction) => {},
		[retrieveEmployee.fulfilled]: (state: any, action: { payload: any }) => {
			console.log(state, action.payload);
			return {
				...state,
				employees: action.payload,
			};
		},

		[deleteEmployee.fulfilled]: (
			state: { id: any }[],
			action: { payload: { id: any } }
		) => {},
		[findEmployeeById.fulfilled]: (state: any, action: { payload: any }) => {
			console.log("slice console", action.payload);
			return { ...state, employee: action.payload };
		},
	},
	reducers: undefined,
});

const { reducer } = employeeSlice;
export default reducer;
