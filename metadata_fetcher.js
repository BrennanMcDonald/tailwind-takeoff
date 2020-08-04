const axios = require("axios");
const DOMParser = require("dom-parser");
const fs = require("fs");
const URL = "https://tailwindcss.com/docs/container";

const scraper = function (URL) {
  axios
    .get(URL)
    .then((res) => {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(res.data, "text/html");
      var [title] = htmlDoc.getElementsByTagName("h1");
      title = title.textContent.replace(/^(.*)v(.*)+(.*)$/gm, "").trim();
      var [table] = htmlDoc.getElementsByTagName("table");
      var tableParser = parser.parseFromString(table.outerHTML, "text/html");
      var classes = tableParser
        .getElementsByTagName("tr")
        .map((el) => el.childNodes[1].textContent.match(/.(.*)/g)[0].trim())
        .filter((el) => el.startsWith("."));
      var resultJSON = {
        title,
        classes,
        documentationURL: URL,
      };

      var safeTitle = title
        .replace(/^(.*)v(.*)+(.*)$/gm, "")
        .trim()
        .toLowerCase()
        .replace(/\s\/\s/gm, "-")
        .replace(/\s/gm, "_");
      fs.writeFile(
        `metadata/${safeTitle}.json`,
        JSON.stringify(resultJSON),
        (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        }
      );
    })
    .catch((err) => {
      console.error(err);
    });
};

axios
  .get(URL)
  .then((res) => {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(res.data, "text/html");
    var listParser = parser.parseFromString(
      htmlDoc.getElementById("nav").outerHTML,
      "text/html"
    );
    var nav = listParser.getElementsByClassName("mb-8");
    var output = nav.splice(5, nav.length - 5);
    output = output.map((el) => {
      var listParser = parser.parseFromString(el.outerHTML, "text/html");
      return listParser
        .getElementsByTagName("a")
        .map((a) => `https://tailwindcss.com${a.getAttribute("href")}`);
    });
    output.flat().forEach((url) => {
      scraper(url);
    });
  })
  .catch((err) => {
    console.error(err);
  });
