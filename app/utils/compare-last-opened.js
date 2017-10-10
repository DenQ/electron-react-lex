export default function(a, b) {
  const alast = a.lastOpened || a.id;
  const blast = b.lastOpened || b.id;
  if (alast < blast) {
    return 1;
  } else if (alast > blast) {
    return -1;
  }
  return 0;
}
