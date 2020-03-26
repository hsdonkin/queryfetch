import axios from 'axios';
import { JSDOM } from 'jsdom';

const queryFetch = async (url, selector) => {
  const { data } = await axios.get(url);

  const { window } = new JSDOM(data);
  const { document } = window;
  console.log(window);
  console.log(document.querySelector(selector));
  // return htmlDocument.querySelector(selector);
};

const queryFetchAll = async (url, selector) => {
  const { data } = await axios.get(url);

  const { window } = new JSDOM(data);
  const { document } = window;
  console.log(window);
  console.log(document.querySelectorAll(selector));
  // return htmlDocument.querySelector(selector);
};

export { queryFetch, queryFetchAll };
