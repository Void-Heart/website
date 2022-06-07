/** @type {import('./__types').RequestHandler} */
export const get = async ({ locals }) => {
    // @ts-ignore
    return {body: {github_data: locals.github_data, page: locals.page, page_back: locals.page_back, page_next: locals.page_next}}
}