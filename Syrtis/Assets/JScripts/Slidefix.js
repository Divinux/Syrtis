//Any two wheels from the car.
var vWheelR : GameObject;
var vWheelL : GameObject;
//The wheel's wheel component. Doesn't need to be assigned.
var vS : Wheel;
var vS2 : Wheel;
//Transform of the car. Doesn't need to be addigned.
var trs : Transform;
//Rigidbody of the car. Doesn't need to be addigned.
var body : Rigidbody;


function Start () 
{
//Find the car transform and it's rigidbody
	trs = transform;
	while (trs != null && trs.rigidbody == null)
	{
		trs = trs.parent;
	}
	
	if (trs != null)
	{
		body = trs.rigidbody;
	}
	
	//find the wheel components of the wheels
	vS = vWheelL.GetComponent(Wheel);
	vS2 = vWheelR.GetComponent(Wheel);

}

function FixedUpdate () 
{
	//Apply braking to wheels and drag to rigidbody when there is no input
	if(vS.driveTorque == 0)
	{
		if(vS.angularVelocity < 1)
		{
			vS.brake = 1;
		}
		if(vS2.angularVelocity < 1)
		{
			vS2.brake = 1;
		}
		if(vS.angularVelocity < 1)
		{
			body.drag = Mathf.Lerp(body.drag, 50, Time.deltaTime / 2);
		}
	}
	//Set drag to zero as soon as player starts accelerating or the wheel velocity gets changed by outside factors
	if(vS.angularVelocity > 0.5 || vS.angularVelocity < -0.5 || vS.driveTorque != 0)
	{
		body.drag = 0;
	}
}