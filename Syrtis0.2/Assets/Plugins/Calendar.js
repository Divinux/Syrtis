var visible : boolean = false;
var hintergrund : Texture2D;
var marker : Texture2D;
var monat : String;
var font : Font;


function Update () {
	if(Input.GetKeyUp("k"))
	{
		visible = !visible;
		print (visible);
	}
	Monatsaktual ();
}

function Monatsaktual ()
{
	if (Zeit.monat == 1) monat = "January";
	if (Zeit.monat == 2) monat = "February";
	if (Zeit.monat == 3) monat = "March";
	if (Zeit.monat == 4) monat = "April";
	if (Zeit.monat == 5) monat = "May";
	if (Zeit.monat == 6) monat = "June";
	if (Zeit.monat == 7) monat = "July";
	if (Zeit.monat == 8) monat = "August";
	if (Zeit.monat == 9) monat = "September";
	if (Zeit.monat == 10) monat = "October";
	if (Zeit.monat == 11) monat = "November";
	if (Zeit.monat == 12) monat = "January";
}

function OnGUI ()
{
	GUI.skin.font = font;
	
	if(visible == true)
	{
		GUI.BeginGroup (Rect(Screen.width / 2 - 200, Screen.height / 2 - 300, 1000, 1000));
		GUI.Label (Rect (0, 0, hintergrund.width, hintergrund.height), hintergrund);
		GUI.Label (Rect (40, 128, marker.width, marker.height), marker);
		GUI.Label (Rect (180, 80, 300, 200), monat);
		GUI.EndGroup ();
		
	}
	
	
}