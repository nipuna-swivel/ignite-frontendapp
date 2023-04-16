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

export interface ApiResponseInterface {
    msg: string
    code: number
    data: any
    error: any
    success: boolean
}


export interface ErrorResponseInterface {
    msg: string,
    validation : any,
}