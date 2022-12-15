`--------------------1-------------------`
buttonRandom.onclick = (e) =>{
    randomNumber.innerText = Math.floor(Math.random() * 101);
}

`--------------------2-------------------`

coordinates.onmousemove = (e) =>{
    info_coordinates.innerText = `X = ${e.clientX}, Y = ${e.clientY}`;
};

coordinates.onmouseup = (e) =>{
    switch(e.which){
        case 1:
            mouseClick.innerText = 'Left pressed.'
            break;
        case 2:
            mouseClick.innerText = 'Wheel pressed.'
            break;
        case 3:
            mouseClick.innerText = 'Right pressed.'
            break;
    }   
};

`--------------------3-------------------`
let isHide = false;
showHide.onclick = (e) =>{
    if(isHide){
        text.style['font-size'] = `16px`;
        isHide = false;
    }
    else{
        text.style['font-size'] = `0px`;
        isHide = true;
    }
}

`--------------------4-------------------`
html.onclick = (e) =>{
    textInfoIcon.innerText = 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
}

css.onclick = (e) =>{
    textInfoIcon.innerText = `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`
}

js.onclick = (e) =>{
    textInfoIcon.innerText = `JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.`
}

`--------------------5-------------------`
removeNews1.onclick = (e) =>{
    News1.remove();
}

removeNews2.onclick = (e) =>{
    News2.remove();
}

`--------------------6-------------------`
let count = 0;
buttonProgress.onclick = (e) =>{
    if(count != 198){
        count++;
        progressBar.style['width'] = `${count}px`;
    }
    if(count == 200){
        coutn = 198;
    }
}

`--------------------9-------------------`
let countLikeClick = 0;
buttonLike.onclick = (e) =>{
    countLikeClick++;
    countLike.innerText = `${countLikeClick}`
}