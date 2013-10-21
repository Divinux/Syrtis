var vX: boolean = false;
var vY: boolean = false;
var vZ: boolean = false;


function Update () 
{
if(vX){transform.eulerAngles.x = transform.root.localEulerAngles.x;}
if(vY){transform.eulerAngles.y = transform.root.localEulerAngles.y;}
if(vZ){transform.eulerAngles.z = transform.root.localEulerAngles.z;}
}