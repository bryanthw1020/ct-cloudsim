import { apiRoute } from "../config";

export default $axios => ({
  category(searchQuery) {
    let url = apiRoute.dropdown.category;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  merchant(searchQuery) {
    let url = apiRoute.dropdown.merchant;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  merchantTax(searchQuery) {
    let url = apiRoute.dropdown.merchantTax;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  paymentMethod(searchQuery) {
    let url = apiRoute.dropdown.paymentMethod;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  product(searchQuery) {
    let url = apiRoute.dropdown.product;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  postcode(searchQuery) {
    let url = apiRoute.dropdown.postcode;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  state(searchQuery) {
    let url = apiRoute.dropdown.state;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  user(searchQuery) {
    let url = apiRoute.dropdown.user;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  variant(searchQuery) {
    let url = apiRoute.dropdown.variant;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
  variantChild(searchQuery) {
    let url = apiRoute.dropdown.variantChild;

    if (searchQuery) {
      url += "?" + searchQuery;
    }

    return $axios.$get(url);
  },
})