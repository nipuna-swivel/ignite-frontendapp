import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EmployeeDataService from "../services/employeeService";
import AlertService from "../services/alertService";

const initialState = {
	employees: [],
	employee: null,
};

export const createEmployee = createAsyncThunk(
	"employees",
	async ({ fname, lname, email, contactNum, gender, photoUrl }) => {
		try {
			const res = await EmployeeDataService.create({
				fname,
				lname,
				email,
				contactNum,
				gender,
				photoUrl,
			});
			AlertService.success("Success!!", "success");
			return res.data;

		} catch (error) {
			console.log("there is an error in create api call", error);
			AlertService.success("there is an error in create api call!!", "error");
		}
	}
);

export const retrieveEmployee = createAsyncThunk("employees", async () => {
	try {
		const res = await EmployeeDataService.getAll();
		return res.data;
	} catch (error) {
		console.log("there is an error in retrieve api call", error);
		AlertService.success("there is an error in retrieve api call!!", "error");
	}
});

export const updateEmployee = createAsyncThunk(
	"employees/update",
	async ({ id, data }) => {
		try {
			const res = await EmployeeDataService.update(id, data);
		return res.data;
		} catch (error) {
			console.log("there is an error in update api call", error)
			AlertService.success("there is an error in update api call!!", "error");
		}
		
	}
);

export const deleteEmployee = createAsyncThunk(
	"employees/delete",
	async ({ id }) => {
		try {
			await EmployeeDataService.remove(id);
		return { id };
		} catch (error) {
			console.log("there is an error in delete api call", error)
			AlertService.success("there is an error in create api call!!", "error");
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
			console.log("there is an error in findbyID api call",error)
			AlertService.success("there is an error in findbyID api call!!", "error");
		}
		
	}
);

const employeeSlice = createSlice({
	name: "employee",
	initialState,
	extraReducers: {
		[createEmployee.fulfilled]: (state, action) => {
			state.push(action.payload);
		},
		[retrieveEmployee.fulfilled]: (state, action) => {
			console.log(state, action.payload);
			return {
				...state,
				employees: action.payload,
			};
		},

		[deleteEmployee.fulfilled]: (state, action) => {
			let index = state.findIndex(({ id }) => id === action.payload.id);
			state.splice(index, 1);
		},
		[findEmployeeById.fulfilled]: (state, action) => {
			console.log("slice console", action.payload);
			return { ...state, employee: action.payload };
		},
	},
});

const { reducer } = employeeSlice;
export default reducer;
