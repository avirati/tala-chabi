export const waitForSeconds = (durationInSeconds: number): Promise<void> =>
  new Promise(
    (resolve) => setTimeout(() => resolve(), durationInSeconds * 1000),
  );
