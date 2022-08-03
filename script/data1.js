/*
*   Desgined By Mayank
*   Website 13 "Cyber World"
*   script script/data1
*/ 
try
{
    let fld1 = document.getElementById("fld1");

    document.getElementById("btn1").onclick = function()
    {
        alert(fld1.value);
        fld1.value = '';
    }
    // function to display cyber data

    function display_cyber_data()
    {
        for(var i=0; i<cyber_data.length; i++)
        {
            document.write("<dl>");
            document.write("<dt>"+cyber_data[i][0]+"</dt><dd>"+cyber_data[i][1]+"</dd>")
            document.write("</dl>");

            document.getElementsByTagName("dl")[i].onclick = function()
            {
                this.style.background="#010203";
                this.style.color="#fff";
            }
        }
        document.write("<footer> ----------{ &copy; DARKSIDE All Right Reserved | Desgined By Mayank }---------- </footer>");
    }
    display_cyber_data();
}
catch(error)
{
    alert("ERROR : "+error.message);
}