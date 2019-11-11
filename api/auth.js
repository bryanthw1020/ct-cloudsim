import { apiRoute } from "../config";

export default $axios => ({
  info(searchQuery) {
    let url = apiRoute.auth.info;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  }
})