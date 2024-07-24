const Baseurl = 'https://api.tvmaze.com';

const apiGet = async search => {
  //throw new Error("404");
  const response = await fetch(`${Baseurl}${search}`);
  const body = await response.json();
  return body;
};

export const searchShow = query => apiGet(`/search/shows?q=${query}`);
export const searchPeople = query => apiGet(`/search/people?q=${query}`);
export const  getShowById = showId => apiGet(`/shows/${showId}? embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async showIds =>{
  const promises = showIds.map(showId=>apiGet(`/shows/${showId}`));
  return Promise.all(promises);
}