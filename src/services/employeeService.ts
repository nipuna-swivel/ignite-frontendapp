import http from "../http-common";

const getAll = () => {
  return http.get("/employees");
};

const get = (id: string) => {
  return http.get(`/employees/${id}`);
};

const create = (data: any) => {
  return http.post("/employees", data);
};

const update = (id: string, data: any) => {
  return http.put(`/employees/${id}`, data);
};

const remove = (id: string) => {
  return http.delete(`/employees/${id}`);
};
const findById = (id:string) => {
  return http.get(`/employees/${id}`);
};


const EmployeeService = {
  getAll,
  get,
  create,
  update,
  remove,
  findById, 
};

export default EmployeeService;
