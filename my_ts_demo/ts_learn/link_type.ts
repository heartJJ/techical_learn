interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

// 伪代码
function getSmallPet(): Fish | Bird { 
    return;
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors，联合类型的值只有使用共有的

if ((<Fish>pet).swim) { // 使用类型断言，可不报错
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

// 类型保护，谓词为 parameterName is Type这种形式
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) { // isFish 替代了 类型断言
    pet.swim(); 
}
else { // else 分支 一定为 Bird 类型
    pet.fly();
}

/**
 * 使用 typeof 形式
 * typeof 必须是 "number"， "string"， "boolean"或 "symbol"
 */

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

/**
 * instanceof 类型保护, 
 *  instanceof 必须是 值，不能是 接口
 */

 interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}
