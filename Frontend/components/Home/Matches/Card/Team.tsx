import React, { useState } from "react";
import Image from "next/image";
import Gradient from "./Gradient";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { ITeamMapperModel } from "@/constants/team";

interface IHomeMatchesCardTeamProps extends ITeamMapperModel {
	style?: React.CSSProperties;
	index: number;
	flip?: boolean;
}

const classes = stylesConfig(styles, "home-matches-card-body-team");

const HomeMatchesCardTeam: React.FC<IHomeMatchesCardTeamProps> = ({
	name,
	code,
	flag,
	captain,
	color,
	style,
	index,
	flip = false,
}) => {
	const [showImage, setShowImage] = useState(true);
	const handleCaptainImageError = () => {
		setShowImage(false);
	};

	return (
		<div
			className={classes("", {
				"--flip": flip,
			})}
			style={{
				...style,
			}}
		>
			<Gradient
				color={color}
				id={`home-matches-card-body-team-${name}-${index}-${color}`}
				className={classes("-gradient")}
			/>
			<div className={classes("-captain")}>
				{showImage ? (
					<Image
						src={captain.image}
						alt={captain.name}
						width={196}
						height={196}
						className={classes("-captain-image", {
							"-captain-image--show": showImage,
						})}
						onError={handleCaptainImageError}
					/>
				) : null}
			</div>
			<div className={classes("-details")}>
				<Image
					src={flag}
					alt={name}
					width={196}
					height={196}
					className={classes("-logo")}
				/>
				<Typography size="sm" className={classes("-name")}>
					{(() => {
						if (name.length > 10) {
							return `${name.slice(0, 10)}...`;
						}
						return name;
					})()}
				</Typography>
			</div>
			<Typography
				size="head-1"
				family="prosto-one"
				className={classes("-code")}
			>
				{code}
			</Typography>
		</div>
	);
};

export default HomeMatchesCardTeam;
