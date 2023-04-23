export interface Login {
  userName: string;
  password: string;
}
export interface User {
  identifiant: number;
  password: string;
  pro_sante: boolean;
  lastname: string;
  Firstname: string;
  Date_naissance: string;
}
export interface UpdateUserDto {
   password: String;
   pro_sante: Boolean;
}
