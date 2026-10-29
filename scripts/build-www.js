#!/usr/bin/env node
// Copies the app (no build step needed) into www/, which Capacitor packs into the iOS and Android apps.
// Everything is bundled, so the store apps work fully offline from the first launch.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "www");
const include = ["index.html", "manifest.webmanifest", "css", "js", "data", "icons"];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const item of include) fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true });
console.log("Copied app to www/");
