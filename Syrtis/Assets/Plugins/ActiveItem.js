var traeger : Transform;
var pos : Transform;

var vActivePref : GameObject[];
var vActiveObj : GameObject[];
var emptyPrefab : GameObject;

var vActive : int = 0;
var vCurrent : int = 0;


function Update ()
{
	if(GetComponent(InventoryBySnake).isinoptions==-1 && GetComponent(InventoryBySnake).vMenuState == 0)
{
fListen();
}
	
}

function fSwitch()
{

	vActiveObj[vCurrent].SetActive(false);
	vActiveObj[vActive].SetActive(true);
	
	GetComponent(InventoryBySnake).UnPauseGame();
	
	
	
	/*Destroy(vActiveObj[vActive]);
	vActiveObj = emptyPrefab;
	vActivePref = traeger.GetComponent(InventoryBySnake).prefabOnEquip[vActive];
	print(vActive);
	
	vActiveObj = Instantiate(vActivePref,pos.position, pos.rotation);
	vActiveObj.transform.parent = pos;
	vActiveObj.transform.position = pos.transform.position;
	vActiveObj.transform.rotation = pos.transform.rotation;*/
}

function fListen()
{

	if (Input.GetKeyUp("1"))
	{
		vCurrent = vActive;
		vActive = 0;
		fSwitch();
	}
	
	if (Input.GetKeyUp("2"))
	{
		vCurrent = vActive;
		vActive = 1;
		fSwitch();
	}
	
	if (Input.GetKeyUp("3"))
	{
		vCurrent = vActive;
		vActive = 2;
		fSwitch();
	}
	
	if (Input.GetKeyUp("4"))
	{
		vCurrent = vActive;
		vActive = 3;
		fSwitch();
	}
	
	if (Input.GetAxis("Mouse ScrollWheel") < 0) // back
	{
		vCurrent = vActive;
		vActive--;
		if(vActive < 0)
		{
			vActive = 3;
		}
		fSwitch();
	}
	
	if (Input.GetAxis("Mouse ScrollWheel") > 0) // up
	{
		vCurrent = vActive;
		vActive++;
		if(vActive > 3)
		{
			vActive = 0;
		}
		fSwitch();
	}

}
