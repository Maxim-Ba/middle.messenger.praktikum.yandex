enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

function queryStringify(data): string {
  let str = "?";
  for (let key of Object.keys(data)) {
    let tmp = `${key}=`;
    if (Array.isArray(data[key])) {
      tmp = tmp + data[key].join(",");
      str = str + tmp + "&";
      continue;
    }
    tmp = tmp + data[key];
    str = str + tmp + "&";
  }
  return str.slice(0, -1);
}
type OptionsType = {
  timeout?: number;
  data?: { [key: string]: unknown };
  headers?: { [key: string]: string };
  method: METHODS;
  retries?: number;
};
export class HTTPTransport {
  options = {
    method: METHODS.GET,
    timeout: 5000,
    data: { test: "test" },
    headers: { "Content-Type": "text/plain" },
  };

  get = (url: URL, options: OptionsType = this.options) => {
    let params = "";
    if (!!options.data) {
      params = queryStringify(options.data);
    }
    return this.request(
      //@ts-ignore
      url + params,
      { ...options, method: METHODS.GET },
      options.timeout,
    )
      .then((res) => console.log(res, "res"))
      .catch((err) => console.log(err, "err"));
  };

  put = (url: URL, options: OptionsType = this.options) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    );
  };

  post = (url: URL, options: OptionsType = this.options) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout,
    );
  };

  delete = (url: URL, options: OptionsType = this.options) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout,
    );
  };

  request = (url: URL, options: OptionsType, timeout: number = 5000) => {
    const { method, data, headers } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      if (headers) {
        for (let key of Object.keys(headers)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }

      xhr.onload = () => {
        console.log(xhr, "---xhr", method);
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      if (method === METHODS.GET) {
        xhr.send();
      } else {
        //@ts-ignore
        xhr.send(data);
      }
    });
  };
  fetchWithRetry(url: URL, options: OptionsType) {
    function recursiveFetch(url, options, retries) {
      if (!retries) {
        throw new Error("retries = 0");
      }
      const reqestXHR = this.request(url, options);
      return reqestXHR
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return recursiveFetch(url, options, retries - 1);
        });
    }
    let { retries } = options;
    const result = recursiveFetch(url, options, retries);
    return Promise.resolve(result);
  }
}
