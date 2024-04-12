import React, { useState } from "react";
import Pane from "./Pane";
import { playersMatchesTabs, playersRoleTabs } from "@/constants/home";
import useDevice from "@/hooks/device";
import Responsive from "@/layouts/Responsive";
import { Typography } from "@/library";
import { IPlayer, TMatchFormat, TPlayerRole } from "@/types/player";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { getTopPlayersByFormat } from "@/utils/api/players";

interface IHomePlayersProps {
	batsmen: IPlayer[];
	bowlers: IPlayer[];
	allrounders: IPlayer[];
}

const classes = stylesConfig(styles, "home-players");

const Players: React.FC<IHomePlayersProps> = ({
	batsmen: originalBatsmen,
	bowlers: originalBowlers,
	allrounders: originalAllrounders,
}) => {
	const { type } = useDevice();
	const [batsmen, setBatsmen] = useState(originalBatsmen);
	const [bowlers, setBowlers] = useState(originalBowlers);
	const [allrounders, setAllrounders] = useState(originalAllrounders);

	const [activeFormatTab, setActiveFormatTab] =
		useState<TMatchFormat>("TEST");
	const [activePlayerCategoryTab, setActivePlayerCategoryTab] =
		useState<TPlayerRole>("All Rounder");

	const handleChangeFormatTab = async (format: TMatchFormat) => {
		try {
			const res = await getTopPlayersByFormat(format, 10);
			setActiveFormatTab(format);
			setBatsmen(res.data.batsmen);
			setBowlers(res.data.bowlers);
			setAllrounders(res.data.allrounders);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChangePlayerCategoryTab = (category: TPlayerRole) => {
		setActivePlayerCategoryTab(category);
	};

	return (
		<section className={classes("")}>
			<div className={classes("-head")}>
				<Typography size="head-2" className={classes("-head")}>
					Top Players
				</Typography>
			</div>
			<div className={classes("-matches-tabs")}>
				{playersMatchesTabs.map((tab) => (
					<button
						key={`home-match-tab-${tab}`}
						className={classes("-matches-tab", {
							"-matches-tab--active": tab.id === activeFormatTab,
						})} 
						onClick={() => handleChangeFormatTab(tab.id)}
					>
						<Typography size="lg">{tab.name}</Typography>
					</button>
				))}
			</div>
			{type === "mobile" ? (
				<div className={classes("-players-tabs")}>
					{playersRoleTabs.map((tab) => (
						<button
							key={`home-match-tab-${tab}`}
							className={classes("-players-tab", {
								"-players-tab--active":
									tab.id === activePlayerCategoryTab,
							})}
							onClick={() =>
								handleChangePlayerCategoryTab(tab.id)
							}
						>
							<Typography size="lg">{tab.name}</Typography>
						</button>
					))}
				</div>
			) : null}
			<div className={classes("-panes")}>
				{
					<Responsive.Row>
						{playersRoleTabs.map((tab) =>
							type === "mobile" ? (
								activePlayerCategoryTab === tab.id ? (
									<Responsive.Col
										xlg={33}
										lg={33}
										md={33}
										sm={100}
										xsm={100}
										key={`home-players-pane-${tab.id}`}
									>
										<Pane
											title={tab.name}
											role={tab.id}
											players={(() => {
												if (tab.id === "Batsman") {
													return batsmen;
												} else if (
													tab.id === "Bowler"
												) {
													return bowlers;
												} else {
													return allrounders;
												}
											})()}
										/>
									</Responsive.Col>
								) : null
							) : (
								<Responsive.Col
									xlg={33}
									lg={33}
									md={33}
									sm={100}
									xsm={100}
									key={`home-players-pane-${tab.id}`}
								>
									<Pane
										title={tab.name}
										role={tab.id}
										players={(() => {
											if (tab.id === "Batsman") {
												return batsmen;
											}
											if (tab.id === "Bowler") {
												return bowlers;
											} else {
												return allrounders;
											}
										})()}
									/>
								</Responsive.Col>
							)
						)}
					</Responsive.Row>
				}
			</div>
		</section>
	);
};

export default Players;
