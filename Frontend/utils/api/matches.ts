import { IMatchDetails, IMatchPrediction } from "@/types/match";
import http from "../http";

export const getMatchDetails = async (
	id: number | string
): Promise<{
	status: string;
	data: IMatchDetails;
}> => {
	try {
		const res = await http.get(`/matches/${id}/`);
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};

export const predictMatchById = async (
	id: number | string,
	team1: {
		code: string;
		playerIds: number[];
	},
	team2: {
		code: string;
		playerIds: number[];
	}
): Promise<{
	status: string;
	data: IMatchPrediction;
}> => {
	try {
		const res = await http.post(`matches/${id}/custom_prediction/`, {
			team_1_abb: team1.code,
			team_2_abb: team2.code,
			team_1_player_ids: team1.playerIds,
			team_2_player_ids: team2.playerIds,
		});
		return Promise.resolve(res.data);
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
