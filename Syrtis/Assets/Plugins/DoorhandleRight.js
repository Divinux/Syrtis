var l : int;
var vAngle : int = 300;
var moveTime = 0.0;

function Awake()
{
	l = transform.parent.localEulerAngles.y;
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
		while (transform.parent.localEulerAngles.y > vAngle || transform.parent.localEulerAngles.y == 0)
		{
			
				moveTime += Time.deltaTime * 1;
				transform.parent.localEulerAngles.y=Mathf.LerpAngle(l,vAngle,moveTime);
				
				yield;
			
		}
		this.transform.parent.GetComponent(DoorCar).vStatus = 0;
	}
	
	else
	
	{
		while (transform.parent.localEulerAngles.y>l)
		{
			moveTime += Time.deltaTime * 1;
			transform.parent.localEulerAngles.y=Mathf.LerpAngle(vAngle,l,moveTime);
			
			if(transform.parent.localEulerAngles.y<l+1)
			{
				transform.parent.localEulerAngles.y = l;
			}
			
			yield;
		}
		this.transform.parent.GetComponent(DoorCar).vStatus = 1;
		
		
	}
	
}