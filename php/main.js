let id = $("input[name*='med_id']")
id.attr("readonly","readonly");


$(".btnedit").click( e =>{
    let textvalues = displayData(e);

    ;
    let medname = $("input[name*='med_name']");
    let medbrand = $("input[name*='med_brand']");
    let medprice = $("input[name*='med_price']");

    id.val(textvalues[0]);
    medname.val(textvalues[1]);
    medbrand.val(textvalues[2]);
    medprice.val(textvalues[3].replace("$", ""));
});


function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        if(value.dataset.id == e.target.dataset.id){
           textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}