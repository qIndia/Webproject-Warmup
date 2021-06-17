//$(document).ready(function () {}

var id = null;
var i=0;

k = 1.0;                   // spring constant
m = 1.0;                   // mass in kg
xt0 = 1.0;                 // initial position
t0 = 0.0;                  // initial time
vt0 = 0.0;                 // initial velocity
dt = 0.001;		   // time interval
Tmax=50
xtold = xt0;               // set & print out the initial conditions
vtold = vt0;
t = t0;

xt_array=[]
vt_array=[]

for(t=t0; t<Tmax; t+= dt){
	vt = vtold + dt*(-k/m)*xtold;
	xt = xtold + dt*vtold;
	xtold = xt;
	vtold = vt;
    xt_array.push(xtold)
    vt_array.push(vtold)
  
//	fprintf(fout,"%e\t%e\t%e\n", t,xt,vt);
   }
   
//console.log(xt_array)   
   

function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 50001) {
      //clearInterval(id);
     // i++;
    } else {
      pos++; 
      elem.style.top = 190+150*xt_array[pos*100] + 'px'; 
      elem.style.left = 190+150*xt_array[pos*100] + 'px'; 
      i++;
      console.log("pos=%d , i=%d ",pos,i)

      if (pos*100>(xt_array.length-1)){
        console.log(pos)
        pos=0;
      }
    }
  }
}
