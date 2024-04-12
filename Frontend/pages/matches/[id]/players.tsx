import React, { useState } from "react";
import Image from "next/image";
import { Batsmen, Card, Details } from "@/components/Players";
import Responsive from "@/layouts/Responsive";
import { Typography } from "@/library";
import { slugify, stylesConfig } from "@/utils/functions";
import { getMatchDetails, predictMatchById } from "@/utils/api/matches";
import { IMatchDetails, IMatchPrediction } from "@/types/match";
import { IPlayersBatsmen } from "@/components/Players/Batsmen";
import { getPlayersForMatch } from "@/utils/api/players";
import useDevice from "@/hooks/device";
import Prediction from "@/components/Prediction/page";
import { useRouter } from "next/router";
import Seo from "@/layouts/Seo";
import { ITeamMapperModel, teamMapper } from "@/constants/team";
import { placeholderTeam } from "@/constants/variables";
import styles from "@/styles/pages/Players.module.scss";
import toast from "react-hot-toast";

interface MatchPlayersProps extends IMatchDetails {
	country_1: IPlayersBatsmen[];
	country_2: IPlayersBatsmen[];
}

const classes = stylesConfig(styles, "matches-players");

const MatchPlayers: React.FC<MatchPlayersProps> = ({
	title,
	label,
	team1 = "",
	team2 = "",
	location,
	timestamp,
	country_1,
	country_2,
}) => {
	const { type } = useDevice();
	const router = useRouter();
	const [activeFrame, setActiveFrame] = useState<"players" | "prediction">(
		"players"
	);
	const [activeTab, setActiveTab] = useState(team1);
	const [gettingPredictions, setGettingPredictions] = useState(false);
	const [predictionData, setPredictionData] =
		useState<IMatchPrediction | null>(null);
	const [players, setPlayers] = useState({
		country_1: country_1,
		country_2: country_2,
	});
	const model1: ITeamMapperModel =
		teamMapper[slugify(team1)] ?? placeholderTeam;
	const model2: ITeamMapperModel =
		teamMapper[slugify(team2)] ?? placeholderTeam;

	const getPrediction = async () => {
		try {
			setGettingPredictions(true);
			const country1PlayersIds = players.country_1
				.filter((player) => !player.benched)
				.map((player) => +player.id);
			const country2PlayersIds = players.country_2
				.filter((player) => !player.benched)
				.map((player) => +player.id);
			if (
				(players.country_1.length >= 11 &&
					country1PlayersIds.length !== 11) ||
				(players.country_2.length >= 11 &&
					country2PlayersIds.length !== 11)
			) {
				throw new Error("Please select 11 players from each team");
			}
			const res = await predictMatchById(
				router.query.id as string,
				{
					code: model1.code,
					playerIds: players.country_1
						.filter((player) => !player.benched)
						.map((player) => +player.id),
				},
				{
					code: model2.code,
					playerIds: players.country_2
						.filter((player) => !player.benched)
						.map((player) => +player.id),
				}
			);
			setPredictionData(res.data);
			setActiveFrame("prediction");
		} catch (error: any) {
			toast.error(error.message);
			console.error(error);
		} finally {
			setGettingPredictions(false);
		}
	};

	return (
		<>
			<Seo
				title={`${team1} vs ${team2} - ${title} - IPL Preds`}
				description={`Who will win ${team1} vs ${team2} match? Predict ${team1} vs ${team2} match score in ${title} and win exciting prizes.`}
			/>
			{activeFrame === "players" ? (
				<div className={classes("")}>
					<header className={classes("-header")}>
						<Typography
							weight="bold"
							size="head-2"
							as="h1"
							className={classes("-header__title")}
						>
							{title}
						</Typography>
						<Image
							src="/favicon.png"
							alt="logo"
							width={100}
							height={100}
							onClick={() => router.push("/")}
							className={classes("-header__logo")}
						/>
					</header>
					<Responsive.Row className={classes("-details")}>
						<Responsive.Col
							xlg={60}
							lg={60}
							md={60}
							sm={100}
							xsm={100}
						>
							<Card
								team1={team1}
								team2={team2}
								timestamp={timestamp}
							/>
						</Responsive.Col>
						<Responsive.Col
							xlg={40}
							lg={40}
							md={40}
							sm={100}
							xsm={100}
						>
							<Details
								team1={team1}
								team2={team2}
								label={label}
								location={location}
								timestamp={timestamp}
								onPredict={() => getPrediction()}
								predicting={gettingPredictions}
							/>
						</Responsive.Col>
					</Responsive.Row>
					<Typography
						size="head-3"
						weight="bold"
						className={classes("-heading")}
					>
						Select Player And Batting Order
					</Typography>
					<div className={classes("-content")}>
						<Typography weight="medium" size="xxl">
							Predicted Playing 11
						</Typography>
						<Typography size="lg">
							Our AI has chosen the top playing 11 for you based
							on past matches, performances and pitch conditions.
						</Typography>
					</div>
					<div className={classes("-tabs")}>
						<div
							className={classes("-tabs-tab", {
								"-tabs-tab--active": activeTab === team1,
							})}
							onClick={() => setActiveTab(team1)}
							style={{
								opacity:
									type === "mobile"
										? activeTab === team1
											? 1
											: 0.5
										: 1,
							}}
						>
							<Typography>{team1}</Typography>
						</div>
						<div
							className={classes("-tabs-tab", {
								"-tabs-tab--active":
									type !== "mobile" || activeTab === team2,
							})}
							onClick={() => setActiveTab(team2)}
							style={{
								opacity:
									type === "mobile"
										? activeTab === team2
											? 1
											: 0.5
										: 1,
							}}
						>
							<Typography>{team2}</Typography>
						</div>
					</div>
					<Responsive.Row className={classes("-players")}>
						{type !== "mobile" || activeTab === team1 ? (
							<Responsive.Col
								xlg={50}
								lg={50}
								md={50}
								sm={100}
								xsm={100}
							>
								<Batsmen
									players={country_1.filter(
										(player: any) => !player.benched
									)}
									color={model1.color}
									setPlayers={(incomingPlayers) => {
										const playersToSet =
											players.country_1.map((player) => {
												const incomingPlayer =
													incomingPlayers.find(
														(incomingPlayer) =>
															incomingPlayer.id ===
															player.id
													);
												if (incomingPlayer)
													return incomingPlayer;
												return player;
											});
										setPlayers((prev) => ({
											...prev,
											country_1: playersToSet,
										}));
									}}
								/>
							</Responsive.Col>
						) : null}
						{type !== "mobile" || activeTab === team2 ? (
							<Responsive.Col
								xlg={50}
								lg={50}
								md={50}
								sm={100}
								xsm={100}
							>
								<Batsmen
									players={country_2.filter(
										(player: any) => !player.benched
									)}
									color={model2.color}
									setPlayers={(incomingPlayers) => {
										const playersToSet =
											players.country_2.map((player) => {
												const incomingPlayer =
													incomingPlayers.find(
														(incomingPlayer) =>
															incomingPlayer.id ===
															player.id
													);
												if (incomingPlayer)
													return incomingPlayer;
												return player;
											});
										setPlayers((prev) => ({
											...prev,
											country_2: playersToSet,
										}));
									}}
								/>
							</Responsive.Col>
						) : null}
					</Responsive.Row>
					<div className={classes("-content")}>
						<Typography weight="medium" size="xxl">
							Bench Playing
						</Typography>
						<Typography size="lg">
							The list of player you has most chance to sit on
							bench in this particular match
						</Typography>
					</div>
					<Responsive.Row className={classes("-players")}>
						{type !== "mobile" || activeTab === team1 ? (
							<Responsive.Col
								xlg={50}
								lg={50}
								md={50}
								sm={100}
								xsm={100}
							>
								<Batsmen
									players={country_1.filter(
										(player: any) => player.benched
									)}
									color={model1.color}
									setPlayers={(incomingPlayers) => {
										const playersToSet =
											players.country_1.map((player) => {
												const incomingPlayer =
													incomingPlayers.find(
														(incomingPlayer) =>
															incomingPlayer.id ===
															player.id
													);
												if (incomingPlayer)
													return incomingPlayer;
												return player;
											});
										setPlayers((prev) => ({
											...prev,
											country_1: playersToSet,
										}));
									}}
								/>
							</Responsive.Col>
						) : null}
						{type !== "mobile" || activeTab === team2 ? (
							<Responsive.Col
								xlg={50}
								lg={50}
								md={50}
								sm={100}
								xsm={100}
							>
								<Batsmen
									players={country_2.filter(
										(player: any) => player.benched
									)}
									color={model2.color}
									setPlayers={(incomingPlayers) => {
										const playersToSet =
											players.country_2.map((player) => {
												const incomingPlayer =
													incomingPlayers.find(
														(incomingPlayer) =>
															incomingPlayer.id ===
															player.id
													);
												if (incomingPlayer)
													return incomingPlayer;
												return player;
											});
										setPlayers((prev) => ({
											...prev,
											country_2: playersToSet,
										}));
									}}
								/>
							</Responsive.Col>
						) : null}
					</Responsive.Row>
				</div>
			) : predictionData ? (
				<Prediction {...predictionData} />
			) : null}
		</>
	);
};

export default MatchPlayers;

export const getServerSideProps = async (context: any) => {
	const matchId = context.params.id;
	try {
		if (!matchId) throw new Error("Match ID not found");
		const res = await Promise.allSettled([
			getMatchDetails(matchId),
			getPlayersForMatch(matchId),
		]);
		const results: any = res.map((promise) => {
			if (promise.status === "fulfilled") {
				return promise.value.data;
			} else return {};
		});
		return {
			props: {
				...results[0],
				country_1: results[1].country_1,
				country_2: results[1].country_2,
			},
		};
	} catch (error: any) {
		console.error(error);
		return {
			props: {
				error: true,
				message: error.message,
			},
		};
	}
};
