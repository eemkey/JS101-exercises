function uuid() {
  const chars = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const sections = [8, 4, 4, 4, 12];
  let uuid = "";
  sections.forEach(num => {
    for (let i = 0; i < num; i++) {
    uuid += chars[Math.floor(Math.random() * chars.length)];
    }
    if (uuid.length < 36) {
      uuid += "-";
    }
  });
  return uuid;
}

console.log(uuid());