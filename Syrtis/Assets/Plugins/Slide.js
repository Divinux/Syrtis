var vMinL : GameObject;
var vMaxL : GameObject;

var vMinR : GameObject;
var vMaxR : GameObject;

var vDoorL : GameObject;
var vDoorR : GameObject;

var vStatus : int = 0;

var moveTimeL = 0.0;
var moveTimeR = 0.0;

var vCurStatL : int = 0;
var vCurStatR : int = 0;



function OnTriggerEnter (other : Collider)
{

	print("gotcha");
	if(vStatus == 0)
	{
		vStatus = 1;
		moveTimeL = 0.0;
		moveTimeR = 0.0;
		//opens both doors
		vCurStatL = 1;
		vCurStatR = 1;
		
		lerpLo();
		lerpRo();
		print("lerps started");
		
	}
	
}
//functions that lerp the doors open
function lerpLo()
{
	while(vDoorL.transform.position.x < vMaxL.transform.position.x)
	{
		moveTimeL += Time.deltaTime * 1;
		vDoorL.transform.position.x = Mathf.Lerp(vMinL.transform.position.x,vMaxL.transform.position.x,moveTimeL);
	yield;
	}
	vCurStatL = 2;
	waitfordoor();
	print("lerps done");
}

function lerpRo()
{
	while(vDoorR.transform.position.x > vMaxR.transform.position.x)
	{
		moveTimeR += Time.deltaTime * 1;
		vDoorR.transform.position.x = Mathf.Lerp(vMinR.transform.position.x,vMaxR.transform.position.x,moveTimeR);
		yield;
	}
	vCurStatR = 2;
	waitfordoor();
}
//function that lerp the doors closed
function lerpLc()
{
	while(vDoorL.transform.position.x > vMinL.transform.position.x)
	{
		moveTimeL += Time.deltaTime * 1;
		vDoorL.transform.position.x = Mathf.Lerp(vMaxL.transform.position.x,vMinL.transform.position.x,moveTimeL);
	yield;
	}
	vCurStatL = 5;
	waitfordoor();
}

function lerpRc()
{
	while(vDoorR.transform.position.x < vMinR.transform.position.x)
	{
		moveTimeR += Time.deltaTime * 1;
		vDoorR.transform.position.x = Mathf.Lerp(vMaxR.transform.position.x,vMinR.transform.position.x,moveTimeR);
		yield;
	}
	vCurStatR = 5;
waitfordoor();
}

function wait()
{
	print("waiting");
	yield WaitForSeconds(3);
	vCurStatL = 4;
	vCurStatR = 4;
	
	moveTimeL = 0.0;
	moveTimeR = 0.0;
	
	autoclose();
}

function autoclose()
{
print("closing");
	lerpLc();
	lerpRc();
	yield;

}

function waitfordoor()
{
	if(vCurStatL == 2 && vCurStatR == 2)
	{
	vCurStatL = 0;
		vCurStatR = 0;
	print("opening complete");
	wait();

	}
	
	if(vCurStatL == 5 && vCurStatR == 5)
	{
		print("closing complete");
		vCurStatL = 0;
		vCurStatR = 0;
		vStatus = 0;

		}
}