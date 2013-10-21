
//Only vAuto needs to be assigned manually.
public var vAuto : GameObject;
public var vPlayer : GameObject;

var vSeatpos : GameObject;
var vExitpos : GameObject;
var vDoor : GameObject;
var vInside : boolean = false;

//variables for the camera rotation
var vRotationdamping : float = 1.0;
var vPlayerMovedMouse : boolean = false;
var vTimeMarker : int = 0;
var vLerpComplete : boolean = true;


//Player Components

var vCol : Collider;
var swalker : rigidwalker;
var vCam : GameObject;

//Vehicle COmponents
var sCon : CarController;
var sDriv : Drivetrain;
var sSound : SoundController;



//Finds components. Don't need to be assigned manually.
vPlayer = GameObject.FindWithTag("Player");

vCol = vPlayer.GetComponent(CapsuleCollider);
swalker = vPlayer.GetComponent(rigidwalker);
vCam = vPlayer.FindWithTag("MainCamera");


sCon = vAuto.GetComponent(CarController);
sDriv = vAuto.GetComponent(Drivetrain);
sSound = vAuto.GetComponent(SoundController);

function  OnHit()
{
	

	if (vInside == false)
	{
		if(vDoor.GetComponent(DoorCar).vStatus == 0){
			//Disabling Player Movement
			swalker.enabled = false;
			
			vCol.enabled = false;
			vPlayer.GetComponent(Rigidbody).isKinematic = true;
			
			//Parenting Player To Vehicle
			vPlayer.transform.parent = vSeatpos.transform;
			vPlayer.transform.position = vSeatpos.transform.position;
			vPlayer.transform.rotation = vSeatpos.transform.rotation;
			//Enabling Vehicle Movement
			
			sCon.enabled = true;
			sDriv.enabled = true;
			sSound.enabled = true;
			
			//Switching Trigger
			vInside = true;
		}
	}
	else
	{
		if(vDoor.GetComponent(DoorCar).vStatus == 0){
			//Disabling Vehicle Movement
			
			sCon.enabled = false;
			sDriv.enabled = false;
			sSound.enabled = false;
			
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
			
			//for when the camera still rotates while leaving the car
			vCam.GetComponent(MouseLook).carplug = 0;
		}
	}

}

//this functions rotate the camera to look forward
function FixedUpdate () 
{

	if(vInside == false)
	{
		//quick out if the carseat is empty
		return;
		
	}
	else
	{
		//rotate x and z in any case
		vPlayer.transform.localEulerAngles.x = Mathf.LerpAngle(vPlayer.transform.localEulerAngles.x, vSeatpos.transform.localEulerAngles.x, Time.deltaTime * vRotationdamping * 2);
		vPlayer.transform.localEulerAngles.z = Mathf.LerpAngle(vPlayer.transform.localEulerAngles.z, vSeatpos.transform.localEulerAngles.z, Time.deltaTime * vRotationdamping * 2);
		
		vPlayer.transform.position = vSeatpos.transform.position;
		
		//keep the player rotation centered when turning
		if(vLerpComplete == true)
		{
			if(transform.root.rigidbody.angularVelocity.y > 0.1 || transform.root.rigidbody.angularVelocity.y < -0.1)
			{
				vPlayer.transform.localEulerAngles.y = vSeatpos.transform.localEulerAngles.y;
			}
			}
		
		//check if the player used the mouse in the last few seconds
		input();
		//if he didnt, rotate y
		if(vPlayerMovedMouse == false)
		{
			//rotateY();
			rotateback();
		}
		
		
		vCam.GetComponent(MouseLook).carplug = 0;
		if(vPlayerMovedMouse == false)
		{
			rotateY();
			//rotateback();
		}
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


function input()
{
	//if the mouse is moved, resets the countdown
	if(Input.GetAxis("Mouse X")!=0||Input.GetAxis("Mouse Y")!=0)
	{
		vPlayerMovedMouse = true;
		vLerpComplete = false;
		vTimeMarker = 30;
	}
	//if the mouse isnt moved currently, waits for the countdown to complete and sets vPlayerMovedMouse to false
	if(Input.GetAxis("Mouse X")==0&&Input.GetAxis("Mouse Y")==0)
	{
		inputwait();
	}
}


//two functions that make the wait
function inputwait()
{
	if(vTimeMarker>0)
	{
		damnwait();
	}
	
	
}

function damnwait()
{
	yield WaitForSeconds(1);
	//vTimeMarker= 0;
	
	
	vTimeMarker--;
	if(vTimeMarker < 0){
		vTimeMarker = 0;
		vPlayerMovedMouse = false;
	}
}

function rotateback()
{

	vPlayer.transform.localEulerAngles.y = Mathf.LerpAngle(vPlayer.transform.localEulerAngles.y, vSeatpos.transform.localEulerAngles.y, Time.deltaTime * vRotationdamping * 2);
	if(vPlayer.transform.localEulerAngles.y < 0.5 || vPlayer.transform.localEulerAngles.y > 359.5)
	{
		vLerpComplete= true;
	}
	/*Old version im not sure i wont need again. does a "snap" in the last moment. can be deleted.
	if(vPlayer.transform.localEulerAngles.y != vSeatpos.transform.localEulerAngles.y)
	{
		vPlayer.transform.localEulerAngles.y = Mathf.LerpAngle(vPlayer.transform.localEulerAngles.y, vSeatpos.transform.localEulerAngles.y, Time.deltaTime * vRotationdamping);
		if(vPlayer.transform.localEulerAngles.y < 0.5 || vPlayer.transform.localEulerAngles.y > 359.5)
		{
			vPlayer.transform.localEulerAngles.y = vSeatpos.transform.localEulerAngles.y;
		}
	}
	*/
	
}





//this rotates the camera object to return the x value of the camera to center as well.
function rotateY()
{
	if(vCam.transform.localEulerAngles.x < 5 || vCam.transform.localEulerAngles.x > 355)
	{
		vCam.GetComponent(MouseLook).carplug = 0;
		return;
	}
	else
	{
		if(vCam.transform.localEulerAngles.x > 5 && vCam.transform.localEulerAngles.x < 355)
		{
			if(vCam.transform.localEulerAngles.x < 180)
			{
				vCam.GetComponent(MouseLook).carplug = vRotationdamping/2;
			}
			if(vCam.transform.localEulerAngles.x > 180)
			{
				vCam.GetComponent(MouseLook).carplug = -vRotationdamping/2;
			}
			}
	}
}