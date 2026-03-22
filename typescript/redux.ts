// Redux State Types
import { User, Department, Doctor, Appointment } from './api';
import { store } from '../redux/store/store';

export interface AuthState {
  isAuthenticated: boolean;
  data: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface DepartmentState {
  data: Department[];
  filteredDepartments: Department[];
  loading: boolean;
  error: string | null;
}

export interface DoctorState {
  data: Doctor[];
  doctorDetails: Doctor | null;
  filteredDoctors: Doctor[] | null;
  loading: boolean;
  filterLoading: boolean;
  error: string | null;
  filterError: string | null;
  page: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

export interface AppointmentState {
  data: Appointment[];
  listLoading: boolean;
  actionLoading: boolean;
  loading?: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  department: DepartmentState;
  doctor: DoctorState;
  appointment: AppointmentState;
}

export type AppDispatch = typeof store.dispatch;

// Re-export types for use in redux slices
export type { User, Department, Doctor, Appointment };