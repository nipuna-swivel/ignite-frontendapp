import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import EmployeeDataService from "../services/employeeService";
import AlertService from "../services/alertService";
import { IEmployee, IEmployeeState } from "@/services/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IEmployeeState = {
	employees: [],
	employee: [],
	loading: false,
	error: null,
	//message: '',
};

export const createEmployee:any = createAsyncThunk(
	"employees/create",
	async (
		{ fname, lname, email, contactNum, gender, photoUrl }: IEmployee,
		{ rejectWithValue }
	) => {
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
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const retrieveEmployee:any = createAsyncThunk(
	"employees/getAll",
	async () => {
		try {
			const res = await EmployeeDataService.getAll();
			return res.data;
		} catch (error) {
			console.log("there is an error in retrieve api call", error);
			AlertService.error("there is an error in retrieve api call!!", "error");
		}
	}
);

export const updateEmployee:any = createAsyncThunk(
	"employees/update",
	async (params: { empId: string; data: any }, { rejectWithValue }) => {
		try {
			const res = await EmployeeDataService.update(params.empId, params.data);
			AlertService.success("Employee updated Success!!", "success");
			return res.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const deleteEmployee:any = createAsyncThunk(
	"employees/delete",
	async (id: string, { rejectWithValue }) => {
		try {
			await EmployeeDataService.remove(id);
			AlertService.success("Employee deleted Success!!", "success");
			return { id };
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const findEmployeeById:any = createAsyncThunk(
	"employees/getbyid",
	async (id: string, { rejectWithValue }) => {
		try {
			const res = await EmployeeDataService.findById(id);
			return res.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//retrive all employees
		builder.addCase(retrieveEmployee.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(retrieveEmployee.fulfilled, (state, action) => {
			state.loading = false;
			state.employees = action.payload;
		});
		builder.addCase(retrieveEmployee.rejected, (state) => {
			state.loading = false;
			state.employees = [];
		});

		//create a new employee
		builder.addCase(createEmployee.fulfilled, (state, action) => {
			state.loading = false;
			state.error = { success: true, message: "Successfully added" };
		});
		builder.addCase(
			createEmployee.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = { success: false, message: action.payload };
			}
		);
		//update employee
		builder.addCase(updateEmployee.fulfilled, (state) => {
			state.loading = false;
			state.error = { success: true, message: "Successfully updated" };
		});
		builder.addCase(
			updateEmployee.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = { success: false, message: action.payload };
			}
		);

		//delete a employee
		builder.addCase(deleteEmployee.fulfilled, (state) => {
			state.loading = false;
			state.error = { success: true, message: "Successfully deleted" };
		});
		builder.addCase(
			deleteEmployee.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = { success: false, message: action.payload };
			}
		);

		//get the employee by id
		builder.addCase(findEmployeeById.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(findEmployeeById.fulfilled, (state, action) => {
			state.loading = false;
			state.employee = action.payload;
		});
		builder.addCase(findEmployeeById.rejected, (state) => {
			state.loading = false;
			state.employee = [];
		});
	},
});

const { reducer } = employeeSlice;
export default reducer;
