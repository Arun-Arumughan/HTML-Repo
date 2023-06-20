function validate()
{
    var userName=document.getElementById('username').value;
    var ptn=/[\w]/g;
    if(userName.match(ptn))
    {
    alert("Pattern is correct");
    }
    else
    {
        alert("Pattern is wrong");
    }
}