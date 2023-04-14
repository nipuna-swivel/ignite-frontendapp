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