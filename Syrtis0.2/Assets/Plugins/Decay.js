var vTime : int;

function Start () 
{
	yield WaitForSeconds(vTime);
	Destroy(gameObject);
}

function Update () {

}