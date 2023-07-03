export const setCustomViewportHeightVariable = () => {
  document.documentElement.style.setProperty('--trueViewportHeight', `${window.innerHeight}px`);
};

export const setCustomViewportWidthVariable = () => {
  document.documentElement.style.setProperty('--trueViewportWidth', `${window.innerWidth}px`);
};

export const setCustomViewportSizeVariableUpdater = () => {
  window.addEventListener('resize', () => {
    setCustomViewportHeightVariable();
  });
};
