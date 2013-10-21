var vWheel : Transform;
var vSteering : float;
var vMax : float;

function Start ()
{
	
}

function Update ()
{
	vSteering = vWheel.GetComponent(Wheel).steering;
	vMax = vWheel.GetComponent(Wheel).maxSteeringAngle;
	transform.localRotation = Quaternion.Euler (13.13038, 0, -360 * vSteering);
}