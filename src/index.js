import "./styles.css";
import HashMap from "./HashMap";

const hashMap = new HashMap();

hashMap.set("boks", "boks");
hashMap.set("dupa", "dupa");
hashMap.set("koks", "koks");
hashMap.set("dziwki", "dziwki");

hashMap.set("boks", "tajski boks");

console.log(hashMap.array);
console.log(hashMap.get("boks"));
console.log(hashMap.has("iksde"));
