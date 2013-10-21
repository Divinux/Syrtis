var itemname:String;
var itembeschreibung:String;
var itemicon:Texture2D;
var prefabdrop:GameObject;
var prefabpickup:GameObject;
var isUsed:boolean;
var other : GameObject;



function OnHit()
{
	other =  gameObject.FindWithTag ("Player");
	isUsed=true;
	if(other.GetComponent("InventoryBySnake").itemnamen[0]=="")
	{
		AddThings(0,other.gameObject);
		
	}
	else if(other.GetComponent("InventoryBySnake").itemnamen[1]=="")
	{
		AddThings(1,other.gameObject);
	}
	else if(other.GetComponent("InventoryBySnake").itemnamen[2]=="")
	{
		AddThings(2,other.gameObject);
	}
	else if(other.GetComponent("InventoryBySnake").itemnamen[3]=="")
	{
		AddThings(3,other.gameObject);
	}
}

function AddThings(whereto:int,go:GameObject)
{
	
	go.GetComponent("InventoryBySnake").itemnamen[whereto]=itemname;
	go.GetComponent("InventoryBySnake").itembeshreibung[whereto]=itembeschreibung;
	go.GetComponent("InventoryBySnake").itemicons[whereto]=itemicon;
	go.GetComponent("InventoryBySnake").prefabOnDrop[whereto]=prefabdrop;
	go.GetComponent("InventoryBySnake").prefabOnEquip[whereto]=prefabpickup;
	go.GetComponent("ActiveItem").fSwitch();
	
	var newO : GameObject;
	newO = Instantiate(prefabpickup, go.GetComponent("ActiveItem").pos.position, go.GetComponent("ActiveItem").pos.rotation);
	newO.transform.parent = go.GetComponent("ActiveItem").pos;
	newO.SetActive(false);
	
	go.GetComponent("ActiveItem").vActiveObj[whereto] = newO;
	
	Destroy(gameObject);
}


