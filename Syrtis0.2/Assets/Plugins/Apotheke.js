function OnMouseDown ()
{
	if (Arzt.rezept == 0) {
		print ("Sie sind gar nicht krank!");
	}
	
	if (Arzt.rezept == 1) {
		print ("Hier ist etwas gegen ihr Fieber!");
		Spieler.krankheit = false;
		Arzt.diagnose = 0;
		Arzt.rezept = 0;
		print (Arzt.diagnose);
		print (Spieler.krankheit);
	}
	
	if (Arzt.rezept == 2) {
		print ("Hier ist etwas gegen ihren Duenpfiff!");
		Spieler.krankheit = false;
		Arzt.diagnose = 0;
		Arzt.rezept = 0;
		
	}
	
	if (Arzt.rezept == 3) {
		print ("Machen sie Witze? Sie sind praktisch Tot!");
		Spieler.krankheit = false;
		Arzt.diagnose = 0;
		Arzt.rezept = 0;
		
	}
	
	
}

function OnTriggerEnter (spieler : Collider)
{
	if(spieler.tag == "Player")
	{
		print ("Hallo, wie kann ich helfen?");
	}
}