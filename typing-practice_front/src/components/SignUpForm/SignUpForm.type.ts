import { UserRegister } from 'src/types/user';

export interface IFormData extends UserRegister {
  allowExtraEmails: boolean;
}
