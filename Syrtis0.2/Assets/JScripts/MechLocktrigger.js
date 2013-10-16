//The mech object
var vMech : GameObject;

//the mechs script
var sMech : Mech;
sMech = vMech.GetComponent(Mech);
//The rotation switch of the mech
var vRotSwitch : GameObject;


function OnHit () 
{
	if(vRotSwitch.GetComponentInChildren(Flipswitch).vState == true)
	{
		sMech.vLocked = !sMech.vLocked;
	}
}