
function opentab(tabname) {
    // console.log(tabname);
    // let item = document.getElementById(tabname);
    // item.classList.add("active-tab");
    let tabLinks = document.getElementById("info");
    // console.log(tabLinks);

    const childrenArray = Array.from(tabLinks.children);
    childrenArray.forEach(child => {
        if(child.id == tabname){
            child.classList.add("active-tab");
        }else{
            child.classList.remove("active-tab");

        }
    });
    // for (tablink of tablinks){
    //     tablink.classList.remove("active-link");
    // }
    // for (tabcontent of tabcontents){
    //     tabcontent.classList.remove("active-tab");
    // }
    // event.currentTarget.classList.add("active-link");
    // document.getElementById(tabname).classList.add("active-tab");
}
