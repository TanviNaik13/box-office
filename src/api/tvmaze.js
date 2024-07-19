const Baseurl = 'https://api.tvmaze.com';

const apiGet = async search => {
  //throw new Error("404");
  const response = await fetch(`${Baseurl}${search}`);
  const body = await response.json();
  return body;
};

export const searchShow = query => apiGet(`/search/shows?q=${query}`);
export const searchPeople = query => apiGet(`/search/people?q=${query}`);
