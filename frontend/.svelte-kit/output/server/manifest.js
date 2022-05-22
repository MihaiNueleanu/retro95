export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","icons/cd_audio.png","icons/computer_explorer_cool-0.png","icons/directory_open_file_mydocs_2k-4.png","icons/paint_file-5.png","icons/template_empty-2.png","icons/world-5.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-affbc3ab.js","js":["start-affbc3ab.js","chunks/index-9f0fbd2a.js","chunks/index-4211165c.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
