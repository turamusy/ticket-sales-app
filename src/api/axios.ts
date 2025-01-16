import axios, { AxiosInstance } from 'axios';
/** The instance variable will contain the Axios Instance
 * after initialization with createAxiosInstance.
 * All API calls will make use of this Axios Instance through
 * an API hook, available in the hooks folder.
 */
let instance: AxiosInstance;

/**
 * @description Creates the Axios Instance
 * @memberof axios
 */
export function createAxiosInstance(bearerToken?: string): AxiosInstance {
  const baseURL = '';

  const axiosConfig = {
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL,

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 20000, // default is `0` (no timeout)

    // `validateStatus` defines whether to resolve or reject the promise for a given
    // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
    // or `undefined`), the promise will be resolved; otherwise, the promise will be
    // rejected.
    validateStatus(status: any) {
      return status >= 200 && status < 300; // default
    },
  };
  
  instance = axios.create({
    ...axiosConfig,
    ...(bearerToken && { headers: { Authorization: `Bearer ${bearerToken}` } }),
  });

  return instance;
}

export { instance };