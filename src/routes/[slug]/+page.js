import { data } from '$lib/index';

export async function load({ params }) {
	return {
		page: await data.find((i) => i.slug == params.slug)
	};
}