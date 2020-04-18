window.onerror = (message, source, lineno, colno, error) => {
  console.warn('window.onerror-handler:', {
    message, source, lineno, colno, error,
  });
};
