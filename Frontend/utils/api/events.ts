import http from "../http";
import { IMatch } from "@/types/match";
import { ISeries } from "@/types/series";

export const getAllUpcomingMatches = async (
	limit: number = 6
): Promise<{
	message: string;
	data: IMatch[];
}> => {
	try {
		let url = "/matches/upcoming/";
		url += `?event=MATCH&limit=${limit}`;
		const response = await http.get(url);
		return Promise.resolve(response.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};

export const getAllUpcomingSeries = async (
	limit: number = 6
): Promise<{
	message: string;
	data: ISeries[];
}> => {
	try {
		let url = "/matches/upcoming/";
		url += `?event=series&limit=${limit}`;
		const response = await http.get(url);
		return Promise.resolve(response.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
