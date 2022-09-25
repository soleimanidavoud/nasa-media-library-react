export const baseUrl = () => {
  if (process.env.REACT_APP_ENV) {
    return process.env.REACT_APP_REST_ENDPOINT;
  }

  throw new Error("Can not access to env for return public URL");
};
