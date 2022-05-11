export interface IFormData {
  name: string;
  surname: string;
  password: string;
  email: string;
  phone: string;
  country: string;
  postal: string;
  address: string;
}

export type FormDataFieldType = keyof IFormData;
