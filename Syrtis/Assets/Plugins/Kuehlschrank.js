

function OnMouseDown ()
{
	print ("OMNOMNOMNOM!");
	Spieler.hunger = Spieler.hunger + 50;
	if(Spieler.hunger > 100)
	{
		Spieler.hunger = 100;
	}
}

function OnTriggerEnter (spieler : Collider)
{
	if(spieler.tag == "Player")
	{
		print ("Klicken zum Essen!");
	}
}