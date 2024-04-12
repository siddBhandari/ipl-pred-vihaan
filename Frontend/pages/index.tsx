import React from "react";
import { Hero, Matches, Players, Series } from "@/components/Home";
import { IMatch } from "@/types/match";
import {
	getAllUpcomingMatches,
	getAllUpcomingSeries,
} from "@/utils/api/events";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";
import { ISeries } from "@/types/series";
import { IPlayer } from "@/types/player";
import { getTopPlayersByFormat } from "@/utils/api/players";

interface HomePageProps {
	matches: IMatch[];
	series: ISeries[];
	players: {
		batsmen: IPlayer[];
		bowlers: IPlayer[];
		allrounders: IPlayer[];
	};
}

const classes = stylesConfig(styles, "home");

const HomePage: React.FC<HomePageProps> = ({
	matches = [],
	series = [],
	players = {
		batsmen: [],
		bowlers: [],
		allrounders: [],
	},
}) => {
	return (
		<main className={classes("")}>
			<Hero />
			{matches.length > 0 ? <Matches matches={matches} /> : null}
			{series.length > 0 ? <Series series={series} /> : null}
			{players.batsmen.length > 0 ||
			players.bowlers.length > 0 ||
			players.allrounders.length > 0 ? (
				<Players
					batsmen={players.batsmen}
					bowlers={players.bowlers}
					allrounders={players.allrounders}
				/>
			) : null}
		</main>
	);
};

export default HomePage;

export const getServerSideProps = async () => {
	try {
		const res = await Promise.allSettled([
			getAllUpcomingMatches(6),
			getAllUpcomingSeries(3),
			getTopPlayersByFormat("TEST", 10),
		]);
		const results = res.map((promise) => {
			if (promise.status === "fulfilled") {
				return promise.value.data;
			}
			return [];
		});
		return {
			props: {
				matches: results[0],
				series: results[1],
				players: results[2],
			},
		};
	} catch (error) {
		console.error(error);
		return {
			props: {
				matches: [],
			},
		};
	}
};
