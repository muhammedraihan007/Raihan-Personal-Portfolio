import { useEffect } from 'react';

/**
 * useScrollReveal
 * Adds the "is-visible" class to all elements with the "reveal" or
 * "reveal-stagger" class as they enter the viewport.
 *
 * Usage: call once in App.jsx after mount.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-stagger';
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * useTypewriter
 * Types out text character by character into the target element.
 *
 * @param {React.RefObject} ref - ref to the element
 * @param {string} text - text to type
 * @param {number} speed - ms per character (default 70)
 * @param {number} delay - ms before starting (default 400)
 */
export function useTypewriter(ref, text, speed = 70, delay = 400) {
  useEffect(() => {
    if (!ref.current || !text) return;
    const el = ref.current;
    el.textContent = '';
    let i = 0;
    let timeout;

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [ref, text, speed, delay]);
}