var inShop : boolean = false;



function OnTriggerStay(other:Collider)
{
	if(other.gameObject.tag=="Player"&&Input.GetKeyDown("e"))
	{
		inShop = !inShop;
	}
}

function OnGUI()
{
	if(inShop == true)
	{
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
	}
}