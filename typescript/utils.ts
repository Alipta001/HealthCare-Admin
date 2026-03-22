// This file contains utility types and additional type helpers

// Make filters on components more flexible
export type ComponentProps<T = {}> = T & {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

// Generic callback types
export type VoidCallback = () => void;
export type DataCallback<T> = (data: T) => void | Promise<void>;

// Form validation types
export interface FormError {
  field: string;
  message: string;
}

// API error types
export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}
