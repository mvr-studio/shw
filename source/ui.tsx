import React, { useState, useEffect } from "react";
import fs from "fs";
import Markdown from "ink-markdown";
import { Tabs, Tab } from "ink-tab";
import { Box, useApp, useInput } from "ink";

interface AppProps {
	file?: string;
}

const App = ({ file }: AppProps) => {
	const { exit } = useApp();
	const [size, setSize] = useState({
		columns: process.stdout.columns,
		rows: process.stdout.rows,
	});
	const [currentSlide, setCurrentSlide] = useState(0);
	const mdFile = file && fs.readFileSync(file, "utf-8");
	const slides = mdFile?.split("---");
	const handleTabChange = (name: string) => {
		setCurrentSlide(parseInt(name));
	};

	useEffect(() => {
		const onResize = () => {
			setSize({
				columns: process.stdout.columns,
				rows: process.stdout.rows,
			});
		};

		process.stdout.on("resize", onResize);
		process.stdout.write("\x1b[?1049h");
		return () => {
			process.stdout.off("resize", onResize);
			process.stdout.write("\x1b[?1049l");
		};
	}, []);

	useInput((input, key) => {
		if (input === "q" || key.escape) {
			exit();
		}
	});

	return (
		<Box
			width={size.columns}
			height={size.rows}
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Box display="none">
				<Tabs onChange={handleTabChange}>
					{slides?.map((_: unknown, i: number) => (
						// @ts-ignore
						<Tab key={i} name={String(i)}>
							{i}
						</Tab>
					)) || []}
				</Tabs>
			</Box>
			<Box>
				<Markdown>{slides?.[currentSlide]}</Markdown>
			</Box>
		</Box>
	);
};

module.exports = App;
export default App;
