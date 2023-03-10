import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EmployeeDataService from "@/services/employeeService";

const initialState = {
	employees: [],
	employee: null,
};

export const createEmployee = createAsyncThunk(
	"employees",
	async ({ fname, lname, email, contactNum, gender, photoUrl }) => {
		const res = await EmployeeDataService.create({
			fname,
			lname,
			email,
			contactNum,
			gender,
			photoUrl,
		});
		return res.data;
	}
);

export const retrieveEmployee = createAsyncThunk("employees", async () => {
	const res = await EmployeeDataService.getAll();
	return res.data;
});

export const updateEmployee = createAsyncThunk(
	"employees/update",
	async ({ id, data }) => {
		const res = await EmployeeDataService.update(id, data);
		return res.data;
	}
);

export const deleteEmployee = createAsyncThunk(
	"employees/delete",
	async ({ id }) => {
		await EmployeeDataService.remove(id);
		return { id };
	}
);

export const findEmployeeById = createAsyncThunk(
	"employees/getbyid",
	async (id) => {
		const res = await EmployeeDataService.findById(id);
		return res.data;
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
