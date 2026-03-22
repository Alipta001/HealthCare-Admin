export const endPoints = {
  auth: {
    signin: "/admin/auth/login",
    signup: "/admin/auth/register",
    logout: "/admin/logout"
  },
  doctor: {
    list: "/admin/doctor/list",
    create: "/admin/doctor/create",
    update: "/admin/doctor/update",
    details: "/admin/doctor/details",
    department: "/admin/doctor/department",
    departmentList: "/admin/departments/list",
    departmentWiseDoctor: "/admin/departments",
    delete: "/admin/doctor/delete",
    doctorSearch: "/admin/department/doctors",
    departmentDelete: "/admin/department/delete"
  },
    appointment: {
      list: "/admin/doctor/appointment/list",
      confirm: "/admin/doctor/appointment",
      cancel: "/admin/doctor/appointment/cancelld",
      acceptedList: "/admin/appointment/acceptedlist"
    },
    branch: {
      create: "/admin/diagnostic/create"
    }
};
