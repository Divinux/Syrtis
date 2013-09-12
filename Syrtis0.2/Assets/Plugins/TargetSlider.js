var vSlider : GameObject;
var vBackpos : GameObject;
var vFrontpos : GameObject;

var vStatus : int = 1;
var vSpeed : int = 1;

function OnHit () 
{
	if(vStatus == 1)
	{
		lerpfront();
	}
	else if(vStatus == 0)
	{
		lerpback();
	}
}

function lerpfront()
{
while(Vector3.Distance(vSlider.transform.position,vFrontpos.transform.position) >= 2){
	vSlider.transform.position = Vector3.Lerp(vSlider.transform.position, vFrontpos.transform.position, Time.deltaTime * vSpeed);
	yield;
	}
	vStatus = 0;
}
function lerpback()
{while(Vector3.Distance(vSlider.transform.position,vBackpos.transform.position) >= 2){
	vSlider.transform.position = Vector3.Lerp(vSlider.transform.position, vBackpos.transform.position, Time.deltaTime * vSpeed);
	yield;
	
}vStatus = 1;}
