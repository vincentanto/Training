//6.valid name
function validName(name) {
    const temp= name.replace(".", "").split(" ");
    if (!name.includes(".")) return false;
    if (temp.length < 2 || temp.length > 3) return false;
    if (temp.length === 2 && temp[0].length == 1 && temp[0].charAt(0) < "a") {
      return true;
    }
    return false;
  };
  
  console.log(validName("H. Wells"));
  console.log(validName("h. Wells"));
  console.log(validName("H Wells"));
  console.log(validName("H. George Wells"));
  console.log(validName("H. George W."));
  console.log(validName("H. George W."));