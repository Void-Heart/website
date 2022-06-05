import fs from "node:fs"
/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    if (event['url']['pathname'] == '/commits') {
        let page = 1;
        if (event.url.searchParams.get('page') != null) {
            // @ts-ignore
            page = event.url.searchParams.get('page');
        }
        let key = fs.readFileSync('key', 'utf-8').split(':')
        let url = 'https://api.github.com/repos/' + key[0] + '/commits?page=' + page
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + Buffer.from(key[1] + ":" + key[2]).toString('base64'));
        const resp = fetch(url, {
            method: 'GET',
            headers: headers
        });
        // @ts-ignore
        event.locals.github_data = await (await resp).json();
        // @ts-ignore
        event.locals.page = page;
    }
    const response = await resolve(event);
    return response;
}
