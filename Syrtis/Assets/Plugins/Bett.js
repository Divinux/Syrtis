function OnMouseDown ()
{
	print ("ZZZZZZzzzzZZzZzzz!");
	Spieler.energie = Spieler.energie + 100;
	if(Spieler.energie > 100)
	{
		Spieler.energie = 100;
	}
}

function OnTriggerEnter (spieler : Collider)
{
	if(spieler.tag == "Player")
	{
		print ("Klicken zum Schlafen!");
	}
}