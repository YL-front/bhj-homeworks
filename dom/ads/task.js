let caseArray = Array.from(document.querySelectorAll('.rotator__case'));

let rotate = function() {
    let activeCaseIndex = caseArray.findIndex((e) => {
        return e.classList.contains('rotator__case_active')
    });

    caseArray[activeCaseIndex].classList.remove('rotator__case_active');

    if (activeCaseIndex < (caseArray.length - 1)) {
        caseArray[activeCaseIndex + 1].classList.add('rotator__case_active');
    } else {
        caseArray[0].classList.add('rotator__case_active'); 
    } 
}

let timer = setInterval(rotate, 1000);