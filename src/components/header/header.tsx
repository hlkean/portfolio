import React from "react";
import Link from "next/link";

type NavLink = {
	href: string;
	title: string;
};

type HeaderProps = {
	navData: NavLink[];
};

export const Header = ({ navData }: HeaderProps) => {
	return (
		<nav className="bg-white text-black border-b-2 border-blue-500">
			<ul className="flex justify-between list-none px-5">
				{navData.map((page) => (
					<li>
						<Link href={page.href}>{page.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
