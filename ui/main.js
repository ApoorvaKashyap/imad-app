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

var submit=document.getElementById('sub');
submit.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Take Action
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
            if(request.status === 200)
            {
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
                }
                document.getElementById('namelist').innerHTML=list;
            }
    };
    
    //Make the request
    var nameInput=document.getElementById('name').value;
    request.open('GET','http://apoorvakashyap54.imad.hasura-app.io/submit_names?name='+nameInput,true);
    request.send(null);
    
};