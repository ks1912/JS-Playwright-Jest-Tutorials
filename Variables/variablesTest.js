var a = 10;

const fun1 = () => {
    a = 20;
    var b = 40;
}

fun1()
console.log(a);
console.log(b);