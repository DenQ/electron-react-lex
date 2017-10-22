export default function objectFill(data) {
  const opt = {};
  data.forEach((item) => {
    opt[item.key] = item.value;
  });
  return opt;
}
