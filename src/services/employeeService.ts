import http from "@/http-common";

const getAll = () => {
  return http.get("/employees");
};

const get = (id: any) => {
  return http.get(`/employees/${id}`);
};

const create = (data: any) => {
  return http.post("/employees", data);
};

const update = (id: any, data: any) => {
  return http.put(`/employees/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/employees/${id}`);
};
const findById = (id:any) => {
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
