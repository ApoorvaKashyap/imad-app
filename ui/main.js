//Counter Code
function clicked()
{
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Take Action
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('nooftimes');
                span.innerHTML = counter.toString();
            }
    };
    
    //Make the request
    request.open('GET','http://apoorvakashyap54.imad.hasura-app.io/counter',true);
    request.send(null);
}

var names=document.getElementById('name').value;
var submit=document.getElementById('sub');
submit.onclick = function(){
    var names=['Name 1','Name 2','Name 3'];
    var list='';
    for(var i=0;i<names.length;i++){
        list='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};