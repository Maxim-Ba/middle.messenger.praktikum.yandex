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
    Object.entries(data as object).reduce((acc, [key, value]) => `${acc}&${key}=${value}`, "");
  return str;
  // return str.slice(0, -1);
}

type OptionsType = {
  timeout?: number;
  data?: { [key: string]: unknown };
  headers?: { [key: string]: string };
  method: METHODS;
  retries?: number;
  isQueryParams?: boolean;
};
export class HTTPTransport {
  options = {
    method: METHODS.GET,
    timeout: 5000,
    data: { test: "test" },
    headers: { "Content-Type": "text/plain" },
    isQueryParams: false,
  };

  get = (url: string, options: OptionsType = this.options) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      url + params,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  put = (url: string, options: OptionsType = this.options) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      url + params,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  post = (url: string, options: OptionsType = this.options) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      url + params,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  delete = (url: string, options: OptionsType = this.options) => {
    let params = "";
    if (options.isQueryParams) {
      params = queryStringify(options.data);
    }
    return this.request(
      url + params,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request = (url: string, options: OptionsType, _timeout = 5000) => {
    const { method, data, headers } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      if (headers) {
        for (const key of Object.keys(headers)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }

      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject("responce status " + xhr.status);
        }
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      if (method === METHODS.GET) {
        xhr.send();
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
