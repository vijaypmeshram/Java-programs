console.log("we r connected");

let regex = /harry/
// console.log(regex);
// console.log(regex.source);

let s =" this is great code wuth harry  and also viju";
// function to match expressions
//1.exec() = this function will return an array for match or null for no match
let result = regex.exec(s);
// console.log(result)
// console.log(result.index)
// console.log(result.input)

//2.test() = returns true or false
let result2 = regex.test(s);
// console.log(result2) ==>this will only print if the regex is there in the string"s";

//3.match() = it will return an array of results or null
// let result3 = regex.match(s); -->this is wrong
//  let result3 = s.match(regex) --> this is right
//  console.log(result3)



//4.search()=  return index of first match
let result4 = s.search(regex);
// console.log(result4)


//5.replace()= return new replaced string with all the replacement (if no flag is given first match wil be replaced)
let result5 = s.replace(regex, "roshya");
// console.log(result5);

//some metacharactere symbols
// let rex = /^this/  //^ means expression will match if string start with
// let rex = /vijhu$/  //$ at the end of the string means "string ends with"
// let rex = /vi.ju/  // matches any one character
// let rex = /vij*u/  // matches one or more characters
// let rex = /code?e/  // ? after this letters are optional
// let rex = /co\*de/ 

//Character Sets = we use []
// let rex = /c[a-z]de/ // can be any character from a-z 
// let rex = /c[dgof]de/ // can be any of thses d or g or o or f
// let rex = /c[^jhsfhj]de/ //cannot be any of j h s f d
// let rex = /g[^bds]e[fghfa]t/ // cannot be any b d s & can be any f g h f a
// let rex = /[a-zA-Z]od[0-9]e/ // we can have as many character sets as we want

//Quantifiers we use {}
// let rex = /Co{1}d5e/ //o can occur exactly 1 times 
// let rex = /har{0,2}y/  // r can occur exactly 0 to 2 (0 or 1 or 2)

// Groupings = we use paranthesis for groupings ()
// let rex = /(har){2}([0-9]r){1}/ 

//Character classes
// let rex = /\war/;  // word chhracter = _ pr alphabet ot numbers
// let rex = /\w+r/;  //w+ means one or more chracter
// let rex = /\Wwar/  //non word character
// let rex = /\W+war/;  // W+ means more than one Non word character
// let rex = /number\d999/  //\d means digit
let rex = /number\d+/
// let rex = /number\d999/
// let rex = /number\d999/
// let rex = /number\d999/

let str ="this is great 999 w454ar Cod5e with harhar2ry  and also viju";
let result6 = rex.exec(str);
console.log("the result from exec is ",result6);

if(rex.test(str)){
    console.log(`the string ${str} matches the expression ${rex.source}`);
}else{
    console.log(`the string ${str} does not matches the expression ${rex.source}`);
    
}