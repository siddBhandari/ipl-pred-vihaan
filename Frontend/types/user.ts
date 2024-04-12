export type ROLE = "admin" | "user" | "guest";

export interface IUser {
	id: string;
	email: string;
	name: string;
	role: ROLE;
}
