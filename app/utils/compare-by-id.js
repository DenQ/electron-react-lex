export default function(vector) {
  return function (a, b) {
    const alast = Number(a.id);
    const blast = Number(b.id);
    if (alast < blast) {
      return vector ? -1 : 1;
    } else if (alast > blast) {
      return vector ? 1 : -1;
    }
    return 0;
  }

}
