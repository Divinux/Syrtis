var itemnamen:String[];
var itembeshreibung:String[];
var itemicons:Texture2D[];

var prefabOnDrop:GameObject[];
var prefabOnEquip:GameObject[];

var emptyPrefab:GameObject;
var leer:Texture2D;
var isinoptions:int=-1;
var hit:RaycastHit;

function Awake()
{
	UnPauseGame();
}


function Update()
{
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
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		GUI.Box(Rect(-200,-200,Screen.width+400,Screen.height+400),"");
		
		GUI.Box(Rect(Screen.width/2-400,Screen.height/2-100,200,200),itemnamen[0]);
		GUI.Box(Rect(Screen.width/2-200,Screen.height/2-100,200,200),itemnamen[1]);
		GUI.Box(Rect(Screen.width/2,Screen.height/2-100,200,200),itemnamen[2]);
		GUI.Box(Rect(Screen.width/2+200,Screen.height/2-100,200,200),itemnamen[3]);
		
		GUI.DrawTexture(Rect(Screen.width/2-390,Screen.height/2-80,180,140),itemicons[0]);
		GUI.DrawTexture(Rect(Screen.width/2-190,Screen.height/2-80,180,140),itemicons[1]);
		GUI.DrawTexture(Rect(Screen.width/2+10,Screen.height/2-80,180,140),itemicons[2]);
		GUI.DrawTexture(Rect(Screen.width/2+210,Screen.height/2-80,180,140),itemicons[3]);
		
		if(GUI.Button(Rect(10,Screen.height-60,60,20),"Back"))
		{
			UnPauseGame();
		}
		
		if(GUI.Button(Rect(10,Screen.height-40,60,20),"Options"))
		{
			isinoptions=2;
		}
		
		if(GUI.Button(Rect(10,Screen.height-20,60,20),"Quit"))
		{
			Application.Quit();
		}
		
		if(itemnamen[0]!="")
		{
			if(GUI.Button(Rect(Screen.width/2-380,Screen.height/2+50,100,50),"drop"))
			{
				
				itemnamen[0]="";
				itembeshreibung[0]="No item selected";
				itemicons[0]=leer;
				prefabOnEquip[0]=emptyPrefab;
				
				//and here we raycast below and instantiate prefabsondrop[0]
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					Instantiate(prefabOnDrop[0],hit.point, transform.rotation);
				}
				
				prefabOnDrop[0]=emptyPrefab;
				Destroy(GetComponent("ActiveItem").vActiveObj[0]);
				GetComponent("ActiveItem").vActiveObj[0]=GetComponent("ActiveItem").emptyPrefab;
			}
			
		}
		
		if(itemnamen[1]!="")
		{
			
			if(GUI.Button(Rect(Screen.width/2-180,Screen.height/2+50,100,50),"drop"))
			
			{
				
				itemnamen[1]="";
				itembeshreibung[1]="No item selected";
				itemicons[1]=leer;
				prefabOnEquip[1]=emptyPrefab;
				
				//and here we raycast below and instantiate prefabsondrop[0]
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					Instantiate(prefabOnDrop[1],hit.point, transform.rotation);
				}
				
				prefabOnDrop[1]=emptyPrefab;
				Destroy(GetComponent("ActiveItem").vActiveObj[1]);
				GetComponent("ActiveItem").vActiveObj[1]=GetComponent("ActiveItem").emptyPrefab;
			}
		}
		
		if(itemnamen[2]!=""){
			
			if(GUI.Button(Rect(Screen.width/2+180,Screen.height/2+50,100,50),"drop"))
			{
				
				itemnamen[2]="";
				itembeshreibung[2]="No item selected";
				itemicons[2]=leer;
				prefabOnEquip[2]=emptyPrefab;
				
				//and here we raycast below and instantiate prefabsondrop[0]
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					
					Instantiate(prefabOnDrop[2],hit.point, transform.rotation);
				}
				prefabOnDrop[2]=emptyPrefab;
				Destroy(GetComponent("ActiveItem").vActiveObj[2]);
				GetComponent("ActiveItem").vActiveObj[2]=GetComponent("ActiveItem").emptyPrefab;
			}
			
		}
		
		if(itemnamen[3]!=""){
			
			if(GUI.Button(Rect(Screen.width/2+380,Screen.height/2+50,100,50),"drop"))
			{
				
				itemnamen[3]="";
				itembeshreibung[3]="No item selected";
				itemicons[3]=leer;
				prefabOnEquip[3]=emptyPrefab;
				
				//and here we raycast below and instantiate prefabsondrop[0]
				
				if(Physics.Raycast (transform.position, -Vector3.up, hit, 100.0))
				{
					Instantiate(prefabOnDrop[3],hit.point, transform.rotation);
				}
				prefabOnDrop[3]=emptyPrefab;
				Destroy(GetComponent("ActiveItem").vActiveObj[3]);
				GetComponent("ActiveItem").vActiveObj[3]=GetComponent("ActiveItem").emptyPrefab;
			}
			
		}
		
	}
	
	//OPTIONS PAGE
	
	else if(isinoptions==2)
	{
		
		if(GUI.Button(Rect(10,Screen.height-60,60,20),"Back"))
		{
			isinoptions=0;
		}
	}
}

function PauseGame()
{
	
	isinoptions=0;
	
	GetComponent("MouseLook").enabled=false;
	
	//transform.Find("Main Camera").GetComponent("MouseLook").enabled=false;
	
	//Screen.showCursor=true;
	
	Screen.lockCursor=false;
}

function UnPauseGame()
{
	isinoptions=-1;
	
	GetComponent("MouseLook").enabled=true;
	
	//transform.Find("Main Camera").GetComponent("MouseLook").enabled=true;
	
	//Screen.showCursor=false;
	
	Screen.lockCursor=true;
}