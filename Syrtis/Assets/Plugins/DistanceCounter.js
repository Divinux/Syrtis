var origPos : Vector3;


var currentPos : Vector3;


var myTransform : Transform;


 


function Start()


{


    myTransform=transform;


    origPos=myTransform.position;


    currentPos=myTransform.position;


}


 


function Update()


{


    currentPos=myTransform.position;


    Debug.Log((currentPos-origPos).magnitude);


}