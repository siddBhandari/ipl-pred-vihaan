export interface IMatch {
	id: number | string;
	title: string;
	format: string;
	type: string;
	location: string;
	team1: string;
	team2: string;
	start: string;
	end: string;
	team1_logo: string;
	team2_logo: string;
}

export interface IMatchDetails {
	id: number | string;
	title: string;
	label: string;
	location: string;
	timestamp: string;
	team1: string;
	team2: string;
}

export interface IMatchPredictionCountryStats {
	id: number | string;
	name: string;
	logo: string;
	runs: {
		min: number;
		max: number;
	};
	wickets: {
		min: number;
		max: number;
	};
	overs: {
		min: number;
		max: number;
	};
	batting_stats: {
		id: number | string;
		name: string;
		runs: number;
		// balls: number;
		played: boolean;
	}[];
	bowling_stats: {
		id: number | string;
		name: string;
		wickets: number;
		economy: number;
		played: boolean;
	}[];
}

export interface IMatchPredictionComparisonMatrix {
	c1_min_c2_min: number;
	c1_min_c2_max: number;
	c1_max_c2_min: number;
	c1_max_c2_max: number;
}

export interface IMatchPrediction {
	id: number | string;
	title: string;
	result: {
		status: "draw" | "win";
		winner: string;
		percentage: number;
	};
	matrix?: IMatchPredictionComparisonMatrix;
	country_1: IMatchPredictionCountryStats;
	country_2: IMatchPredictionCountryStats;
}
