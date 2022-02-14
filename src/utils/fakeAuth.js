export const fakeAuth = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('thetoken111455'), 250);
  });
};
