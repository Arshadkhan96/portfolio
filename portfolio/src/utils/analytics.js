const ReactGA = {
  event({ category, action, label }) {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }

    if (import.meta.env.DEV) {
      console.info("ReactGA.event", { category, action, label });
    }
  },
};

export default ReactGA;
