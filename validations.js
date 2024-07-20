document.getElementById("form1").addEventListener("submit", onSubmitClick);
function onSubmitClick(event)
{
  var firstname = document.getElementById("txt1").value;
  var lastname = document.getElementById("txt2").value;
  var email = document.getElementById("txt3").value;
  var amount = document.getElementById("txt4").value;
  
  /*console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(amount);*/

  //firstname
  if (firstname == "")
  {
    document.getElementById("span1").style.display = "inline";
    document.getElementById("txt1").setAttribute("class", "class1");
  }
  else
  {
    document.getElementById("span1").style.display = "none";
    document.getElementById("txt1").setAttribute("class", "class2");
  }

  //lastname
  if (lastname == "")
  {
    document.getElementById("span2").style.display = "inline";
    document.getElementById("txt2").setAttribute("class", "class1");
  }
  else
  {
    document.getElementById("span2").style.display = "none";
    document.getElementById("txt2").setAttribute("class", "class2");
  }

  //email
  if (email == "")
  {
    document.getElementById("span3").style.display = "inline";
    document.getElementById("txt3").setAttribute("class", "class1");
  }
  else
  {
    document.getElementById("span3").style.display = "none";
    document.getElementById("txt3").setAttribute("class", "class2");
  }

  //amount
  if (amount == "")
  {
    document.getElementById("span4").style.display = "inline";
    document.getElementById("txt4").setAttribute("class", "class1");
  }
  else
  {
    document.getElementById("span4").style.display = "none";
    document.getElementById("txt4").setAttribute("class", "class2");
  }

  if (/^[a-zA-Z ]*$/.test(firstname) == true)
  {
    document.getElementById("span5").style.display = "none";
    document.getElementById("txt1").setAttribute("class", "class2");
  }
  else
  {
    document.getElementById("span5").style.display = "inline";
    document.getElementById("txt1").setAttribute("class", "class1");
  }

  if (/^[a-zA-Z ]*$/.test(lastname) == true)
  {
    document.getElementById("span6").style.display = "none";
    document.getElementById("txt2").setAttribute("class", "class2");
  }
  else
  {
    document.getElementById("span6").style.display = "inline";
    document.getElementById("txt1").setAttribute("class", "class1");
  }

  if (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email) == true)
  {
    document.getElementById("span7").style.display = "none";
    document.getElementById("txt3").setAttribute("class", "class2");
  }
  else
  {
    document.getElementById("span7").style.display = "inline";
    document.getElementById("txt3").setAttribute("class", "class1");
  }

  if (amount >= 1000 && amount <= 10000)
  {
    document.getElementById("span8").style.display = "none";
    document.getElementById("txt4").setAttribute("class", "class2");
  }
  else
  {
    document.getElementById("span8").style.display = "inline";
    document.getElementById("txt4").setAttribute("class", "class1");
  }
  event.preventDefault();
}
