var vStatus : int = 0;
var vW1 : GameObject;
var vW2 : GameObject;

function Start ()
{
	
}

function  OnHit()
{
	if(vStatus == 0)
	{
		vStatus++;
		print("0->1");
		
		vW1.GetComponent(Animation).Play("WipersSlow");
		vW2.GetComponent(Animation).Play("WipersSlow");
	}
	else if(vStatus == 1)
	{
		vStatus++;
		print("1->2");
		
		vW1.GetComponent(Animation).Play("WipersFast");
		vW2.GetComponent(Animation).Play("WipersFast");
	}
	else if(vStatus == 2)
	{
		vStatus = 0;
		print("3->0");
		vW1.GetComponent(Animation).Play("idle");
		vW2.GetComponent(Animation).Play("idle");
	}
}
