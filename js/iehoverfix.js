function addhover() {
	var navli,i;
	// loop through all elements in the nav
	navli = document.getElementById('prodcategory').getElementsByTagName('li')
	for(i=0;i<navli.length;i++) {
		// add the hover functions to the li onmouseover and onmouseout
		navli[i].onmouseover=function(){hover(this,'hover');};
		navli[i].onmouseout=function(){hover(this,'');};
}

    var navli2, i2;
    // loop through all elements in the nav
    navli2 = document.getElementById('plistcat').getElementsByTagName('li')
    for (i2 = 0; i2 < navli2.length; i2++) {
        // add the hover functions to the li onmouseover and onmouseout
        navli2[i2].onmouseover = function () { hover(this, 'hover'); };
        navli2[i2].onmouseout = function () { hover(this, ''); };
    }

    var navli3, i3;
    // loop through all elements in the nav
    navli3 = document.getElementById('nav').getElementsByTagName('li')
    for (i3 = 0; i3 < navli3.length; i3++) {
        // add the hover functions to the li onmouseover and onmouseout
        navli3[i3].onmouseover = function () { hover(this, 'hover'); };
        navli3[i3].onmouseout = function () { hover(this, ''); };
    }
}
function hover(o,sClass) {
	if (o) {
		o.className = sClass;
	}
}
addhover();
