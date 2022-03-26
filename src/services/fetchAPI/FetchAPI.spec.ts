import { expect } from "chai";
import { dom } from "../../utils/JsDOM.test";
import { HTTPTransport } from "./FetchAPI";
global.window = dom.window;
global.document = window.document;

describe("Проверяем методы FetchAPI", () => {
  const api = new HTTPTransport("");
  it("наличие метода get", () => {
    expect(api.get("") instanceof Promise).to.eq(true);
  });
  it("наличие метода post", () => {
    expect(api.post("") instanceof Promise).to.eq(true);
  });
  it("наличие метода put", () => {
    expect(api.put("") instanceof Promise).to.eq(true);
  });
  it("наличие метода delete", () => {
    expect(api.delete("") instanceof Promise).to.eq(true);
  });
});
