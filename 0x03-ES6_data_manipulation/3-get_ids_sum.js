export default function getStudentIdsSum(array) {
  return array.reduce((sum, current) => sum + current, 0);
}
