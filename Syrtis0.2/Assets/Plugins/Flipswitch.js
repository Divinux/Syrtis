var vState : boolean = false;

var vLight : GameObject;
var vSwitch : GameObject;

var vOn : Material;
var vOff : Material;


function OnHit () 
{
	if(vState == false)
	{
	vSwitch.transform.localEulerAngles.x = 340;
	vLight.renderer.material = vOn;
	audio.Play();
	vState = true;
	}
	else if(vState == true)
	{
	vSwitch.transform.localEulerAngles.x = 20;
	vLight.renderer.material = vOff;
	audio.Play();
	vState = false;
	}
}