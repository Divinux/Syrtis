var vDist : float = 200;
var vHitObj : Transform;

function FixedUpdate ()
{
	if(Input.GetButtonUp("Fire2"))
	{
		Cast();
		
		
	}
}

function Cast()
{
	//yield new WaitForFixedUpdate ();
	var hit : RaycastHit;
	if (Physics.Raycast (this.transform.position, this.transform.forward, hit, vDist))
	{
		
		Debug.DrawLine (this.transform.position, hit.point);
		vHitObj = hit.collider.transform;
		print(vHitObj);
		vHitObj.SendMessage ("OnHit");
		
	}
}