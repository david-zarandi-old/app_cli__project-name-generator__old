import * as assert from "node:assert";
import { describe, it } from "node:test";
import { generateProjectName } from "./generator";

describe("Name Genertor", () => {
  it("should generate valid web application type name", () => {
    const webAppName = generateProjectName({
      prefixKey: "APPLICATION",
      applicationTypeKey: "WEB",
      name: "my-web-application",
    });
    assert.strictEqual(webAppName, "app_web__my-web-application");
  });

  it("should generate valid cli application type name", () => {
    const cliAppName = generateProjectName({
      prefixKey: "APPLICATION",
      applicationTypeKey: "CLI",
      name: "my-cli-application",
    });
    assert.strictEqual(cliAppName, "app_cli__my-cli-application");
  });

  it("should generate valid library type name", () => {
    const libraryName = generateProjectName({ prefixKey: "LIBRARY", name: "my-library" });
    assert.strictEqual(libraryName, "lib__my-library");
  });

  it("should generate valid workshop type name", () => {
    const workshopName = generateProjectName({ prefixKey: "WORKSHOP", name: "my-workshop" });
    assert.strictEqual(workshopName, "wshp__my-workshop");
  });

  it("should generate valid proof of concept type name", () => {
    const proofOfConceptName = generateProjectName({ prefixKey: "PROOF_OF_CONCEPT", name: "my-proof-of-concept" });
    assert.strictEqual(proofOfConceptName, "poc__my-proof-of-concept");
  });
});
