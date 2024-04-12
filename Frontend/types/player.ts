export type TMatchFormat = "TEST" | "ODI" | "T20";
export type TPlayerRole = "Batsman" | "Bowler" | "All Rounder";

export interface IPlayer {
	id: number | string;
	name: string;
	country: string;
	role: string;
	playerAvatar: string;
	benched?: boolean;
	batting: {
		matches: number;
		runs: number;
		strike_rate: number;
		average: number;
		potential: number;
		strength: number;
	};
	bowling: {
		matches: number;
		wickets: number;
		economy: number;
		average: number;
		runs_conceeded: number;
		strike_rate: number;
		overs: number;
	};
	allrounder: {
		matches: number;
		runs: number;
		wickets: number;
		batting_average: number;
		bowling_strike_rate: number;
		economy: number;
		batting_strike_rate: number;
	};
}
