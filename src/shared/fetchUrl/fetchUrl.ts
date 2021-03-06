
/**
 * Fetch call always resolves even with bad requests (except network error)
 * so adding a wrapper over fetch to reject request if response is not ok
 * Rejected promise can be caught with catch at the calling functions and can be handled
 * @param url
 * @param config
 */
const fetchUrl = (url: string, config = {}): Promise<any> =>
  fetch(url, config).then(async response => {
    const data = await response.json();
    return response.ok ? data : Promise.reject(data);
  }).catch((err) => Promise.reject());

export default fetchUrl;
