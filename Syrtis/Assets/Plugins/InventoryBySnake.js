//description arrays for inventory
var itemnamen:String[];
var itembeshreibung:String[];
var itemicons:Texture2D[];
var vBadge : int = 0;
var vBadges:Texture2D[];

//stat arrays for inventory
var vHealth : int[];
var vSize : int[];
var vSpeed : int[];
var vPower : int[];

//references to prefabs
var prefabOnDrop:GameObject[];
var prefabOnEquip:GameObject[];
//references to held items
var vCarried:GameObject[];
//reference to empty object
var emptyPrefab:GameObject;
var leer:Texture2D;

//option state counter
var isinoptions:int=-1;
//other scripts state counter
var vMenuState:int=0;

//stats Index 
var vStatInd : int = -1;

var hit:RaycastHit;
//main camera
var vCam : GameObject;
//scripthandler object that holds the clock
var vScripthandler : GameObject;
var vTimeScript : Component;
//plaerscript that holds health etc.
var vPlayerScript : Component;
//mouse sensitivity read out from the mouselook scripts
var vMouseSens : float;
//reference to drope item object for stat passing
var vInstReference : GameObject;

function Awake()
{
	vTimeScript = vScripthandler.GetComponent(Zeit);
	vPlayerScript = GetComponent(Spieler);
	UnPauseGame();
}


function Update()
{
	//wait for pause key
	if(Input.GetKeyDown("escape"))
	{
		if(isinoptions==-1)
		
		PauseGame();
		
		else
		
		UnPauseGame();
		
	}
}





function OnGUI ()
{
	//Main page of the menu
	if(isinoptions==0)
	{
		//draw the background
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		
		//draw inventory boxes
		GUI.Box(Rect(Screen.width/2-400,10,200,200),itemnamen[0]);
		GUI.Box(Rect(Screen.width/2-200,10,200,200),itemnamen[1]);
		GUI.Box(Rect(Screen.width/2,10,200,200),itemnamen[2]);
		GUI.Box(Rect(Screen.width/2+200,10,200,200),itemnamen[3]);
		
		//draw item icons
		GUI.DrawTexture(Rect(Screen.width/2-390,30,180,140),itemicons[0]);
		GUI.DrawTexture(Rect(Screen.width/2-190,30,180,140),itemicons[1]);
		GUI.DrawTexture(Rect(Screen.width/2+10,30,180,140),itemicons[2]);
		GUI.DrawTexture(Rect(Screen.width/2+210,30,180,140),itemicons[3]);
		
		//draw time and player needs
		GUI.Label(Rect(10,10,250,30), "Date: " + vTimeScript.tage + ", " + vTimeScript.monat + ", " + vTimeScript.jahr);
		GUI.Label(Rect(10,30,250,30), "Time: " + vTimeScript.stunde + ":" + vTimeScript.minute + ":" + vTimeScript.sekunde);
		
		GUI.Label(Rect(10,60,250,30), "Health: " + vPlayerScript.health);
		GUI.Label(Rect(10,80,250,30), "Hunger: " + vPlayerScript.hunger);
		GUI.Label(Rect(10,100,250,30), "Energy: " + vPlayerScript.energie);
		
		GUI.Label(Rect(10,160,250,30), "Money: " + vPlayerScript.vMoney);
		
		//draw back button
		if(GUI.Button(Rect(10,Screen.height-60,60,20),"Back"))
		{
			UnPauseGame();
		}
		//draw stats Button
		if(GUI.Button(Rect(80,Screen.height-60,60,20),"Stats"))
		{
			isinoptions=3;
		}
		//draw options button
		if(GUI.Button(Rect(150,Screen.height-60,60,20),"Options"))
		{
			isinoptions=2;
		}
		//draw quit button
		if(GUI.Button(Rect(220,Screen.height-60,60,20),"Quit"))
		{
			Application.Quit();
		}
		//check if slot contains an item
		if(itemnamen[0]!="")
		{
			//if so, draw drop button
			if(GUI.Button(Rect(Screen.width/2-390,175,180,25),"drop"))
			{
				//set slot to empty
				itemnamen[0]="";
				itembeshreibung[0]="No item selected";
				itemicons[0]=leer;
				prefabOnEquip[0]=emptyPrefab;
				
				//instantiate prefab
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					vInstReference = Instantiate(prefabOnDrop[0],hit.point, transform.rotation);
				}
				//pass item stats
				vInstReference.GetComponent(ItemStats).vHealth = vHealth[0];
				vInstReference.GetComponent(ItemStats).vSize = vSize[0];
				vInstReference.GetComponent(ItemStats).vSpeed = vSpeed[0];
				vInstReference.GetComponent(ItemStats).vPower = vPower[0];
				//set prefab to emty
				prefabOnDrop[0]=emptyPrefab;
				vCarried[0]=emptyPrefab;
				//set held item to null
				Destroy(GetComponent("ActiveItem").vActiveObj[0]);
				GetComponent("ActiveItem").vActiveObj[0]=GetComponent("ActiveItem").emptyPrefab;
			}
			
		}
		
		if(itemnamen[1]!="")
		{
			
			if(GUI.Button(Rect(Screen.width/2-190,175,180,25),"drop"))
			
			{
				
				itemnamen[1]="";
				itembeshreibung[1]="No item selected";
				itemicons[1]=leer;
				prefabOnEquip[1]=emptyPrefab;
				
				//and here we raycast below and instantiate prefabsondrop[0]
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					vInstReference = Instantiate(prefabOnDrop[1],hit.point, transform.rotation);
				}
				//pass item stats
				vInstReference.GetComponent(ItemStats).vHealth = vHealth[1];
				vInstReference.GetComponent(ItemStats).vSize = vSize[1];
				vInstReference.GetComponent(ItemStats).vSpeed = vSpeed[1];
				vInstReference.GetComponent(ItemStats).vPower = vPower[1];
				prefabOnDrop[1]=emptyPrefab;
				vCarried[1]=emptyPrefab;
				Destroy(GetComponent("ActiveItem").vActiveObj[1]);
				GetComponent("ActiveItem").vActiveObj[1]=GetComponent("ActiveItem").emptyPrefab;
			}
		}
		
		if(itemnamen[2]!=""){
			
			if(GUI.Button(Rect(Screen.width/2+10,175,180,25),"drop"))
			{
				
				itemnamen[2]="";
				itembeshreibung[2]="No item selected";
				itemicons[2]=leer;
				prefabOnEquip[2]=emptyPrefab;
				
				//and here we raycast below and instantiate prefabsondrop[0]
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					
					vInstReference = Instantiate(prefabOnDrop[2],hit.point, transform.rotation);
				}
				//pass item stats
				vInstReference.GetComponent(ItemStats).vHealth = vHealth[2];
				vInstReference.GetComponent(ItemStats).vSize = vSize[2];
				vInstReference.GetComponent(ItemStats).vSpeed = vSpeed[2];
				vInstReference.GetComponent(ItemStats).vPower = vPower[2];
				prefabOnDrop[2]=emptyPrefab;
				vCarried[2]=emptyPrefab;
				Destroy(GetComponent("ActiveItem").vActiveObj[2]);
				GetComponent("ActiveItem").vActiveObj[2]=GetComponent("ActiveItem").emptyPrefab;
			}
			
		}
		
		if(itemnamen[3]!=""){
			
			if(GUI.Button(Rect(Screen.width/2+210,175,180,25),"drop"))
			{
				
				itemnamen[3]="";
				itembeshreibung[3]="No item selected";
				itemicons[3]=leer;
				prefabOnEquip[3]=emptyPrefab;
				
				//and here we raycast below and instantiate prefabsondrop[0]
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					vInstReference = Instantiate(prefabOnDrop[3],hit.point, transform.rotation);
				}
				//pass item stats
				vInstReference.GetComponent(ItemStats).vHealth = vHealth[3];
				vInstReference.GetComponent(ItemStats).vSize = vSize[3];
				vInstReference.GetComponent(ItemStats).vSpeed = vSpeed[3];
				vInstReference.GetComponent(ItemStats).vPower = vPower[3];
				prefabOnDrop[3]=emptyPrefab;
				vCarried[3]=emptyPrefab;
				Destroy(GetComponent("ActiveItem").vActiveObj[3]);
				GetComponent("ActiveItem").vActiveObj[3]=GetComponent("ActiveItem").emptyPrefab;
			}
			
		}
		
	}
	
	//Options page
	else if(isinoptions==2)
	{	
		//draw the background
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		
		vMouseSens = GetComponent("MouseLook").sensitivityX;
		
		vMouseSens = GUI.HorizontalSlider (Rect (10, 30, 100, 30), vMouseSens, 1.0, 30.0);
		
		GetComponent("MouseLook").sensitivityX = vMouseSens;
		GetComponent("MouseLook").sensitivityY = vMouseSens;
		vCam = gameObject.FindWithTag("MainCamera");
		vCam.GetComponent("MouseLook").sensitivityX = vMouseSens;
		vCam.GetComponent("MouseLook").sensitivityY = vMouseSens;
		
		if(GUI.Button(Rect(10,Screen.height-60,60,20),"Back"))
		{
			isinoptions=0;
		}
	}
	//Stats page
	else if(isinoptions==3)
	{
		//draw the background
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		
		//draw stat buttons
		if(GUI.Button(Rect(10,10,150,20),GetComponent(StatSkill).vStats[0].vStatName + GetComponent(StatSkill).vStats[0].vValue + " hours"))
		{
			vStatInd = 0;
			vBadgeInd(0);
		}
		
		if(GUI.Button(Rect(10,40,150,20),GetComponent(StatSkill).vStats[1].vStatName + GetComponent(StatSkill).vStats[1].vValue))
		{
			vStatInd = 1;
						vBadgeInd(1);

		}
		
		if(GUI.Button(Rect(10,70,150,20),GetComponent(StatSkill).vStats[2].vStatName + GetComponent(StatSkill).vStats[2].vValue))
		{
			vStatInd = 2;
			vBadgeInd(2);
		}
		
		if(GUI.Button(Rect(10,100,150,20),GetComponent(StatSkill).vStats[3].vStatName + GetComponent(StatSkill).vStats[3].vValue))
		{
			vStatInd = 3;
			vBadgeInd(3);
		}
		
		if(GUI.Button(Rect(10,130,150,20),GetComponent(StatSkill).vStats[5].vStatName + GetComponent(StatSkill).vStats[5].vValue))
		{
			vStatInd = 5;
			vBadgeInd(5);
		}
		
		if(GUI.Button(Rect(10,160,150,20),GetComponent(StatSkill).vStats[6].vStatName + GetComponent(StatSkill).vStats[6].vValue))
		{
			vStatInd = 6;
			vBadgeInd(6);
		}
		
		//draw more info if a stat is selected
		if(vStatInd != -1)
		{
			//draw info Box
			GUI.Box(Rect(Screen.width/4,10,Screen.width/2,Screen.height-70),"");
			
			//draw info about activated stat
			GUI.Label(Rect(Screen.width/4+10,30,Screen.width/2-20,30), "" + GetComponent(StatSkill).vStats[vStatInd].vStatName);
			GUI.Label(Rect(Screen.width/4+10,70,Screen.width/2-20,30), "Amount: " + GetComponent(StatSkill).vStats[vStatInd].vValue);
			GUI.Label(Rect(Screen.width/4+10,110,Screen.width/2-20,30), "Level: " + GetComponent(StatSkill).vStats[vStatInd].vLvl);
			GUI.Label(Rect(Screen.width/4+10,150,Screen.width/2-20,30), "Experience needed for next level:" + GetComponent(StatSkill).vStats[vStatInd].vExp);
			GUI.Label(Rect(Screen.width/4+10,190,Screen.width/2-20,30), "" + GetComponent(StatSkill).vStats[vStatInd].vDesc);
			
			GUI.DrawTexture(Rect(Screen.width/4+Screen.width/2-110,20,100,100),vBadges[vBadge]);
		}
		
		if(GUI.Button(Rect(10,Screen.height-60,60,20),"Back"))
		{
			isinoptions=0;
		}
	}
}
//finds the right badge by executing the most hideous code possible
function vBadgeInd(vb : int)
{
vBadge = 0;
if(GetComponent(StatSkill).vStats[vb].vLvl > 1)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 2)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 3)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 4)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 5)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 6)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 7)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 8)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 9)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 10)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 11)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 12)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 13)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 14)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 15)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 19)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 20)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 29)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 30)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 39)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 40)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 49)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 50)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 59)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 60)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 69)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 70)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 79)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 80)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 89)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 90)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 99)
vBadge++;

if(GetComponent(StatSkill).vStats[vb].vLvl > 100)
vBadge++;
}

function PauseGame()
{
	
	isinoptions=0;
	
	gameObject.GetComponent("MouseLook").enabled=false;
	vCam = gameObject.FindWithTag("MainCamera");
	vCam.GetComponent("MouseLook").enabled=false;
	

	
	Screen.showCursor=true;
	
	Screen.lockCursor=false;
}

function UnPauseGame()
{
	isinoptions=-1;
	
	gameObject.GetComponent("MouseLook").enabled=true;
	vCam = gameObject.FindWithTag("MainCamera");
	vCam.GetComponent("MouseLook").enabled=true;
	
	
	Screen.showCursor=false;
	
	Screen.lockCursor=true;
}