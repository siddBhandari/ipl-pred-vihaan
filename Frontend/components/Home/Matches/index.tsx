import React from "react";
import Card from "./Card";
import Responsive from "@/layouts/Responsive";
import { IMatch } from "@/types/match";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IHomeMatchesProps {
	matches: IMatch[];
}

const classes = stylesConfig(styles, "home-matches");

const HomeMatches: React.FC<IHomeMatchesProps> = ({ matches }) => {
	return (
		<section className={classes("")} id="matches">
			<div className={classes("-head")}>
				<div className={classes("-head-content")}>
					<Typography className={classes("-head-content__title")}>
						Upcoming Matches
					</Typography>
					<Typography
						size="md"
						className={classes("-head-content__desc")}
					>
						Create your own team and predict the match outcomes on
						the basis of selected team, player stats.
					</Typography>
				</div>
				{/* <Link href="/matches">View All</Link> */}
			</div>
			<div className={classes("-body")}>
				<Responsive.Row>
					{matches.map((match, index) => (
						<Responsive.Col
							key={`home-matches-${match.id}`}
							xlg={33}
							lg={33}
							md={50}
							sm={100}
							xsm={100}
						>
							<Card {...match} index={index} />
						</Responsive.Col>
					))}
				</Responsive.Row>
			</div>
		</section>
	);
};

export default HomeMatches;
