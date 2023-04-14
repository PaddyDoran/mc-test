require("esbuild").buildSync({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  format: "esm",
  platform: "node",
  target: ["esnext"],
  tsconfig: "tsconfig.build.json",
  outfile: "dist/pd-mc-23.js",
});
