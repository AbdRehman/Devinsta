function Test() {
    var a = 5;
    {
        var a = 10;
        console.log(a);
    }
    console.log(a);
}
Test();