var vSpeed : int;
var vPower : int;

function Awake ()
{
	
}


function Update ()
{
	transform.Translate(Vector3.forward * Time.deltaTime * vSpeed);
}