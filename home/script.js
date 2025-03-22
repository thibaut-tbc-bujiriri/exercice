document.getElementById("mon_bouton").onclick=
function(){
    window.print();
};

// alert(" Bienvenu sur ma page de presentation...")
// console.warn("Attention !!!");

const camerafeed = document.getElementById('camerafeed');
navigator.mediaDevices.getUserMedia({video: true}).
then(stream => {
    camerafeed.srcObject = stream;
})
.catch(err => {console.error("erreur d'acces a la camera :",err)});
