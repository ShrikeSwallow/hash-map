import "./styles.css";
import HashMap from "./HashMap";

const hashMap = new HashMap();

console.log(hashMap.capacity);

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");
hashMap.set("moon", "silver");
hashMap.set("boks", "tajski boks");
hashMap.set("seks", "dziwki");
hashMap.set("koks", "koks");

console.log(hashMap.array);
console.log(hashMap.get("boks"));
console.log(hashMap.length());
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
console.log(hashMap);
