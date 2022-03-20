const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export const dom = new JSDOM(`
    <!DOCTYPE html>
    <div id="root"></div>
  `).window;

