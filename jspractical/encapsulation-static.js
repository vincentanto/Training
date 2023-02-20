// 1. Create a class called "Utilties"
//     2. Add a STATIC method to "Utilties" called
//        "camelCase" that has a single parameter:
//        - str (String)
//     3. Add logic to "camelCase" that assumes that
//        "str" is a String and returns the camel-
//        cased version of the String. Eg:
//        "hello there" => "helloThere"
//        "Number Stock Items" => "numberStockItems"
//        * You can assume that the spaces are where
//          we move to the next upper-cased word
//     4. Test this function on some Strings:
//        console.log(Utilities.camelCase("hello there"))
//        // helloThere
//        console.log(Utilities.camelCase("HELLO THERE"))
//        // helloThere
//        console.log(Utilities.camelCase("I love cookies"))
//        // iLoveCookies
//        console.log(Utilities.camelCase("Monkey Banana"))
//        // monkeyBanana
// */

class Utilities {
    static camelCase(str) {
     var string= str.split(" ").join("")
     return string.charAt(0).toLowerCase() + string.slice(1);
    }
  }

  
  //Test Cases

  console.log(Utilities.camelCase("hello there"))

  console.log(Utilities.camelCase("HELLO THERE"))

  console.log(Utilities.camelCase("I love cookies"))

  console.log(Utilities.camelCase("Monkey Banana"))