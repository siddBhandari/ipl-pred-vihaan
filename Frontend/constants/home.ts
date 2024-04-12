import { TMatchFormat, TPlayerRole } from "@/types/player";

export const playersMatchesTabs: {
	id: TMatchFormat;
	name: string;
}[] = [
	{
		id: "ODI",
		name: "ODI",
	},
	{
		id: "T20",
		name: "T20",
	},
	{
		id: "TEST",
		name: "Test",
	},
];

export const playersRoleTabs: {
	id: TPlayerRole;
	name: string;
}[] = [
	{
		id: "Batsman",
		name: "Batsman",
	},
	{
		id: "Bowler",
		name: "Bowler",
	},
	{
		id: "All Rounder",
		name: "All-Rounder",
	},
];
