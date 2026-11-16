import { useEffect, useRef } from "react";

export const useScrollReveal = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(".scroll-reveal");
    if (!targets.length) return;

    // Restore is-visible on any targets already revealed so React re-renders never hide them
    targets.forEach((el) => {
      if (el.getAttribute("data-revealed") === "true") {
        el.classList.add("is-visible");
      }
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => {
        el.setAttribute("data-revealed", "true");
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // Triggers only once for the first time
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -30px 0px",
      }
    );

    targets.forEach((el) => {
      if (el.getAttribute("data-revealed") !== "true") {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  });

  return containerRef;
};
