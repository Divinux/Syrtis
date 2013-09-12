static var diagnose : float = 0;
var kontakt : float = 0;
static var rezept : float = 0;

function OnMouseDown ()
{
	if (diagnose >= 1)
	{
		if (kontakt < 1)
		{
			print ("Bitte geben sie zur Diagnose eine Blutprobe ab");
			kontakt++;
		}
		else
		{
			print ("Ihre Diagnose ist gleich fertig!");
			kontakt++;
		}
		
		if (kontakt == 2)
		{
			
			if (diagnose == 1)
			{
				print ("Sie haben: Fieber!");
				rezept = 1;
				kontakt = 0;
			}
			
			if (diagnose == 2)
			{
				print ("Sie haben: Durchfall!");
				rezept = 2;
				kontakt = 0;
			}
			
			if (diagnose == 3)
			{
				print ("Sie haben: AIDS! ZOMGWTF!!!!111elf");
				rezept = 3;
				kontakt = 0;
			}
			
		}
	}
	else
	{
		print ("Sie sind gar nicht krank!");
	}
}

function OnTriggerEnter (spieler : Collider)
{
	if(spieler.tag == "Player")
	{
		print ("Hallo, wie kann ich helfen?.");
	}
}