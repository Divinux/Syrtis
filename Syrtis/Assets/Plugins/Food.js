var vStrength : int;
var vAmount : int;

var vPlayer : GameObject;
var vInv : Component;

var vInd : int;


function Start () 
{
	//find player and inv script
	vPlayer = gameObject.FindWithTag("Player");
	vInv = vPlayer.GetComponent(InventoryBySnake);
	
	//pass stats from stat script
	vStrength = GetComponent(ItemStats).vPower;
	vAmount = GetComponent(ItemStats).vSize;
}

function Update () 
{
	//check for m1 outside of menu
	if(Input.GetMouseButtonDown(0) && vPlayer.GetComponent(InventoryBySnake).isinoptions == -1)
	{
		
		fRefill();
		fFindInd();
		if(vAmount <= 0)
		{
			fDelete();
		}
	}
}

//refills hunger stat and adds exp
function fRefill()
{
	//add hunger amount
	vPlayer.GetComponent(Spieler).hunger += vStrength + vPlayer.GetComponent(StatSkill).vStats[1].vLvl;
	
	//check if its not higher than 100 + lvl
	if (vPlayer.GetComponent(Spieler).hunger > 100 + vPlayer.GetComponent(StatSkill).vStats[1].vLvl - 1)
	{
		//if so, bring it back
		vPlayer.GetComponent(Spieler).hunger = 100 + vPlayer.GetComponent(StatSkill).vStats[1].vLvl - 1;
	}
	
	vPlayer.GetComponent(StatSkill).GainExp(1,1);
	vAmount--;
}
//finds index in inventory
function fFindInd()
{
	var m = vInv.itemnamen.length;
	
	for(var n = 0; n < m+1; n++)
	{
		if(n < m)
		{
			if(vInv.vCarried[n] == this.gameObject)
			{
				//print(n);
				vInd = n;
			}
		}
	}
	
}

function fDelete()
{
	//delete add item from inventory
	vInv.itemnamen[vInd]="";
	vInv.itembeshreibung[vInd]="No item selected";
	vInv.itemicons[vInd]=vInv.leer;
	vInv.prefabOnEquip[vInd]=vInv.emptyPrefab;
	
	
	vInv.vCarried[vInd] = vInv.emptyPrefab;
	vPlayer.GetComponent("ActiveItem").vActiveObj[vInd] = vPlayer.GetComponent("ActiveItem").emptyPrefab;
	Destroy (this.gameObject);
}