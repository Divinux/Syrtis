public var vMech : GameObject;
var vDoor : GameObject;

public var vPlayer : GameObject;
vPlayer = GameObject.FindWithTag("Player");

var vSeatpos : GameObject;
var vExitpos : GameObject;
var vInside : boolean = false;

//Player Components

var vCol : Collider;
var swalker : rigidwalker;
var vCam : GameObject;

vCol = vPlayer.GetComponent(CapsuleCollider);
swalker = vPlayer.GetComponent(rigidwalker);
vCam = vPlayer.FindWithTag("MainCamera");

//Mech Components
var sMech : Mech;
var sRigid : rigidwalkerw;
var sBody : Rigidbody;

sMech = vMech.GetComponent(Mech);
sRigid = vMech.GetComponent(rigidwalkerw);
sBody = vMech.GetComponent(Rigidbody);



function OnHit() 
{
if(vDoor.GetComponent(DoorCar).vStatus == 0){
	if (vInside == false)
	{
		//Disabling Player Movement
		swalker.enabled = false;
		
		vCol.enabled = false;
		vPlayer.GetComponent(Rigidbody).isKinematic = true;
		
		//Parenting Player To Vehicle
		vPlayer.transform.parent = vSeatpos.transform;
		vPlayer.transform.position = vSeatpos.transform.position;
		vPlayer.transform.rotation = vSeatpos.transform.rotation;
		
		//Enabling Vehicle Movement
		
		sMech.enabled = true;
		//sRigid.enabled = true;
		sBody.useGravity = false;
		
		//Switching Trigger
		vInside = true;
	}
	else
	{
		
		//Disabling Vehicle Movement
		
		sMech.enabled = false;
		sBody.useGravity = true;
		sRigid.enabled = false;
		
		
		//Unparenting Player From Vehicle
		vPlayer.transform.position = vExitpos.transform.position;
		vPlayer.transform.rotation = vExitpos.transform.rotation;
		
		vPlayer.transform.parent = null;
		
		vPlayer.transform.rotation.x = 0;
		vPlayer.transform.rotation.z = 0;
		
		
		//Enabling Player Movement
		vPlayer.GetComponent(Rigidbody).isKinematic = false;
		swalker.enabled = true;
		
		vCol.enabled = true;
		
		
		//Switching Trigger
		vInside = false;
		
	}
}
}

function FixedUpdate () 
{

	if(vInside == false)
	{
		//quick out if the carseat is empty
		return;
		
	}
	else
	{
		vPlayer.transform.position = vSeatpos.transform.position;
	}
}
function LateUpdate () 
{

	if(vInside == false)
	{
		//quick out if the carseat is empty
		return;
		
	}
	else
	{
		vPlayer.transform.position = vSeatpos.transform.position;
	}
}