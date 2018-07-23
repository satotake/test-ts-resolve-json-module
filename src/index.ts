import pjson from "../package.json"
const world = pjson.name;


export function hello(word: string = world): string {
  return `Hello ${world}! `;
}
