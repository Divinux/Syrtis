var l : int;
var vAngle : int = 300;
var moveTime = 0.0;

function Awake()
{
	l = transform.parent.localEulerAngles.x;
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
		while (transform.parent.localEulerAngles.x > vAngle || transform.parent.localEulerAngles.x == 0)
		{

				moveTime += Time.deltaTime * 1;
				transform.parent.localEulerAngles.x=Mathf.LerpAngle(l,vAngle,moveTime);

				yield;

		}
		this.transform.parent.GetComponent(DoorCar).vStatus = 0;
	}

	else

	{
		while (transform.parent.localEulerAngles.x>l)
		{
			moveTime += Time.deltaTime * 1;
			transform.parent.localEulerAngles.x=Mathf.LerpAngle(vAngle,l,moveTime);

			if(transform.parent.localEulerAngles.x<l+1)
			{
				transform.parent.localEulerAngles.x = l;
			}

			yield;
		}
		this.transform.parent.GetComponent(DoorCar).vStatus = 1;


	}

}