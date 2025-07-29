export const displayActualColor = (color: string) => {
  switch (color) {
    case "B":
      return "bg-black";
    case "W":
      return "bg-white";
    case "G":
      return "bg-green-500";
    case "R":
      return "bg-red-500";
    case "Y":
      return "bg-yellow-500";
    case "P":
      return "bg-purple-500";
    case "O":
      return "bg-orange-500";
    case "B":
      return "bg-blue-500";
    case "PK":
      return "bg-pink-500";
    case "BK":
      return "bg-black";
    default:
  }
};
