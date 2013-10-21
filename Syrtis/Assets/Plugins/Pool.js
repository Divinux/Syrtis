var vPool : GameObject[];
var vPref : GameObject;
var vCurrent : int = 0;



function Spawn(point : RaycastHit)
{
	if(vPool[vCurrent] == null)
	{
		vPool[vCurrent]=Instantiate(vPref);
		vPool[vCurrent].transform.parent = gameObject.transform;
		
	}
	
	vPool[vCurrent].transform.parent = gameObject.transform;
	vPool[vCurrent].transform.localScale = gameObject.transform.localScale;
	
	
	vPool[vCurrent].transform.position = point.point;
	var vnorm = Quaternion(point.normal.z, point.normal.y, -point.normal.x, 1);
	vPool[vCurrent].transform.rotation = vnorm;
	
	vPool[vCurrent].transform.parent = point.transform;

	vCurrent++;
	
	if(vCurrent == vPool.length)
	{
		vCurrent = 0;
	}
}