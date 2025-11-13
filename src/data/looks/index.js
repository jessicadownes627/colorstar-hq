const lookModules = import.meta.glob('./*.json', {
  eager: true,
  import: 'default',
});

const looks = Object.values(lookModules)
  .map((look) => ({
    ...look,
    id: look.id.trim(),
  }))
  .sort((a, b) => a.lookName.localeCompare(b.lookName));

export function getLooks() {
  return looks;
}

export function getLookById(id) {
  return looks.find((look) => look.id === id);
}
