export default function getOption(state, key) {
  const { options } = state;
  const collection = options.records.filter(item => item.key === key);
  if (collection.length > 0) {
    return collection[0].value;
  }
}
