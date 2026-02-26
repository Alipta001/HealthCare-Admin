export const endPoints = {
  auth: {
    signin: "/admin/auth/login",
    signup: "/admin/auth/register",
  },
  doctor: {
    list: "/admin/doctor/list",
    create: "/admin/doctor/create",
    update: "/admin/doctor/update",
    details: "/admin/doctor/details/:id",
    department: "/admin/doctor/department",
    delete: "/admin/doctor/delete",
    appointment: {
      list: "/admin/doctor/appointment",
      confirm: "/admin/doctor/appointment/:id",
      cancel: "/admin/doctor/appointment/cancelled/:id",
    },
  },
};
