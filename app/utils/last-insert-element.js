export default function(collection) {
  return collection
    .find()
    .sort({ _id: -1 })
    .limit(1)
    .toArray();
  // return result.length ? result[0] : null;
}
