var number : double = 0;

function Start () {
	
}

function Update () {
	if(Input.GetButton("Fire1"))
	{
		number = Mathf.Lerp(number, 10, Time.deltaTime);
	}
}