const jsdom = require("jsdom");
const { JSDOM } = jsdom;
export const { document } = new JSDOM(`
    <!DOCTYPE html>
    <div id="root"></div>
  `).window;
