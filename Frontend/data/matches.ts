import { IMatch, IMatchDetails } from "@/types/match";

export const matches: IMatch[] = [
	{
		id: 1,
		title: "India vs New Zealand",
		format: "ODI",
		type: "ICC Men’s Cricket World Cup, India - 2023",
		team1: "India",
		team2: "New Zealand",
		location: "Wankhede Stadium, Mumbai",
		start: "2023-11-15T09:30:00.000Z",
		end: "2023-11-15T17:30:00.000Z",
		team1_logo:
			"https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag.jpg",
		team2_logo:
			"https://www.cricbuzz.com/a/img/v1/192x192/i1/c170666/new-zealand-flag.jpg",
	},
	{
		id: 2,
		title: "South Africa vs Australia",
		format: "ODI",
		type: "ICC Men’s Cricket World Cup, India - 2023",
		team1: "South Africa",
		team2: "Australia",
		location: "Eden Gardens, Kolkata",
		start: "2023-11-16T09:30:00.000Z",
		end: "2023-11-16T17:30:00.000Z",
		team1_logo:
			"https://www.cricbuzz.com/a/img/v1/192x192/i1/c170667/south-africa-flag.jpg",
		team2_logo:
			"https://www.cricbuzz.com/a/img/v1/192x192/i1/c170669/australia-flag.jpg",
	},
];

export const matchesDetails: IMatchDetails[] = [
	{
		id: 1,
		title: "India vs New Zealand",
		label: "Match 01",
		location: "Wankhede Stadium, Mumbai",
		timestamp: "2023-11-15T09:30:00.000Z",
		team1: "India",
		team2: "New Zealand",
	},
	{
		id: 2,
		title: "South Africa vs Australia",
		label: "Match 02",
		location: "Eden Gardens, Kolkata",
		timestamp: "2023-11-16T09:30:00.000Z",
		team1: "South Africa",
		team2: "Australia",
	},
];
