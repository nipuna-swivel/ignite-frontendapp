export interface IEmployee {
    _id: string;
    fname: string;
    lname: string;
    email: string | null;
    contactNum: string;
    gender: string;
    photoUrl: string;
}


export interface IEditEmployeeFormProps {
    employeedetails: IEmployee | null;
    func: (values: IEmployee) => void
}


export interface IEmployeeState {
    employees: IEmployee[] | [];
    loading: boolean;
    error: IError | null;
    employee: IEmployee[] | [];
 
  }

  interface IError {
    success: boolean;
    message: string;
  }