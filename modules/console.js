console.log('Something');
console.info('Something'); //same thing as log
console.error('Something');
console.warn('Something');

var table = [
    {
        a: 1,
        b: 2
    },
    {
        a: 2,
        b:'other'
    }
]
console.table(table);

// ┌─────────┬───┬─────────┐
// │ (index) │ a │    b    │
// ├─────────┼───┼─────────┤
// │    0    │ 1 │    2    │
// │    1    │ 2 │ 'other' │
// └─────────┴───┴─────────┘

 
function func1(){
    console.group('function 1');
    console.log('this is from function 1');
    console.log('this too');
    func2()
    console.log('i`ve returned to function 1');
    console.groupEnd('function 1');

}

function func2(){
    console.group('function 2');
    console.log('now were in function 2')
    console.groupEnd('function 2');
}

func1();

console.count('times');
console.count('times');
console.count('times');
console.countReset('times');
console.count('times');
