function ok(){
    var n1 = Number(document.getElementById("pri").value)
    var n2 = Number(document.getElementById("seg").value)
    var n3 = Number(document.getElementById("ter").value)

       if( n1 > n2 && n1 > n3 ){
        document.querySelector('p').innerHTML = `O numero maior é ${n1}`;
       }if ( n2 > n1 && n2 > n3){
        document.querySelector('p').innerHTML = `O numero maior é ${n2}`;
       } else{
        document.querySelector('p').innerHTML = `O numero maior é ${n3}`;
       }
      
}