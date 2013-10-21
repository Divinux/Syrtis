var aProps : GameObject[];

function Start () {
	
}

function Update () {
	
}

function fPropUpdate()
{
	for (var a in aProps)
	{
		a.GetComponent(Prop).vUpdate();
	}
}