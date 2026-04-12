const { ESLint } = require("eslint");

async function main() {
  const eslint = new ESLint();
  const results = await eslint.lintFiles(["src/**/*.ts"]);
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);
  console.log(resultText);
}

main().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
