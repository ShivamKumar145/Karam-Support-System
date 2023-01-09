#!C:\Python27\python.exe
print "Content-Type:text/html\n\n"
#print "Ok"
print """
<html>
<head>
<script>
var img=["Protection.jpg","Coverall.jpg","Building.jpg"];
var i=0;
function slide()
{
//alert "Hello"
var div=document.getElementById("slider");
div.style.backgroundImage = "url('images/"+img[i]+"');
i++;
if (img.length==i)
{
i=0;
}
window.setTimeout("slide()",4000);
}
</script>
</head>
<body>
</body>
</html>

"""