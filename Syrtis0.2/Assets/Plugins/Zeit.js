var sekunde : int = 0;
var minute : int = 0;
var stunde : int = 14;
var tage : int = 1;
static var monat : int = 1;
var jahr : int = 1000;
var zeitraffer : int = 1;
var skywechsel : int = 0;
var sonne : Transform;
var fadenkreuz : Texture2D;
var hudbar : Texture2D;
var hudhg : Texture2D;



function Update ()
{
	Uhr ();
	
}



function Uhr ()
{
	sekunde = (sekunde + 1) * zeitraffer;
	
	
	if (sekunde > 60)
	{
		sekunde = 0;
		minute++;
		Wolken();
		sonne.RotateAround(Vector3.up, Vector3.right, 0.25);
		if (minute > 60)
		{
			minute = 0;
			stunde++;
			Verluste();
			if (stunde > 23)
			{
				stunde = 0;
				tage++;
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
	GUI.Label(Rect(500,20,250,30), tage + ", " + monat + ", " + jahr);
	GUI.Label(Rect(270,20,250,30), stunde + ":" + minute + ":" + sekunde);
	GUI.Label(Rect(Screen.width / 2, Screen.height / 2, 100, 100), fadenkreuz);
	GUI.Label(Rect(-99+Spieler.health,20,80,15), hudhg);
	GUI.Label(Rect(0,10,156,29), hudbar);
	GUI.Label(Rect(-99+Spieler.hunger,50,80,15), hudhg);
	GUI.Label(Rect(0,40,156,29), hudbar);
	GUI.Label(Rect(-99+Spieler.energie,80,80,15), hudhg);
	GUI.Label(Rect(0,70,156,29), hudbar);
	
	
	
}

function Wolken ()
{
	
	if (stunde >= 6 && stunde < 20)
	{
		skywechsel = skywechsel - 0.1;
		RenderSettings.skybox.SetFloat("_Blend", 0);
	}
	
	if (stunde >= 20 || stunde < 6)
	{
		
		skywechsel = skywechsel + 0.1;
		RenderSettings.skybox.SetFloat("_Blend", 1);
		
	}
	
}


function Verluste ()
{
	Spieler.hunger = Spieler.hunger - 3;
	Spieler.energie = Spieler.energie - 1;
	
	if (Spieler.hunger <= 0)
	{
		Spieler.hunger = 0;
		Spieler.health = Spieler.health - 5;
		
	}
	
	if (Spieler.energie <= 0)
	{
		Spieler.energie = 0;
		Spieler.health = Spieler.health -5;
	}
	
	if (Spieler.hunger >= 80 && Spieler.energie >= 80)
	{
		Spieler.health = Spieler.health + 10;
		if (Spieler.health > 100)
		{
			Spieler.health = 100;
		}
	}
}


