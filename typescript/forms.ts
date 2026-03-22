// Form Input Types
export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface DepartmentFormInputs {
  name: string;
  description: string;
}

export interface DoctorFormInputs {
  name: string;
  fees: string;
  departmentId: string;
  schedule: {
    startTime: string;
    endTime: string;
    slotDuration: number;
  };
}