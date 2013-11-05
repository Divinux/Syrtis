var itemname:String;
var itembeschreibung:String;
var itemicon:Texture2D;
var prefabdrop:GameObject;
var prefabpickup:GameObject;
var isUsed:boolean;
var other : GameObject;



function OnHit()
{
//find player
	other =  gameObject.FindWithTag ("Player");
	isUsed=true;
	//look for an empty inventory slot
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
	//add all data to inventory script
	go.GetComponent("InventoryBySnake").itemnamen[whereto]=itemname;
	go.GetComponent("InventoryBySnake").itembeshreibung[whereto]=itembeschreibung;
	go.GetComponent("InventoryBySnake").itemicons[whereto]=itemicon;
	go.GetComponent("InventoryBySnake").prefabOnDrop[whereto]=prefabdrop;
	go.GetComponent("InventoryBySnake").prefabOnEquip[whereto]=prefabpickup;
	
	//add stats to inv script
	go.GetComponent("InventoryBySnake").vHealth[whereto]=GetComponent(ItemStats).vHealth;
	go.GetComponent("InventoryBySnake").vSize[whereto]=GetComponent(ItemStats).vSize;
	go.GetComponent("InventoryBySnake").vSpeed[whereto]=GetComponent(ItemStats).vSpeed;
	go.GetComponent("InventoryBySnake").vPower[whereto]=GetComponent(ItemStats).vPower;
	
	
	//instantiate carried object
	var newO : GameObject;
	newO = Instantiate(prefabpickup, go.GetComponent("ActiveItem").pos.position, go.GetComponent("ActiveItem").pos.rotation);
	newO.transform.parent = go.GetComponent("ActiveItem").pos;
	
	//add stats from inventory to carried object
	newO.GetComponent(ItemStats).vHealth = go.GetComponent("InventoryBySnake").vHealth[whereto];
	newO.GetComponent(ItemStats).vSize = go.GetComponent("InventoryBySnake").vSize[whereto];
	newO.GetComponent(ItemStats).vSpeed = go.GetComponent("InventoryBySnake").vSpeed[whereto];
	newO.GetComponent(ItemStats).vPower = go.GetComponent("InventoryBySnake").vPower[whereto];
	go.GetComponent("InventoryBySnake").vCarried[whereto] = newO;
	
	newO.SetActive(false);
	
	go.GetComponent("ActiveItem").vActiveObj[whereto] = newO;
	go.GetComponent("ActiveItem").fSwitch();
	
	Destroy(gameObject);
}


