import { slugify } from "@/utils/functions";

export interface ITeamMapperModel {
	name: string;
	code: string;
	flag: string;
	captain: {
		name: string;
		image: string;
	};
	color: string;
	gradient: string;
}

let teamCodeToNameMapper: {
	[key: string]: string;
} = {
	MI: "Mumbai Indians",
	CSK: "Chennai Super Kings",
	DC: "Delhi Capitals",
	RR: "Rajasthan Royals",
	RCB: "Royal Challengers Bangalore",
	KKR: "Kolkata Knight Riders",
	PBKS: "Punjab Kings",
	LSG: "Lucknow Super Giants",
	GT: "Gujrat Titans",
	SRH: "Sun Risers Hyderabad"
};

Object.keys(teamCodeToNameMapper).forEach((key) => {
	teamCodeToNameMapper[teamCodeToNameMapper[key]] = teamCodeToNameMapper[key];
});

const allTeamDetails: ITeamMapperModel[] = [
	{
		name: teamCodeToNameMapper["MI"],
		code: "MI",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png",
		captain: {
			name: "Hardik Pandya",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/54.png",
		},
		color: "var(--team-india-color)",
		gradient: "var(--team-india-gradient)",
	},
	{
		name: teamCodeToNameMapper["CSK"],
		code: "CSK",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
		captain: {
			name: "Ruturaj Gaikwad",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/102.png",
		},
		color: "var(--team-pakistan-color)",
		gradient: "var(--team-pakistan-gradient)",
	},
	{
		name: teamCodeToNameMapper["DC"],
		code: "DC",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
		captain: {
			name: "Rishabh Pant",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/18.png",
		},
		color: "var(--team-south-africa-color)",
		gradient: "var(--team-south-africa-gradient)",
	},
	{
		name: teamCodeToNameMapper["GT"],
		code: "GT",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Logooutline/GToutline.png",
		captain: {
			name: "Shubhman Gill",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/62.png",
		},
		color: "var(--team-australia-color)",
		gradient: "var(--team-australia-gradient)",
	},
	{
		name: teamCodeToNameMapper["KKR"],
		code: "KKR",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
		captain: {
			name: "Shreyas Iyer",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/12.png",
		},
		color: "var(--team-new-zealand-color)",
		gradient: "var(--team-new-zealand-gradient)",
	},
	{
		name: teamCodeToNameMapper["LSG"],
		code: "LSG",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
		captain: {
			name: "KL Rahul",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/19.png",
		},
		color: "var(--team-england-color)",
		gradient: "var(--team-england-gradient)",
	},
	{
		name: teamCodeToNameMapper["PBKS"],
		code: "PBKS",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
		captain: {
			name: "Shikhar Dhawan",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/11.png",
		},
		color: "var(--team-sri-lanka-color)",
		gradient: "var(--team-sri-lanka-gradient)",
	},
	{
		name: teamCodeToNameMapper["RR"],
		code: "RR",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Logooutline/RRoutline.png",
		captain: {
			name: "Sanju Samson",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/190.png",
		},
		color: "var(--team-bangladesh-color)",
		gradient: "var(--team-bangladesh-gradient)",
	},
	{
		name: teamCodeToNameMapper["RCB"],
		code: "RCB",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
		captain: {
			name: "Faf Du Plesis",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/94.png",
		},
		color: "var(--team-afghanistan-color)",
		gradient: "var(--team-afghanistan-gradient)",
	},
	{
		name: teamCodeToNameMapper["SRH"],
		code: "SRH",
		flag: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Logooutline/SRHoutline.png?hgghhg",
		captain: {
			name: "Pat Cummins",
			image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/33.png",
		},
		color: "var(--team-netherlands-color)",
		gradient: "var(--team-netherlands-gradient)",
	},
];

const teamMapper: {
	[key: string]: ITeamMapperModel;
} = (() => {
	const mapper: {
		[key: string]: ITeamMapperModel;
	} = {};
	allTeamDetails.forEach((team) => {
		mapper[slugify(team.name)] = team;
	});
	allTeamDetails.forEach((team) => {
		mapper[slugify(team.code)] = team;
	});
	allTeamDetails.forEach((team) => {
		mapper[team.code] = team;
	});
	return mapper;
})();

export { teamMapper, teamCodeToNameMapper };
