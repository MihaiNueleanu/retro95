import type { RequestHandler } from '.svelte-kit/types/src/routes/api/messages';
// import type { RequestHandler } from '@sveltejs/kit';
import { getDb } from 'src/services/db';

export async function get(req: RequestHandler<{ limit: number; offset: number }>) {
	const item = await getDb()
		.collection('messages')
		.find(
			{},
			{
				sort: { createdAt: -1 },
				limit: 100,
				skip: 0
			}
		)
		.toArray();

	if (item) {
		return {
			body: { item }
		};
	}

	return {
		status: 404
	};
}
