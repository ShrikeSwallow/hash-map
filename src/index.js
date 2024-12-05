import "./styles.css";
import HashMap from "./HashMap";

const hashMap = new HashMap();

hashMap.set("boks", "boks");
hashMap.set("boks", "boks");
hashMap.set("boks", "boks");
console.log(hashMap.array[1].at(0));

hashMap.set("boks", "tajski boks");

console.log(hashMap.array[1].at(0));
