import { expect } from "chai";
import { readFileSync } from "fs";
import { join } from "path";

describe("data source", () => {
  let sources;

  before(() => {
    sources = JSON.parse(
      readFileSync(join(__dirname, "/../data/data-sources.json"), "utf-8")
    );
  });

  it("should have name, type, and url.", () => {
    for (let source of sources) {
      expect(source.name).to.be.a("string");
      expect(source.type).to.be.a("string");
      expect(source.url).to.be.a("string");
    }
  });

  it("should have apiKey and apiUrl for Junar sources.", () => {
    for (let source of sources) {
      if (source.type.toLowerCase() !== "junar") {
        continue;
      }

      expect(source.apiKey).to.be.a("string");
      expect(source.apiUrl).to.be.a("string");
    }
  });
});
