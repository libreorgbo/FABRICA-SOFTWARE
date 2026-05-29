export type UUID = string;
export type ISODateString = string;
export type Slug = string;

export type Plan = 'free' | 'starter' | 'pro' | 'enterprise';
export type UserRole = 'superadmin' | 'admin' | 'vendor' | 'member';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
