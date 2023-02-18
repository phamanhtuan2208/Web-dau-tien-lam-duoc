window.onload=function(){
    setTimeout(() => {
        doihinh()
    },3000);
}

var i=1;

function doihinh(){
        i++; 
        document.images['hinh'].src ='img/c' + i + '.png';
        if(i>=4){
                i=1;
                setTimeout(() => {
                    doihinh()
                },3000);
        }else{
            setTimeout(() => {
                doihinh()
            },3000);
        }



}




