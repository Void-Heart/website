import { page } from '$app/stores';

/** @type {import('./__types').RequestHandler} */
export const get = async ({ locals }) => {
    // @ts-ignore
    return {body: {github_data: locals.github_data, page: locals.page}}
}