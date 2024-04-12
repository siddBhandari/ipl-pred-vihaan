import { IPlayer, TMatchFormat, TPlayerRole } from "@/types/player";
import http from "../http";

export const getTopPlayers = async (
	format: TMatchFormat = "TEST",
	role: TPlayerRole = "All Rounder",
	limit: number = 10
): Promise<{
	message: string;
	data: IPlayer[];
}> => {
	try {
		let url = `/players/top/?match_format=${format}&role=${role}&limit=${limit}`;
		const response = await http.get(url);
		return Promise.resolve(response.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};

export const getTopPlayersByFormat = async (
	format: TMatchFormat = "TEST",
	limit: number = 10
): Promise<{
	message: string;
	data: {
		batsmen: IPlayer[];
		bowlers: IPlayer[];
		allrounders: IPlayer[];
	};
}> => {
	try {
		const res = await Promise.allSettled([
			getTopPlayers(format, "Batsman", limit),
			getTopPlayers(format, "Bowler", limit),
			getTopPlayers(format, "All Rounder", limit),
		]);
		const players = res.map((r) =>
			r.status === "fulfilled" ? r.value.data : []
		);
		const batsmen = players[0];
		const bowlers = players[1];
		const allrounders = players[2];
		return Promise.resolve({
			message: "Top players fetched successfully",
			data: {
				batsmen,
				bowlers,
				allrounders,
			},
		});
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};

export const getPlayersForMatch = async (
	matchId: number | string
): Promise<{
	message: string;
	data: {
		country_1: IPlayer[];
		country_2: IPlayer[];
	};
}> => {
	try {
		const res = await http.get(`/matches/${matchId}/players/`);
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
