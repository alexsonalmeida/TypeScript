//'this' cannot be default used in functions, because it has a type any, so is necessary typer it
//but you can only call the fuction with this typed by the methods functionName.call() or functionName.aplly()

function functionTest(this: Date) {
    console.log(this)
}

functionTest.call(new Date)
functionTest.apply(new Date)