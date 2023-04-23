export interface Login {
  userName: string;
  password: string;
}
export interface User {
   id: number;
   email: string;
   password: string;
   pro_sante: boolean;
}
export interface UpdateUserDto {
   password: String;
   pro_sante: Boolean;
}
