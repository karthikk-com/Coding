function reverseString(s){
    let mid = Math.floor(s.length/2);
    let n = s.length;
    console.log(n,mid);

    let i=0;

    while(i<mid){
        console.log(s[i],s[n-i-1]);
        let temp = s[i];
        s[i]=s[n-i-1];
        s[n-i-1]=temp;
        i++;
    }
    return s;
}

console.log(reverseString(["h","e","l","l","o"]));
//console.log(reverseString(["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]))