import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(new URL("..", import.meta.url).pathname);
const skillsRoot = join(repoRoot, "skills");
const catalogDir = join(repoRoot, "catalog");
const catalogPath = join(catalogDir, "skills.json");

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function buildCatalog() {
  const skillDirs = readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "en"));

  const items = skillDirs.map((dirName) => {
    const manifestPath = join(skillsRoot, dirName, "skill.json");
    if (!existsSync(manifestPath)) {
      throw new Error(`Missing manifest: ${manifestPath}`);
    }

    const manifest = readJson(manifestPath);
    const entryPath = join(skillsRoot, dirName, manifest.entry || "SKILL.md");
    if (!existsSync(entryPath)) {
      throw new Error(`Missing entry file for ${manifest.id}: ${entryPath}`);
    }

    return {
      id: manifest.id,
      slug: manifest.slug,
      name: manifest.name,
      displayName: manifest.displayName,
      description: manifest.description,
      version: manifest.version,
      category: manifest.category,
      tags: manifest.tags || [],
      author: manifest.author || "TeamAligned",
      entry: manifest.entry || "SKILL.md",
      recommendedTools: manifest.recommendedTools || [],
      sources: manifest.sources || [],
      installPath: `skills/${dirName}`,
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    count: items.length,
    skills: items,
  };
}

mkdirSync(catalogDir, { recursive: true });
writeFileSync(catalogPath, `${JSON.stringify(buildCatalog(), null, 2)}\n`, "utf8");
console.log(`Updated ${catalogPath}`);

