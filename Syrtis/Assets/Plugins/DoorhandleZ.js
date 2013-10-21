var l : int;
var vAngle : int = 300;
var moveTime = 0.0;

function Awake()
{
	l = transform.parent.localEulerAngles.z;
}

function OnHit()
{
	lerping();

}

function lerping()
{
	moveTime = 0.0;

	if(this.transform.parent.GetComponent(DoorCar).vStatus == 1)
	{
	while (transform.parent.localEulerAngles.z != vAngle || transform.parent.localEulerAngles.z == 0)
		{

				moveTime += Time.deltaTime * 1;
				transform.parent.localEulerAngles.z=Mathf.LerpAngle(l,vAngle,moveTime);

				yield;

		}
		/*while (transform.parent.localEulerAngles.z < vAngle || transform.parent.localEulerAngles.z == 0)
		{

				moveTime += Time.deltaTime * 1;
				transform.parent.localEulerAngles.z=Mathf.LerpAngle(l,vAngle,moveTime);

				yield;

		}*/
		this.transform.parent.GetComponent(DoorCar).vStatus = 0;
	}

	else

	{
		while (transform.parent.localEulerAngles.z>l)
		{
			moveTime += Time.deltaTime * 1;
			transform.parent.localEulerAngles.z=Mathf.LerpAngle(vAngle,l,moveTime);

			if(transform.parent.localEulerAngles.z<l+1)
			{
				transform.parent.localEulerAngles.z = l;
			}

			yield;
		}
		this.transform.parent.GetComponent(DoorCar).vStatus = 1;


	}

}