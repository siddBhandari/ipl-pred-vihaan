import { ITeamMapperModel } from "./team";

export const frontendBaseUrl: string = process.env
	.NEXT_PUBLIC_FRONTEND_BASE_URL as string;
export const backendBaseUrl: string = process.env
	.NEXT_PUBLIC_BACKEND_BASE_URL as string;

export const playerPlaceholder = "/images/player-placeholder.png";

export const placeholderTeam: ITeamMapperModel = {
	name: "Unknown",
	code: "UNK",
	flag: "https://i.redd.it/7vzha41nzcsa1.png",
	captain: {
		name: "Unknown",
		image: "",
	},
	color: "var(--team-india-color)",
	gradient: "var(--team-india-gradient)",
};
