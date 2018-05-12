function det() {

  let args = Array.from(arguments)

  return args[0][1][1] - args[0][1][0];

}
console.log(det([[1,2,3],[4,5,6],[7,8,9]]));
