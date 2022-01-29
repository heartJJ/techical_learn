const opt = {
    where: { name: 'aaa' }, 
    other: []
};

opt.other.push({
    time: { '>': 100 }
});


console.log(opt);



type P<T> = {
    _like?: Array<keyof T>
}

interface testObj {
    id: string,
    name ?: string
}

let a: P<testObj> = {
    _like: [  'id', 'name' ]
}