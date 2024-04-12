import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Sms } from "@/assets/icons/EmailsMessages/linear";
import { cards } from "@/constants/footer";
import Responsive from "@/layouts/Responsive";
import { Typography, Button } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "footer");

const Footer: React.FC = () => {
	const router = useRouter();
	return (
		<footer className={classes("")} id="footer">
			<div className={classes("-top")}>
				<Responsive.Row>
					{cards.map((card, index) => (
						<Responsive.Col
							xlg={33}
							lg={33}
							md={50}
							sm={100}
							xsm={100}
							key={`footer-card-${index}`}
						>
							<div className={classes("-card")}>
								<Typography
									size="lg"
									className={classes("-card-title")}
								>
									{card.title}
								</Typography>
								<Typography
									size="s"
									className={classes("-card-description")}
								>
									{card.description}
								</Typography>
							</div>
						</Responsive.Col>
					))}
					<Responsive.Col
						xlg={33}
						lg={33}
						md={50}
						sm={100}
						xsm={100}
						key={"footer-card-btn"}
						style={{
							justifyContent: "flex-start",
						}}
					>
						<Button
							onClick={() => router.push("/contact")}
							size="small"
						>
							Let&apos;s Talk
						</Button>
					</Responsive.Col>
				</Responsive.Row>
			</div>
			<div className={classes("-bottom")}>
				<Image
					src="/favicon.png"
					alt="logo"
					width={150}
					height={150}
					className={classes("-logo")}
				/>
				<div className={classes("-bottom-content")}>
					<a href="mailto:team@iplpreds.com">
						<Sms />
						team@iplpreds.com
					</a>
					<Typography size="s">
						&copy; 2023 Ipl Preds India
					</Typography>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
