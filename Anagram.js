function isAnagram(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    var obj={};
    for (var i=0;i<str1.length;i++){
       if (obj.hasOwnProperty(str1[i])){
            obj[str1[i]]++;
        }else{
            obj[str1[i]]=1;
        }
        }

console.log(JSON.stringify(obj));
var obj2={};
    for (var j=0;j<str2.length;j++){
       if (obj2.hasOwnProperty(str2[j])){
            obj2[str2[j]]++;
        }else{
            obj2[str2[j]]=1;
        }
        }
        console.log(JSON.stringify(obj2));

        for(var key in obj){
            if(obj2.hasOwnProperty(key) && obj2[key]==obj[key]){
               
            }else{
                return false;
            }
        }
        return true;


    }

    console.log(isAnagram('abcd','bca'));
