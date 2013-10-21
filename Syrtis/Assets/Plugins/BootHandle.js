

function OnHit()
{
	if(this.transform.parent.GetComponent(DoorCar).vStatus == 1)
	{
		this.transform.parent.GetComponent(Animation).Play("CarBootOpen");
		this.transform.parent.GetComponent(DoorCar).vStatus = 0;
		print("Door Open");
	}
	
	else
	
	{
		this.transform.parent.GetComponent(Animation).Play("CarBootClose");
		this.transform.parent.GetComponent(DoorCar).vStatus = 1;
		print("Door Closed");
	}
	
}