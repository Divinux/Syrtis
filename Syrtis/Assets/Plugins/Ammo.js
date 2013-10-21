var vMax : int;
var vCurrent : int;

function Awake ()
{
	vMax = GetComponent(ItemStats).vSize;
	vCurrent = vMax;
	GetComponent(ItemStats).vSize = vMax;
}

function Update () {
	
}