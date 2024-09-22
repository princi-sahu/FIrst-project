let main = document.querySelector("#img");
let small = document.querySelectorAll(".class-img");
console.log(main.src);
small[0].onclick =function(){
    main.src =small[0].src;
}
small[1].onclick =function(){
    main.src =small[1].src;
}

small[2].onclick =function(){
    main.src =small[2].src;
}

