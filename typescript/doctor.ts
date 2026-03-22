export interface Department {
  _id: string;
  name: string;
}

export interface Slot {
  date: string;
  time: string;
}

export interface Doctor {
  _id: string;
  name?: string;
  departmentId?: string | Department;
  department?: Department;
  specialization?: string;
  availableSlots?: Slot[];
}