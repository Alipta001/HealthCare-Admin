// Component Props Types
import { ReactNode } from 'react';
import { Doctor, Department, Appointment } from './api';

export interface ContentWrapperProps {
  children: ReactNode;
}

export interface AdminDashboardProps {
  // Add props if any
}

export interface StatsCardsProps {
  totalItems: number;
  departments: Department[];
}

export interface FilterBarProps {
  doctors?: Doctor[];
  departments?: Department[];
}

export interface DoctorTableProps {
  doctors: Doctor[];
  departments: Department[];
  loading: boolean;
  errorMessage: string | null;
}

export interface HeaderProps {
  onOpenDoctorModal?: () => void;
  onOpenDepartmentModal?: () => void;
  title?: string;
}

export interface AppointmentFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string;
  onPendingClick: () => void;
  onAcceptedClick: () => void;
}

// Appointment Display Type (for transformed appointments with doctor/patient names)
export interface AppointmentDisplay {
  _id: string;
  patientId: string;
  doctorId: string;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  status: "Pending" | "Accepted" | "Rejected";
}

export interface AppointmentMobileCardProps {
  appointment: AppointmentDisplay;
  showActions?: boolean;
}

export interface AppointmentTableProps {
  appointments: AppointmentDisplay[];
  statusFilter?: string;
}

export interface AppointmentRowProps {
  appointment: AppointmentDisplay;
  showActions?: boolean;
}

export interface AppointmentSectionProps {
  appointments: AppointmentDisplay[];
}

export interface SchedulePreviewProps {
  doctor: any; // Doctor type - keeping as any for now
}

export interface DepartmentHeaderProps {
  onOpen: () => void;
}