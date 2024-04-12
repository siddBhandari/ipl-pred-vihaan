import React from "react";
import { IconProps } from "../types";

export const ArrowSquare: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M12.1406 15.0691V13.1091C12.1406 10.5891 14.1806 8.53906 16.7106 8.53906H18.6706"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.62109 8.55078H7.58112C10.1011 8.55078 12.1511 10.5908 12.1511 13.1208V13.7708V17.2508"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.13983 6.75L5.33984 8.55L7.13983 10.35"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.8594 6.75L18.6594 8.55L16.8594 10.35"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Arrow: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.4"
				d="M12 22V20"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M12 18V16"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 14V11C12 7.13 15.13 4 19 4H22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 4H5C8.87 4 12 7.13 12 11V12V14"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 2L2 4L4 6"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 2L22 4L20 6"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GlobalEdit: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 9.00156C8.84 7.05156 15.16 7.05156 21 9.00156"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M19.211 15.741L15.671 19.281C15.531 19.421 15.401 19.681 15.371 19.871L15.181 21.221C15.111 21.711 15.451 22.051 15.941 21.981L17.291 21.791C17.481 21.761 17.751 21.631 17.881 21.491L21.421 17.951C22.031 17.341 22.321 16.631 21.421 15.731C20.531 14.841 19.821 15.131 19.211 15.741Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GlobalSearch: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M8.00156 3H9.00156C7.05156 8.84 7.05156 15.16 9.00156 21H8.00156"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 9.00156C8.84 7.05156 15.16 7.05156 21 9.00156"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 22L21 21"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Map: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 8.99953V14.9995C22 17.4995 21.5 19.2495 20.38 20.3795L14 13.9995L21.73 6.26953C21.91 7.05953 22 7.95953 22 8.99953Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M6.24124 7.97875C6.92124 5.04875 11.3212 5.04875 12.0012 7.97875C12.3912 9.69875 11.3112 11.1588 10.3612 12.0588C9.67123 12.7188 8.58125 12.7188 7.88125 12.0588C6.93125 11.1588 5.84124 9.69875 6.24124 7.97875Z"
				stroke="#292D32"
				strokeWidth="1.5"
			/>
			<path
				opacity="0.4"
				d="M9.09607 8.69922H9.10505"
				stroke="#292D32"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PictureFrame: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M9 2L13.95 22"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.53 12.2188L2 14.9987"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const Radar2: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Radar: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const RouteSquare: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.4"
				d="M17.3509 9.05077L15.0109 16.5908C14.4509 18.3808 11.9409 18.4108 11.3509 16.6308L10.651 14.5608C10.461 13.9908 10.0109 13.5308 9.44095 13.3508L7.36095 12.6508C5.59095 12.0608 5.62095 9.53077 7.41095 8.99077L14.951 6.64077C16.431 6.19077 17.8209 7.58077 17.3509 9.05077Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
