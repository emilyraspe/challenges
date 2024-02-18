let data = "hi";

switch (typeof data) {
  case "string":
    console.log("string!");
    break;
  case "number":
    if (isNaN(data)) {
      console.log("not a number");
    } else {
      console.log("is a number!");
    }
    break;
  case "undefined":
    console.log("undefinded!");
    break;
  case "null":
    console.log("null!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    if (data === null) {
      console.log("null");
    } else if (Array.isArray(data)) {
      console.log("array!");
    } else {
      console.log("object");
    }
    break;

  default:
    console.log("I have no idea!");
}
