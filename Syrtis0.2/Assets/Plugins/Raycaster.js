var vDist : float = 200;
var vHitObj : Transform;

function Update ()
{
	if(Input.GetButtonUp("Fire2"))
	{
		Cast();
		print(this);
		
	}
}

function Cast()
{
	yield new WaitForFixedUpdate ();
	var ray : Ray = camera.ViewportPointToRay (Vector3(0.5,0.5,0));
	var hit : RaycastHit;
	if (Physics.Raycast (ray, hit, vDist))
	{
		
		Debug.DrawLine (this.transform.position, hit.point);
		vHitObj = hit.collider.transform;
		print(vHitObj);
		vHitObj.SendMessage ("OnHit");
		
	}
}