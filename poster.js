//basically inset is the distance from the edge of the website to the text path

//this is the first inset for the first text aka RESEARCH METHODS FOR GRAPHIC DESIGN

let width = window.innerWidth;
let height = window.innerHeight;

inset = 60;

//this code writes out the SVG path to trace the window, minus the inset
let pathData = ` 
    M ${inset} ${inset}
    L ${width - inset} ${inset}
    L ${width - inset} ${height - inset}
    L ${inset} ${height - inset}
    L ${inset} ${inset}
    L ${width - inset} ${inset}
    L ${width - inset} ${height - inset}
    L ${inset} ${height - inset}
    Z
`;
let textCurve = document.getElementById("border_path");

textCurve.setAttribute("d", pathData)

let l = textCurve.getTotalLength() - 770;

//scroll event
$(document).scroll(function() {
    
    //basically this gives us a ratio between 0 to 1 depending on how far we scroll
    scrollRatio = $(document).scrollTop() / ($(document).height() - $(window).height())
    $("#textPath").attr("startOffset", scrollRatio * l);
            
})

// other inset FALL 2023 LECTURE SERIES
let anotherInset = 110;

let anotherPathData = ` 
    M ${anotherInset} ${anotherInset}
    L ${width - anotherInset} ${anotherInset}
    L ${width - anotherInset} ${height - anotherInset}
    L ${anotherInset} ${height - anotherInset}
    L ${anotherInset} ${anotherInset}
    L ${width - anotherInset} ${anotherInset}
    L ${width - anotherInset} ${height - anotherInset}
    L ${anotherInset} ${height - anotherInset}
    Z
`;

let anotherTextCurve = document.getElementById("another_border_path");

anotherTextCurve.setAttribute("d", anotherPathData);

let anotherLength = anotherTextCurve.getTotalLength();

$(document).scroll(function() {
    
    let scrollRatio = $(document).scrollTop() / ($(document).height() - $(window).height());

    $("#anotherTextPath").attr("startOffset", (1 - scrollRatio) * anotherLength);
});

// another scroll event 
// this is for mobile. text moves horizontally at the top and bottom, can reverse too.
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');


window.onscroll = () =>{
    let pos = window.scrollY - 800;
    line1.style.left = `${pos}px`;
    line2.style.right = `${pos}px`;
}