import sponsorkit from 'sponsorkit';
const { defineConfig, presets } = sponsorkit;

export default defineConfig({
	width: 800,
	renderer: 'tiers', // or 'circles'
	formats: ['png'],
    outputDir: '.',
	tiers: [
		// Past sponsors, currently only supports GitHub
		{
			title: 'Past Sponsors',
			monthlyDollars: -1,
			preset: presets.xs,
		},
		{
			title: 'Sponsors',
			preset: presets.base,
		},
	],
});
