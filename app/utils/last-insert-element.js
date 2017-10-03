export default function(collection) {
  return collection
    .find()
    .sort({ _id: -1 })
    .limit(1)
    .toArray();
}
