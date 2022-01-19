import {
	Center,
	CircularProgress,
	CircularProgressLabel,
	useBreakpointValue,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { schedule } from "config";

export default function Home() {
	const size = useBreakpointValue({
		base: "200px",
		sm: "400px",
		md: "600px",
	});

	const [timeLeft, setTimeLeft] = useState(0);

	useEffect(() => {
		let now = new Date(Date.now());

		schedule.forEach((classTime) => {
			let classTimeDate = new Date(classTime.end);
			if (classTimeDate > now) {
				console.log(classTimeDate);
				console.log(now);
				setTimeLeft(classTimeDate.getTime() - now.getTime());
			}
		});

		// let valueStart ;
		// let valueStop ;

		// let timeStart = new Date("01/01/2007 " + valueStart).getHours();
		// let timeEnd = new Date("01/01/2007 " + valueStop).getHours();

		// setTimeLeft(timeEnd - timeStart);
	}, []);

	return (
		<Center minH="100vh">
			<CircularProgress
				size={size}
				thickness={5}
				value={timeLeft}
				capIsRound
			>
				<CircularProgressLabel
					fontSize={(parseInt(size) / 8).toString()}
				>
					{timeLeft}
					<Text fontSize={(parseInt(size) / 16).toString()}>
						Until 3rd period ends
					</Text>
				</CircularProgressLabel>
			</CircularProgress>
		</Center>
	);
}
