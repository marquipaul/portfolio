import Typed from 'typed.js';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      typed: (el: string, strings: Array<string>) => new Typed(el, {
        strings: strings,
        typeSpeed: 70,
        backSpeed: 10,
        loop: true
      })
    }
  }
})