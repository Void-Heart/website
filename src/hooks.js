/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    if (event['url']['pathname'] == '/commits') {
        let page = "1";
        let next_page = "2";
        let back_page = "1";
        if (event.url.searchParams.get('page') != null) {
            // @ts-ignore
            page = event.url.searchParams.get('page');
            next_page = (Number(page)+1).toString();
            back_page = (Number(page)-1).toString();
            if (back_page == "0") {
                back_page = "1";
            }
        }
        let github_data = await get_github_data(event, page);
        // @ts-ignore
        event.locals.github_data = github_data;
    }
    const response = await resolve(event);
    return response;
}

// @ts-ignore
async function get_github_data(event, page) {
    let tryagain = false;
    let url = 'http://localhost:5636/get_commit_history';
    var data = [];
    try {
        // @ts-ignore
        const resp = await fetch(url, {
            method: 'GET'
        })
        // @ts-ignore
        data = await resp.json();
    }
    catch(err) {
        // @ts-ignore
        if (err['errno'] == 'ERR_STREAM_PREMATURE_CLOSE') {
            tryagain = true;
        } else {
            throw err
        }
    }
    finally {
        if (tryagain == true) {
            // @ts-ignore
            data = get_github_data(event, page);
        }
    }
    return data;
}