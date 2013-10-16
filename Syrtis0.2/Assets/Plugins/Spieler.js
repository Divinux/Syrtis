// values between 0 and 100, the higher the more satisfied the need
static var health : int = 100;
static var hunger : int = 100;
static var energie : int = 100;

//death boolean
static var tod : boolean = false;

//illness variables
static var krankheit : boolean = false;
var krankheitchance : float = 0;

// values between 0 and 100, the higher the more satisfied the need, get passed on from the top
var vHealth : int;
var vHunger : int;
var vEnergy : int;

var vSpeed : int;
var vStrength : int;

//value between 0 and 2, the lower the better the aim
var vAccuracy : float;

var vZoom : boolean = false;




function Update ()
{
	//Screen.lockCursor = true;
	//checks if player is alive
	Tod ();
	
	//updates the players needs
	vHealth = health;
	vHunger = hunger;
	vEnergy = energie;
	
	//zooms in
	if(Input.GetButtonUp ("Fire3"))
	{
	print("gotcha");
		if(vZoom == false)
		{
		print("zooming in");
		var cams = gameObject.GetComponentsInChildren(Camera);
		for (var cam : Camera in cams)
		{
			cam.fieldOfView = 20;
		}
		vZoom = true;
		}
		else if(vZoom == true)
		{
		print("zooming out");
		var cams2 = gameObject.GetComponentsInChildren(Camera);
		for (var cam2 : Camera in cams2)
		{
			cam2.fieldOfView = 60;
		}
		vZoom = false;
		}
	}
	
	/*This code with zoom when m3 is held down
	if (Input.GetButtonDown ("Fire3"))
	{
		var cams = gameObject.GetComponentsInChildren(Camera);
		for (var cam : Camera in cams)
		{
			cam.fieldOfView = 20;
		}
		
	}
	if (Input.GetButtonUp ("Fire3"))
	{
		var cams2 = gameObject.GetComponentsInChildren(Camera);
		for (var cam2 : Camera in cams2)
		{
			cam2.fieldOfView = 60;
		}
	}*/
	
}

/*function OnGUI ()
{
	GUI.Label(Rect(40,0,300,30), "   " + health);
	GUI.Label(Rect(40,24,300,30), "   " + energie);
	GUI.Label(Rect(40,48,300,30), "   " + hunger);
}
*/


function Tod ()
{
	if (health <= 0)
	{
		print ("Game Over!");
		health = 0;
	}
}

//checks for illness. random chance.
function Krankheit ()
{
	if(krankheit == false)
	{
		krankheitchance = Random.Range(1, 10000);
		if (krankheitchance == 1)
		{
			print ("Krankheit!");
			krankheit = true;
			Arzt.diagnose = 1;
		}
		
		if (krankheitchance == 2)
		{
			print ("Krankheit!");
			krankheit = true;
			Arzt.diagnose = 2;
		}
		
		if (krankheitchance == 3)
		{
			print ("Krankheit!");
			krankheit = true;
			Arzt.diagnose = 3;
		}
	}
}

//receiver for damage
function Damage(hitpoints : int)
{
	health = health - hitpoints;
}

