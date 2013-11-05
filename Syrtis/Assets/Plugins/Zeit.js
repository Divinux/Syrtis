var sekunde : int = 0;
var minute : int = 0;
var stunde : int = 14;
var tage : int = 1;
static var monat : int = 1;
var jahr : int = 1000;
var zeitraffer : float = 1.0f;
var skywechsel : float = 0.0f;
var sonne : Transform;
var fadenkreuz : Texture2D;
var hudbar : Texture2D;
var hudhg : Texture2D;

var vPlayer : GameObject;
vPlayer = gameObject.FindWithTag("Player");

function Update ()
{
	//runs the clock
	Uhr ();
}



function Uhr ()
{
	//sets the duration of an ingame second
	sekunde = (sekunde + 1) * zeitraffer;
	
	if (sekunde > 60)
	{
		sekunde = 0;
		minute++;
		
		//rotates the sun
		sonne.RotateAround(Vector3.up, Vector3.right, 0.25);
		
		if (minute > 60)
		{
			minute = 0;
			stunde++;
			//checks if the skybox needs updating
			Wolken();
			//updates player needs
			Verluste();
			
			if (stunde > 23)
			{
				stunde = 0;
				tage++;
				//updates properties/homes
				GetComponent(Properties).fPropUpdate();
				
				if (tage > 30)
				{
					tage = 1;
					monat++;
					
					if (monat >12)
					{
						monat = 1;
						jahr++;
					}
				}
			}
		}
		
	}
	
}

function OnGUI ()
{
	GUI.Label(Rect(Screen.width / 2, Screen.height / 2, 100, 100), fadenkreuz);
	/*
	GUI.Label(Rect(-99+Spieler.health,20,80,15), hudhg);
	GUI.Label(Rect(0,10,156,29), hudbar);
	GUI.Label(Rect(-99+Spieler.hunger,50,80,15), hudhg);
	GUI.Label(Rect(0,40,156,29), hudbar);
	GUI.Label(Rect(-99+Spieler.energie,80,80,15), hudhg);
	GUI.Label(Rect(0,70,156,29), hudbar);*/
	
	
	
}

function Wolken ()
{
	if (stunde >= 6 && stunde < 20)
	{
		if(skywechsel != 0.0)
		{
			skywechsel = Mathf.Lerp(skywechsel, 0.0, Time.deltaTime * 2);
			RenderSettings.skybox.SetFloat("_Blend", skywechsel);
			yield;
		}
	}
	
	if (stunde >= 20 || stunde < 6)
	{
		if(skywechsel != 1.0)
		{
			skywechsel = Mathf.Lerp(skywechsel, 1.0, Time.deltaTime * 2);
			RenderSettings.skybox.SetFloat("_Blend", skywechsel);
			yield;
		}
	}
	
}


function Verluste ()
{

	//sub hunger and energy
	vPlayer.GetComponent(Spieler).hunger = vPlayer.GetComponent(Spieler).hunger - 3;
	vPlayer.GetComponent(Spieler).energie = vPlayer.GetComponent(Spieler).energie - 1;
	
	//check if player is hungry
	if (vPlayer.GetComponent(Spieler).hunger <= 0)
	{
		vPlayer.GetComponent(Spieler).hunger = 0;
		vPlayer.GetComponent(Spieler).health = vPlayer.GetComponent(Spieler).health - 5;
		
	}
	
	//check if player is tired
	if (vPlayer.GetComponent(Spieler).energie <= 0)
	{
		vPlayer.GetComponent(Spieler).energie = 0;
		vPlayer.GetComponent(Spieler).health = vPlayer.GetComponent(Spieler).health -5;
	}
	
	//check if player is free for health regen
	if (vPlayer.GetComponent(Spieler).hunger >= 80 && vPlayer.GetComponent(Spieler).energie >= 80)
	{
	//add 10 hp
		vPlayer.GetComponent(Spieler).health = vPlayer.GetComponent(Spieler).health + 10;
		//check if health is not higher than 100 + lvl
		if (vPlayer.GetComponent(Spieler).health > 100 + vPlayer.GetComponent(StatSkill).vStats[0].vLvl - 1)
		{
		//if it is, bring it back
			vPlayer.GetComponent(Spieler).health = 100 + vPlayer.GetComponent(StatSkill).vStats[0].vLvl - 1;
		}
	}
	
	vPlayer.GetComponent(StatSkill).GainExp(0,1);

}


