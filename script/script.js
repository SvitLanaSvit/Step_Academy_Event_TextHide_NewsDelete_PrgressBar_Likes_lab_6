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

    html.style['background-color'] = 'lightskyblue';

    css.style['background-color'] = 'transparent'; 

    js.style['background-color'] = 'transparent'; 
}

css.onclick = (e) =>{
    isClick = false;
    textInfoIcon.innerText = `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`

    css.style['background-color'] = 'lightskyblue';

    html.style['background-color'] = 'transparent'; 

    js.style['background-color'] = 'transparent'; 
}

js.onclick = (e) =>{
    textInfoIcon.innerText = `JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.`

    js.style['background-color'] = 'lightskyblue';

    css.style['background-color'] = 'transparent'; 

    html.style['background-color'] = 'transparent'; 
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

`--------------------7-------------------`
enterTr1.onmouseenter = (e) =>{
    enterTr1.style['background-color'] = 'salmon';
}

enterTr1.onmouseout = (e) =>{
    enterTr1.style['background-color'] = 'transparent';
}

enterTr2.onmouseenter = (e) =>{
    enterTr2.style['background-color'] = 'salmon';
}

enterTr2.onmouseout = (e) =>{
    enterTr2.style['background-color'] = 'transparent';
}

enterTr3.onmouseenter = (e) =>{
    enterTr3.style['background-color'] = 'salmon';
}

enterTr3.onmouseout = (e) =>{
    enterTr3.style['background-color'] = 'transparent';
}

enterTr4.onmouseenter = (e) =>{
    enterTr4.style['background-color'] = 'salmon';
}

enterTr4.onmouseout = (e) =>{
    enterTr4.style['background-color'] = 'transparent';
}

enterTr5.onmouseenter = (e) =>{
    enterTr5.style['background-color'] = 'salmon';
}

enterTr5.onmouseout = (e) =>{
    enterTr5.style['background-color'] = 'transparent';
}

enterTr6.onmouseenter = (e) =>{
    enterTr6.style['background-color'] = 'salmon';
}

enterTr6.onmouseout = (e) =>{
    enterTr6.style['background-color'] = 'transparent';
}

enterTr7.onmouseenter = (e) =>{
    enterTr7.style['background-color'] = 'salmon';
}

enterTr7.onmouseout = (e) =>{
    enterTr7.style['background-color'] = 'transparent';
}

enterTr8.onmouseenter = (e) =>{
    enterTr8.style['background-color'] = 'salmon';
}

enterTr8.onmouseout = (e) =>{
    enterTr8.style['background-color'] = 'transparent';
}

enterTr9.onmouseenter = (e) =>{
    enterTr9.style['background-color'] = 'salmon';
}

enterTr9.onmouseout = (e) =>{
    enterTr9.style['background-color'] = 'transparent';
}

enterTr10.onmouseenter = (e) =>{
    enterTr10.style['background-color'] = 'salmon';
}

enterTr10.onmouseout = (e) =>{
    enterTr10.style['background-color'] = 'transparent';
}

enterTr11.onmouseenter = (e) =>{
    enterTr11.style['background-color'] = 'salmon';
}

enterTr11.onmouseout = (e) =>{
    enterTr11.style['background-color'] = 'transparent';
}

enterTr12.onmouseenter = (e) =>{
    enterTr12.style['background-color'] = 'salmon';
}

enterTr12.onmouseout = (e) =>{
    enterTr12.style['background-color'] = 'transparent';
}

`--------------------8-------------------`

noCopyMain.style['user-select'] = 'none';
noCopyMain.oncontextmenu = (e) =>{
    return false;
}

`--------------------9-------------------`
let countLikeClick = 0;
buttonLike.onclick = (e) =>{
    countLikeClick++;
    countLike.innerText = `${countLikeClick}`
}