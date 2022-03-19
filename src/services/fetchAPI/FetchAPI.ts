enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

function queryStringify(data: object | ArrayLike<unknown> | undefined): string {
  let str = "?";
  str =
    str +
    Object.entries(data as object).reduce(
      (acc, [key, value]) => `${acc}&${key}=${value}`,
      ""
    );
  return str;
  // return str.slice(0, -1);
}

export type OptionsType = {
  timeout?: number;
  data?: Record<string, any>;
  headers?: { [key: string]: string };
  method?: METHODS;
  retries?: number;
  isQueryParams?: boolean;
};
const options = {
  method: METHODS.GET,
  timeout: 1000,
  data: { test: "test" },
  headers: { "Content-Type": "application/json" },
  isQueryParams: false,
  retries: 2,
};
export class HTTPTransport {
  static BASE_URL = "https://ya-praktikum.tech/api/v2";
  endpoint: string;
  options: {
    method: METHODS;
    timeout: number;
    data: { test: string };
    headers: { "Content-Type": string };
    isQueryParams: boolean;
  };

  constructor(endpoint: string) {
    this.endpoint = HTTPTransport.BASE_URL + endpoint;
    this.options = options;
  }
  get = (url: string, options: OptionsType = { ...this.options }) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      this.endpoint + url + params,
      {
        ...options,
        method: METHODS.GET,
        headers: options.headers || { "Content-Type": "application/json" },
      },
      options.timeout
    );
  };

  put = (url: string, options: OptionsType = { ...this.options }) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      this.endpoint + url + params,
      {
        ...options,
        method: METHODS.PUT,
        headers: options.headers || { "Content-Type": "application/json" },
      },
      options.timeout
    );
  };

  post = (url: string, options: OptionsType = { ...this.options }) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      this.endpoint + url + params,
      {
        ...options,
        method: METHODS.POST,
        headers: options.headers || { "Content-Type": "application/json" },
      },
      options.timeout
    );
  };

  delete = (url: string, options: OptionsType = { ...this.options }) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      this.endpoint + url + params,
      {
        ...options,
        method: METHODS.DELETE,
        headers: options.headers || { "Content-Type": "application/json" },
      },
      options.timeout
    );
  };

  request = (url: string, options: OptionsType, _timeout = 5000) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.responseType = "json";
      xhr.open(method as string, url);
      if (data instanceof FormData) {
      } else {
        if (headers) {
          for (const key of Object.keys(headers)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      if (method === METHODS.GET) {
        xhr.send();
      } else if (data instanceof FormData) {
        console.log([...data.entries()]);

        xhr.send(data);
      } else {
        xhr.send(this.dataWrapper(data));
      }
    });
  };

  fetchWithRetry(url: URL, options: OptionsType) {
    function recursiveFetch(
      url: URL,
      options: OptionsType,
      retries: number | undefined
    ) {
      if (!retries) {
        throw new Error("retries = 0");
      }
      const reqestXHR = this.request(url, options);
      return reqestXHR
        .then((res: any) => res)
        .catch((_: Error) => recursiveFetch(url, options, retries - 1));
    }
    const { retries } = options;
    const result = recursiveFetch(url, options, retries);
    return Promise.resolve(result);
  }
  dataWrapper(
    data:
      | string
      | { [key: string]: unknown }
      | Document
      | Blob
      | ArrayBufferView
      | ArrayBuffer
      | FormData
      | undefined
  ): Document | XMLHttpRequestBodyInit {
    if (typeof data === "object") {
      return JSON.stringify(data);
    }
    return data as XMLHttpRequestBodyInit;
  }
}
