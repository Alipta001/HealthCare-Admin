// Global API Types
export interface User {
  id: string;
  email: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  data: User;
}

export interface Department {
  _id: string;
  name: string;
  description: string;
}

export interface Schedule {
  startTime: string;
  endTime: string;
  slotDuration: number;
}

export interface Doctor {
  _id?: string;
  name: string;
  fees: string | number;
  departmentId: string;
  schedule: Schedule;
  specialization?: string;
  status?: string;
  availableSlots?: Array<{
    date: string;
    time?: string;
    slots?: number;
  }>;
}

export interface Appointment {
  _id: string;
  userId: string;
  doctorId: string;
  date: string;
  time: string;
  status: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  totalItems: number;
}