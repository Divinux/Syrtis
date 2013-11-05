//player object
var vPlayer : GameObject;
vPlayer = gameObject.FindWithTag("Player");

//inventory
var vInv : Component;
vInv = vPlayer.GetComponent(InventoryBySnake);

//main camera
var vCam : GameObject;
vCam = gameObject.FindWithTag("MainCamera");

//menu status
var vOpen : int = 0;

//number of baseobject
var vBase : GameObject;
var vBaseNum : int = -1;

//number of addon object
var vAdd : GameObject;
var vAddNum : int = -1;

//random number
var vRnd : int = 0;

//stat calculation variables
var vCHealth : int;
var vCSize : int;
var vCSpeed : int;
var vCPower : int;



function Update () 
{
	//if the mouse gets pressed and player is not in options
	if(Input.GetMouseButtonDown(0) && vInv.isinoptions == -1)
	{
		//if menu is closed
		if(vOpen==0)
		
		PauseGame();
		
	}
	//if esc gets pressed in menu, exit menu
	if(Input.GetKeyDown("escape") && vOpen == 1)
	{
		UnPauseGame();
	}
	

}
function PauseGame()
{
	
	vOpen=1;
	vInv.vMenuState = vOpen;
	
	vPlayer.GetComponent("MouseLook").enabled=false;
	vCam.GetComponent("MouseLook").enabled=false;
	
	Screen.showCursor=true;
	Screen.lockCursor=false;
}

function UnPauseGame()
{
	vOpen=0;
	vInv.vMenuState = vOpen;
	
	vPlayer.GetComponent("MouseLook").enabled=true;
	vCam.GetComponent("MouseLook").enabled=true;
	
	Screen.showCursor=false;
	Screen.lockCursor=true;
}

function OnGUI()
{
	if(vOpen==1)
	{
		//draw the background
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		
		//draw inventory boxes
		GUI.Box(Rect(Screen.width/2-400,10,200,315),vInv.itemnamen[0]);
		GUI.Box(Rect(Screen.width/2-200,10,200,315),vInv.itemnamen[1]);
		GUI.Box(Rect(Screen.width/2,10,200,315),vInv.itemnamen[2]);
		GUI.Box(Rect(Screen.width/2+200,10,200,315),vInv.itemnamen[3]);
		
		//draw item icons
		GUI.DrawTexture(Rect(Screen.width/2-390,30,180,140),vInv.itemicons[0]);
		GUI.DrawTexture(Rect(Screen.width/2-190,30,180,140),vInv.itemicons[1]);
		GUI.DrawTexture(Rect(Screen.width/2+10,30,180,140),vInv.itemicons[2]);
		GUI.DrawTexture(Rect(Screen.width/2+210,30,180,140),vInv.itemicons[3]);
		
		//draw craft item boxes
		GUI.Box(Rect(Screen.width/2-200,330,200,170),"Base");
		GUI.Box(Rect(Screen.width/2,330,200,170),"Modifier");
		
		//draw craft item icons
		if(vBaseNum != -1)
		{
			GUI.DrawTexture(Rect(Screen.width/2-190,350,180,140),vInv.itemicons[vBaseNum]);
		}
		if(vAddNum != -1)
		{
			GUI.DrawTexture(Rect(Screen.width/2+10,350,180,140),vInv.itemicons[vAddNum]);
		}
		
		//draw item stats
		if(vInv.itemnamen[0]!="")
		{
			GUI.Label(Rect(Screen.width/2-390,175,200,30), "Health: " + vInv.vCarried[0].GetComponent(ItemStats).vHealth);
			GUI.Label(Rect(Screen.width/2-390,195,200,30), "Size: " + vInv.vCarried[0].GetComponent(ItemStats).vSize);
			GUI.Label(Rect(Screen.width/2-390,215,200,30), "Speed: " + vInv.vCarried[0].GetComponent(ItemStats).vSpeed);
			GUI.Label(Rect(Screen.width/2-390,235,200,30), "Power: " + vInv.vCarried[0].GetComponent(ItemStats).vPower);
			
			if(GUI.Button(Rect(Screen.width/2-390,260,180,25),"Use as base"))
			{
				vBase = vInv.vCarried[0];
				vBaseNum = 0;
			}
			if(GUI.Button(Rect(Screen.width/2-390,290,180,25),"Use as modifier"))
			{
				vAdd = vInv.vCarried[0];
				vAddNum = 0;
			}
		}
		if(vInv.itemnamen[1]!="")
		{
			GUI.Label(Rect(Screen.width/2-190,175,200,30), "Health: " + vInv.vCarried[1].GetComponent(ItemStats).vHealth);
			GUI.Label(Rect(Screen.width/2-190,195,200,30), "Size: " + vInv.vCarried[1].GetComponent(ItemStats).vSize);
			GUI.Label(Rect(Screen.width/2-190,215,200,30), "Speed: " + vInv.vCarried[1].GetComponent(ItemStats).vSpeed);
			GUI.Label(Rect(Screen.width/2-190,235,200,30), "Power: " + vInv.vCarried[1].GetComponent(ItemStats).vPower);
			
			if(GUI.Button(Rect(Screen.width/2-190,260,180,25),"Use as base"))
			{
				vBase = vInv.vCarried[1];
				vBaseNum = 1;
			}
			if(GUI.Button(Rect(Screen.width/2-190,290,180,25),"Use as modifier"))
			{
				vAdd = vInv.vCarried[1];
				vAddNum = 1;
			}
			
		}
		if(vInv.itemnamen[2]!="")
		{
			GUI.Label(Rect(Screen.width/2+10,175,200,30), "Health: " + vInv.vCarried[2].GetComponent(ItemStats).vHealth);
			GUI.Label(Rect(Screen.width/2+10,195,200,30), "Size: " + vInv.vCarried[2].GetComponent(ItemStats).vSize);
			GUI.Label(Rect(Screen.width/2+10,215,200,30), "Speed: " + vInv.vCarried[2].GetComponent(ItemStats).vSpeed);
			GUI.Label(Rect(Screen.width/2+10,235,200,30), "Power: " + vInv.vCarried[2].GetComponent(ItemStats).vPower);
			
			if(GUI.Button(Rect(Screen.width/2+10,260,180,25),"Use as base"))
			{
				vBase = vInv.vCarried[2];
				vBaseNum = 2;
			}
			if(GUI.Button(Rect(Screen.width/2+10,290,180,25),"Use as modifier"))
			{
				vAdd = vInv.vCarried[2];
				vAddNum = 2;
			}
			
		}
		if(vInv.itemnamen[3]!="")
		{
			GUI.Label(Rect(Screen.width/2+210,175,200,30), "Health: " + vInv.vCarried[3].GetComponent(ItemStats).vHealth);
			GUI.Label(Rect(Screen.width/2+210,195,200,30), "Size: " + vInv.vCarried[3].GetComponent(ItemStats).vSize);
			GUI.Label(Rect(Screen.width/2+210,215,200,30), "Speed: " + vInv.vCarried[3].GetComponent(ItemStats).vSpeed);
			GUI.Label(Rect(Screen.width/2+210,235,200,30), "Power: " + vInv.vCarried[3].GetComponent(ItemStats).vPower);
			
			if(GUI.Button(Rect(Screen.width/2+210,260,180,25),"Use as base"))
			{
				vBase = vInv.vCarried[3];
				vBaseNum = 3;
			}
			if(GUI.Button(Rect(Screen.width/2+210,290,180,25),"Use as modifier"))
			{
				vAdd = vInv.vCarried[3];
				vAddNum = 3;
			}
		}
		if(GUI.Button(Rect(10,Screen.height-40,60,20),"Back"))
		{
			UnPauseGame();
		}
		
		if(vBaseNum != -1 && vAddNum != -1)
		{
			if(vBaseNum != vAddNum)
			{
				if(vBase != this.gameObject && vAdd != this.gameObject)
				{
					if(GUI.Button(Rect(Screen.width/2-100,510,200,25),"Craft"))
					{
						fCraft();
					}
				}
			}
		}
	}
}

function fCraft()
{
	//calculate new base item's stats. Add player skill here!!!!!!!!!!!!!ACHTUNG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	fRnd();
	vCHealth = vInv.vCarried[vBaseNum].GetComponent(ItemStats).vHealth + vInv.vCarried[vAddNum].GetComponent(ItemStats).vHealth;
	vCHealth = vCHealth / 2;
	vCHealth = vCHealth + vRnd;
	
	if(vCHealth <= 1)
	{
	vCHealth = 1;
	}
	
	fRnd();
	vCSize = vInv.vCarried[vBaseNum].GetComponent(ItemStats).vSize + vInv.vCarried[vAddNum].GetComponent(ItemStats).vSize;
	vCSize = vCSize / 2;
	vCSize = vCSize + vRnd;
	
	if(vCSize <= 1)
	{
	vCSize = 1;
	}
	
	fRnd();
	vCSpeed = vInv.vCarried[vBaseNum].GetComponent(ItemStats).vSpeed + vInv.vCarried[vAddNum].GetComponent(ItemStats).vSpeed;
	vCSpeed = vCSpeed / 2;
	vCSpeed = vCSpeed + vRnd;
	
	if(vCSpeed <= 1)
	{
	vCSpeed = 1;
	}
	
	fRnd();
	vCPower = vInv.vCarried[vBaseNum].GetComponent(ItemStats).vPower + vInv.vCarried[vAddNum].GetComponent(ItemStats).vPower;
	vCPower = vCPower / 2;
	vCPower = vCPower + vRnd;
	
	if(vCPower <= 1)
	{
	vCPower = 1;
	}
	
	//set base item stats
	vInv.vCarried[vBaseNum].GetComponent(ItemStats).vHealth = vCHealth;
	vInv.vCarried[vBaseNum].GetComponent(ItemStats).vSize = vCSize;
	vInv.vCarried[vBaseNum].GetComponent(ItemStats).vSpeed = vCSpeed;
	vInv.vCarried[vBaseNum].GetComponent(ItemStats).vPower = vCPower;
	
	vInv.vHealth[vBaseNum] = vCHealth;
	vInv.vSize[vBaseNum] = vCSize;
	vInv.vSpeed[vBaseNum] = vCSpeed;
	vInv.vPower[vBaseNum] = vCPower;
	
	//delete add item from inventory
	vInv.itemnamen[vAddNum]="";
	vInv.itembeshreibung[vAddNum]="No item selected";
	vInv.itemicons[vAddNum]=vInv.leer;
	vInv.prefabOnEquip[vAddNum]=vInv.emptyPrefab;
	
	//delete carried add item
	Destroy (vInv.vCarried[vAddNum]);
	vInv.vCarried[vAddNum] = vInv.emptyPrefab;
	vPlayer.GetComponent("ActiveItem").vActiveObj[vAddNum] = vPlayer.GetComponent("ActiveItem").emptyPrefab;
	//reset gui
	vBaseNum = -1;
	vAddNum = -1;
	
	vPlayer.GetComponent(StatSkill).GainExp(6,1);
}

function fRnd()
{
	vRnd = Random.Range(1, 10);
	vRnd = vRnd - 5;
}