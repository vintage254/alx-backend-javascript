export default function getStudentsByLocation(array, city) {
  return array.filter((a) => a.location === city);
}
