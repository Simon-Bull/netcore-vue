import Vue from 'vue';
import { createApp } from './app';

const { menu, basket, store } = createApp();

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

menu.$mount('[data-menu]');
basket.$mount('[data-basket]');
