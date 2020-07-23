//Sign Up page
var arrTenants =[];
var signUpForm = document.getElementById("signUpForm");
console.log(signUpForm);
var tenantIndex=-1;//set tenant index to -1 so by default tenant does not exist in database

//create tenant object
var Tenant = function(firstName,lastName,building,apartment,username="",password=""){
	this.firstName = firstName;
	this.lastName = lastName;
	this.building = building;
	this.apartment = apartment;
	this.username = username;
	this.password = password;
}


//create an array of tenant object to simulate sample data of tenants
var arrTenants = [];
	var tenant = new Tenant("Jane","Austen","Mansfield Park","1A","janeA111","jane@111");	
	arrTenants.push(tenant);
	var tenant = new Tenant("Emma","Woodhouse","Mansfield Park","1B", "EmmaW111", "emma@111");	
	arrTenants.push(tenant);
	var tenant = new Tenant("George","Knightley","Norland Park","1A");	
	arrTenants.push(tenant);
	var tenant = new Tenant("Jane","Fairfax","Norland Park","1B");	
	arrTenants.push(tenant);
	var tenant = new Tenant("Harriet","Smith","Northanger Abbey","1A");	
	arrTenants.push(tenant);
	var tenant = new Tenant("Frank","Churchill","Northanger Abbey","1B");	
	arrTenants.push(tenant);



//add event handler to form submit
signUpForm.addEventListener("submit", checkSignUpValid);

//check if tenant exists, does not have a login yet, and if username is available
function checkSignUpValid(e){
	e.preventDefault();
	
	var tenantExists = checkIfTenantExists(e,arrTenants);
	var userNameAvailable = checkUsernameAvailable(e,arrTenants);
	var newSignUp = checkIfTenantHasUserName(arrTenants);
	var successMessage = document.getElementById("successMessage");
	successMessage.style.color = "red";
	successMessage.style.border = "1px solid red";
	successMessage.style.textAlign = "center";
	
	
	if(tenantExists && userNameAvailable && newSignUp){
		//add username and password to arrTenants
		 arrTenants[tenantIndex].username = e.target[4].value;
		 arrTenants[tenantIndex].password = e.target[5].value;
		 successMessage.textContent = "Sign up successful";
	}
	else if(tenantExists && !newSignUp){
		 successMessage.textContent = "You already have a login. Please call our office at (800) 555-5555 for assistance.";
	}
	else if(!tenantExists){
		successMessage.textContent = "Tenant does not exist in our database. Please call our office at (800) 555-5555 for assistance.";
	}
	else if(!userNameAvailable){
		successMessage.textContent = "Username already in use. Choose another one.";
	 }

	
}

//check if tenant exists
function checkIfTenantExists(e, arrTenants){
	
	for(let i=0;i<arrTenants.length;i++){
		if(e.target[0].value === arrTenants[i].firstName && e.target[1].value === arrTenants[i].lastName
			&& e.target[2].value === arrTenants[i].building && e.target[3].value === arrTenants[i].apartment){
			tenantIndex=i;
			return true;
		}
	}
		return false;
}
//check if tenant already has username
function checkIfTenantHasUserName(arrTenants){
	if (tenantIndex !== -1){
		if(arrTenants[tenantIndex].username === ""){
		return true;
		}	
	}
	
	return false;
}

//check if username is available
function checkUsernameAvailable(e, arrWebsiteUser){
	for(let i =0; i<arrTenants.length;i++){
		if(arrTenants[i].username === e.target[4].value){
			return false;
		}
	}
	return true;
}