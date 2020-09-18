var Ana = 154
var Ani = 156
var Budi = 165

if(Ana>Ani)
{
	if(Ana>Budi)
	{
		if(Budi>Ani)
		{
			console.log(Ana,Budi,Ani)
		}
		else
		{
			console.log(Ana,Ani,Budi)
		}	
	}
	else
	{
		console.log(Budi,Ana,Ani)
	}
		
}
else if(Ani>Budi)
{
	if(Budi>Ana)
	{
		console.log(Ani,Budi,Ana)
	}
	else
	{
		console.log(Ani,Ana,Budi)
	}
}
else
{
	console.log(Budi,Ani,Ana)
}