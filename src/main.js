import PIXI from 'pixi.js';

console.log('Hello World!');
test();
function test() {
    const a = [1, 2, 3, 4, 5];
    console.log(a.map((number) => (number * 5).toString()));
}