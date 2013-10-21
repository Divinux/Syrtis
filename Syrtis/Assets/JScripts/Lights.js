var vStatus : int = 0;
var vAbb : GameObject;
var vFern : GameObject;


function Start ()
{
	
}

function  OnHit()
{
	if(vStatus == 0)
	{
		vStatus++;
		print("0->1");
		
		vAbb.SetActive (true);
		vFern.SetActive (false);
	}
	else if(vStatus == 1)
	{
		vStatus++;
		print("1->2");
		
		vAbb.SetActive (false);
		vFern.SetActive (true);
	}
	else if(vStatus == 2)
	{
		vStatus = 0;
		print("3->0");
		vAbb.SetActive (false);
		vFern.SetActive (false);
	}
}
