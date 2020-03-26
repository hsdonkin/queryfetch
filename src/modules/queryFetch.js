import axios from 'axios';
import { JSDOM } from 'jsdom';

const queryFetch = async (url, selector) => {
  const { data } = await axios.get(url);
  const { window } = new JSDOM(data);
  const { document } = window;
  return document.querySelector(selector);
};

const queryFetchAll = async (url, selector) => {
  const { data } = await axios.get(url);
  const { window } = new JSDOM(data);
  const { document } = window;
  return document.querySelectorAll(selector);
};

export { queryFetch, queryFetchAll };
