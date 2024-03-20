import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	variant: "default" | "outlined";
}

export const Button = ({
	title,
	variant = "default",
	type = "button",
	...props
}: ButtonProps) => {
	const styles = {
		outlined:
			"border-b-4 border-x-2 border-t-4 border-blue-500 bg-white text-blue-500 active:bg-blue-700 active:text-white",
		default: "bg-blue-500 active:bg-white active:text-blue-500",
	};
	return (
		<button
			className={`px-4 py-2 rounded-lg box-border ${styles[variant]}`}
			type={type}
			{...props}
		>
			{title}
		</button>
	);
};
