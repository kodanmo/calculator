function clickr(val)
{
    document.getElementById("inn").value =  document.getElementById("inn").value+val;
}

function clearr()
{
    document.getElementById("inn").value = " ";
}

function eqq()
{
    var text = document.getElementById("inn").value;
    var res = eval(text);
    document.getElementById("inn").value = res;


}