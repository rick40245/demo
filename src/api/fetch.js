export default async function fetchData(url, data={}, type='GET') {
    try {
        const req = await fetch(`${url}`, {
            method: type,
            headers: {
                'Content-Type': 'application/json'
            },
            body: type === 'GET' ? null : JSON.stringify(data)
        })
        if(req.status === 302) return document.location.href='/login'
        return req.json();
    } catch (error) {
        console.error(error);
    }
}