function myFunction(button) {
  var x = document.getElementById("blogTitleNew");
  var y=document.getElementById("blogBody");
  var btn = document.getElementById("editBtn");
    if (btn.value == "editing") {
            btn.value = 'Save <i style="font-size:20px" class="fa">&#xf0c7;</i>';
            btn.innerHTML = 'Save <i style="font-size:20px" class="fa">&#xf0c7;</i>';
        }
    else{
         btn.value = 'Edit <span class="glyphicon glyphicon-edit"></span>';
            btn.innerHTML = 'Edit <span class="glyphicon glyphicon-edit"></span>';
    }
      if (x.contentEditable == "true" && y.contentEditable == "true") {
        x.contentEditable = "false";
        y.contentEditable = "false";
        } 
        else {
        x.contentEditable = "true";
        y.contentEditable = "true";
      }
}
function comment(){
    document.getElementById("myCommentBox").style.display="block";
    var newItem = document.createElement("h5");
    var textnode = document.createTextNode(userComments.value);
    newItem.appendChild(textnode);
    var list = document.getElementById("addEventNames");
    list.insertBefore(newItem, list.childNodes[0]);
    document.getElementById("userComments").value = "";

}

var clicks = 0;
    function onClick() {
        clicks += 1;
        var btn = document.getElementById("like");

                if (btn.value == "liked") {
                    btn.value = '<span class="glyphicon glyphicon-thumbs-up"></span> Liked!';
                    btn.innerHTML = '<span class="glyphicon glyphicon-thumbs-up"></span> Liked!';
                }
        
        document.getElementById("clicks").innerHTML = clicks + " people have liked this!";
    };