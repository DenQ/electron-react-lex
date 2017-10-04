export default function(a, b) {
  const alast = a.lastOpened;
  const blast = b.lastOpened;
  if (alast < blast) {
    return 1;
  } else if (alast > blast) {
    return -1;
  }
  return 0;
}
