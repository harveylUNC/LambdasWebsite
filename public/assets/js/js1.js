function show(selClass){
    console.log(selClass);
    let classes = document.getElementsByClassName("classes");
    console.log(classes);

    for(let i=0; i<classes.length;i++){
        if(classes[i].id == selClass){
            classes[i].style.display ="table";
        } else {
            classes[i].style.display ="none";
        }
    }
}