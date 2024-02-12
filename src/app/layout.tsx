'use client'
import "@/styles/globals.css";
import { Metadata ,Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
  } from 'recoil';

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

// or Dynamic metadata
// export async function generateMetadata() {
// 	return {
// 		title: {
// 			default: siteConfig.name,
// 			template: `%s - ${siteConfig.name}`,
// 		},
// 	}
// }

// export const metadata: Metadata = {
// 	title: {
// 		default: siteConfig.name,
// 		template: `%s - ${siteConfig.name}`,
// 	},
// 	description: siteConfig.description,
	
// 	icons: {
// 		icon: "/favicon.ico",
// 		shortcut: "/favicon-16x16.png",
// 		apple: "/apple-touch-icon.png",
// 	},
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<RecoilRoot>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={clsx(
						"min-h-screen  font-sans antialiased  bg-background",
						fontSans.variable
					)}
				>
					<Providers themeProps={{ attribute: "data-theme", defaultTheme: "system" }}>
						<div className="relative flex flex-col ">
							<Navbar />
							<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
								{children}
							</main>
							<footer className="w-full flex items-center justify-center py-3">
								<Link
									isExternal
									className="flex items-center gap-1 text-current"
									href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
									title="nextui.org homepage"
								>
									<span className="text-default-600">Powered by</span>
									<p className="text-primary">NextUI + ShadCN + DaisyUI</p>
								</Link>
							</footer>
						</div>
					</Providers>
				</body>
			</html>
		</RecoilRoot>
	);
}
