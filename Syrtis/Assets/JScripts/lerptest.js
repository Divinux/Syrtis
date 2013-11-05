var aTexture : Texture;
	
	private var toggleTxt : boolean = false;
	private var toggleImg : boolean = false;
	
	function OnGUI () {
		if(!aTexture) {
			Debug.LogError("Please assign a texture in the inspector.");
			return;
		}
	
		toggleTxt = GUI.Toggle(Rect(10, 10, 100, 30), toggleTxt, "A Toggle text");
		toggleImg = GUI.Toggle(Rect(10, 50, 50, 50), toggleImg, aTexture);
	}