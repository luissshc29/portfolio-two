export type Job = {
	id: number,
	function: {
		br: string,
		us: string,
	},
	company: {
		br: string,
		us: string,
	},
	description: {
		br: string,
		us: string
	},
	logo: string,
	date: {
		br: string,
		us: string,
	},
	icon: React.ReactElement,
}