x =[ 1,6,4,9,13,14,16];
var k=16;
var b = new Set();

for(var i=0;i<x.length;i++){
    
    var new_ele=x[i];
    a=k - new_ele;
    if(b.has(a))
    {
        console.log(a,new_ele);
        break;
    }else{
        b.add(new_ele)
    }}
    