//GLOBAL VARIABLES
var strTotal = 0, dough, size = 0, sauce = 0, toppings = [], cheese = 0, month = [];
var Pricing = {
        handTossed: ["Please Select A Hand Tossed Size", "Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"],
        handTossedPrice: [9.99, 12.99, 14.99],

        thinCrust: ["Please Select A Thin Crust Size", "Medium ($11.99)", "Large ($13.99)"],
        thinCrustPrice: [11.99, 13.99],

        nyStyle: ["Please Select A New York Style Size", "Large ($16.99)", "Extra Large ($19.99)"],
        nyStylePrice: [16.99, 19.99],

        glutenFree: ["Please Select A Gluten Free Size", "Small ($10.99)"],
        glutenFreePrice: [10.99]
    };

//Hand Tossed 
//Small ($9.99), Medium ($12.99), Large ($14.99)
//Thin Crust
// Medium ($11.99), Large ($13.99)
//New York Style
// Large ($16.99), Extra Large ($19.99)
//Gluten Free 
//Small ($10.99)

//METHODS AND FUNCTIONS
//addEventListener Method
   
function EL(id) {
    "use strict";
    return window.document.getElementById(id);
}


//ShowOther Method
function ShowOther(id, state) {
    "use strict";
    var i, others;
    if (id === EL("straddrtype")) {
        others = window.document.getElementsByClassName("other");
    } else {
        others = window.document.getElementsByClassName("billOther");
    }
    if (state) {
        for (i = 0; i < others.length; i++) {
            others[i].style.display = "block";
        }
    } else {
        for (i = 0; i < others.length; i++) {
            others[i].style.display = "none";
        }
    }
}

//FieldValidate Method
function FieldValidate() {
    "use strict";
    var errHandle = arguments[0],  isValue = arguments[1], strMessage, boolErr = false, isRegEx, matching = false;
    if (!isValue) {
        boolErr = true;
        strMessage = "This is a required field";
    }
    if (arguments.length === 3 || arguments.length === 4) {
        strMessage = arguments[2];
    }
    if (arguments.length === 4) {
        
        isRegEx = arguments[3];
        matching = isValue.match(isRegEx);
        if (matching) {
            boolErr = true;
        }
    }
    if (boolErr) {
        errHandle.innerHTML = strMessage;
    } else {
        errHandle.innerHTML = " ";
    }
}


//CheckDate Method
function CheckDate() {
    "use strict";
    var thisMonth, thisYear, intMonth, intYear, currentDate;
    switch (month[0]){
        case "Jan":
            intMonth = 1;
            break;
        case "Feb":
            intMonth = 2;
            break;
        case "Mar":
            intMonth = 3;
            break;
        case "Apr":
            intMonth = 4;
            break;
        case "May":
            intMonth = 5;
            break;
        case "Jun":
            intMonth = 6;
            break;
        case "Jul":
            intMonth = 7;
            break;
        case "Aug":
            intMonth = 8;
            break;
        case "Sep":
            intMonth = 9;
            break;
        case "Oct":
            intMonth = 10;
            break;
        case "Nov":
            intMonth = 11;
            break;
        case "Dec":
            intMonth = 12;
            break;
            
            
    }
    intYear = Number(month[1]);
    currentDate = new Date();
    thisMonth = currentDate.getDate();
    thisYear = currentDate.getFullYear();
    if(intMonth < thisMonth && intYear === thisYear){
        EL("dateyear_error").innerHTML = "Your Credit Card is Expired";
    }                
}

//Luhn Method
function Luhn(value) {
    "use strict";
  // accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;

	// The Luhn Algorithm.
	var nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven) {
			if ((nDigit *= 2) > 9) nDigit -= 9;
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}

//Total Method
function Total() {
    "use strict";
    var subTotal;
    subTotal = size + cheese + sauce + (toppings.length * 0.99);
//    subTotal = strTotal + amount;
    EL("intistotal").value = subTotal.toFixed(2);
}


//GetSize Method
function GetSize() {
    "use strict";
    var doughSize = EL("strdsize"), i;
    switch (dough) {
    case "handTossed":
        while (doughSize.hasChildNodes()) {
            doughSize.removeChild(doughSize.firstChild);
        }
        Pricing.handTossed.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            doughSize.appendChild(opt);
        });
        break;
            
    case "thinCrust":
        while (doughSize.hasChildNodes()) {
            doughSize.removeChild(doughSize.firstChild);
        }
        Pricing.thinCrust.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            doughSize.appendChild(opt);
        });
        break;
            
    case "nyStyle":
        while (doughSize.hasChildNodes()) {
            doughSize.removeChild(doughSize.firstChild);
        }
        Pricing.nyStyle.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            doughSize.appendChild(opt);
        });
        break;
    case "glutenFree":
        while (doughSize.hasChildNodes()) {
            doughSize.removeChild(doughSize.firstChild);
        }
        
        Pricing.glutenFree.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            doughSize.appendChild(opt);
        });
        break;
    }
    
    
}

function EnableAll() {
    "use strict";
    var i, objEle, arrEnable = ["strdsize", "strcheese", "strsauce", "boolpepperoni", "boolsausage", "boolham", "boolbacon", "boolsalami", "boolpeppers", "boololives", "booljalapenos", "boolmushrooms", "boolpineapple", "boolonion", "btncheckordr"];
    
    EL("strdsize").removeAttribute("disabled");
    EL("strcheese").removeAttribute("disabled");
    EL("strsauce").removeAttribute("disabled");
    EL("boolpepperoni").removeAttribute("disabled");
    EL("boolsausage").removeAttribute("disabled");
    EL("boolham").removeAttribute("disabled");
    EL("boolbacon").removeAttribute("disabled");
    EL("boolsalami").removeAttribute("disabled");
    EL("boolpeppers").removeAttribute("disabled");
    EL("boololives").removeAttribute("disabled");
    EL("booljalapenos").removeAttribute("disabled");
    EL("boolmushrooms").removeAttribute("disabled");
    EL("boolpineapple").removeAttribute("disabled");
    EL("boolonion").removeAttribute("disabled");
    EL("btncheckordr").removeAttribute("disabled");
}

//EVENT LISTENERS
window.addEventListener("load", function () {
    "use strict";
// DELIVERY ADDRESS SECTION    
    //id = strcustname
    
    var strCustName = EL("strcustname");
    var strCustName_Error = EL("strcustname_error");
    strCustName.addEventListener("change", function () {
        var nameRegEx, message = "Please your correct name";
        nameRegEx = /\d/g;
        FieldValidate(strCustName_Error, this.value, message, nameRegEx);
    });


    //id = straddrtype
    var strAddrType = EL("straddrtype").addEventListener("change", function () {
        if (this.value === "Other") {
            ShowOther(this, true);
        } else {
            ShowOther(this, false);
        }
    });

  
    var strOtherAddr = EL("strotheraddr");
    var strAddrType_Error = EL("strotheraddr_error");
    strOtherAddr.addEventListener("change", function () {
        var otherRegEx, message = "Please enter a valid address type";
        otherRegEx = /\d/g;
        FieldValidate(strAddrType_Error, this.value, message, otherRegEx);
        
    });
    
    //id = straddr1
    var strDelivAddr_Error = EL("straddr1_error");
    var strDelivAddr = EL("straddr1");
    strDelivAddr.addEventListener("change", function () {
        var message = "This is a required field";
        FieldValidate(strDelivAddr_Error, this.value, message);
    });

    
    //id = intapt
    var intApt = EL("intapt");
        
//    //id = strcity
    var strCity = EL("strcity");
    var strCity_Error = EL("strcity_error");
    strCity.addEventListener("change", function () {
        var cityRegEx = /\d/g, message = "Enter a correct city";
        FieldValidate(strCity_Error, this.value, message, cityRegEx);
    });
    
   
    //id = strstate
    var strState = EL("strstate");
    strState.setAttribute("size", "2");
    strState.setAttribute("maxlength", "2");
    var strState_Error = EL("strstate_error");
    strState.addEventListener("change", function () {
        var stateRegEx = /\d/g, message = "Enter a correct State";
        FieldValidate(strState_Error, this.value, message, stateRegEx);
    });
    
    //id = intzip
    var intZip_Error = EL("intzip_error");
    var intZip = EL("intzip");
    intZip.addEventListener("change", function () {
        var zipRegEx = /\d{5}(-\d{4})?/, message = "Enter a correct zip code";
        if (!zipRegEx.test(intZip.value)) {
            intZip.value = "";
        }
        FieldValidate(intZip_Error, this.value, message);
    });
    
    //intphone
    var intPhone_Error = EL("intphone_error");
    var intPhone = EL("intphone");
    intPhone.addEventListener("change", function () {
        var phoneRegEx = /^[2-9]\d{2}-\d{3}-\d{4}$/, message = "Enter a correct phone number in xxx-xxx-xxxx pattern";
        if (!phoneRegEx.test(intPhone.value)) {
            intPhone.value = "";
        }
        FieldValidate(intPhone_Error, this.value, message);

    });
    
    //id = stremail
    var strEmail_Error = EL("stremail_error");
    var strEmail = EL("stremail");
    strEmail.addEventListener("change", function () {
        var emailRegEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, message = "Enter a correct email address";
        if (!emailRegEx.test(strEmail.value)) {
            strEmail.value = "";
        }
        FieldValidate(strEmail_Error, this.value, message);
    });
    
// PIZZA ORDER SECTION
    
    //id = intistotal
    var intIsTotal = EL("intistotal");
    intIsTotal.value = strTotal;
    
    //id = strhandtoss
    var strHandTossed = EL("strhandtoss").addEventListener("change", function () {
            
            dough = "handTossed";
            GetSize();
            EnableAll();
            
        
        });
   
    //id = strthincrust
    var strThinCrust = EL("strthincrust").addEventListener("change", function () {
            dough = "thinCrust";
            GetSize();
            EnableAll();
        });
  
    //id = strnystyle
    var strNYStyle = EL("strnystyle").addEventListener("change", function () {
            dough = "nyStyle";
            GetSize();
            EnableAll();
        });
 
    //id = strglutenfree
    var strGlutenFree = EL("strglutenfree").addEventListener("change", function () {
            dough = "glutenFree";
            GetSize();
            EnableAll();
        });
  
    //id = strdsize
    var strDSize_Error = EL("strdsize_error");
    var strDSize = EL("strdsize");
    strDSize.addEventListener("change", function () {
        var message = "Dude, kind of need a size";
            if (dough === "handTossed") {
                switch (this.value) {
                case "Small ($9.99)":
                    size = Pricing.handTossedPrice[0];
                        break;
                        
                case "Medium ($12.99)":
                        size = Pricing.handTossedPrice[1];
                        break;
                        
                    case "Large ($14.99)":
                        size = Pricing.handTossedPrice[2];
                        break;
                }
           }
        
        if(dough === "thinCrust") {
                switch (this.value) {
                    case "Medium ($11.99)":
                        size = Pricing.thinCrustPrice[0];
                        break;
                        
                    case "Large ($13.99)":
                        size = Pricing.thinCrustPrice[1];
                        break;
                }
           }
        
        if(dough === "nyStyle") {
                switch (this.value) {
                    case "Large ($16.99)":
                        size = Pricing.nyStylePrice[0];
                        break;
                        
                    case "Extra Large ($19.99)":
                        size = Pricing.nyStylePrice[1];
                        break;
                }
           }
        
        if(dough === "glutenFree") {
                size = Pricing.glutenFreePrice[0];             
           }
        Total();
        //FieldValidate(strDSize_Error, this.value, message);
        });
    
    //id = strcheese
    var strCheese = EL("strcheese").addEventListener("change", function () {
            switch (this.value){
                case "Extra: +$2.99":
                    cheese = 2.99;
                    break;
                case "Double: +$3.99":
                    cheese = 3.99;
                    break;
                case "Normal (default): no charge":
                    cheese = 0;
                break;
                case "Light: no charge":
                    cheese = 0;
                break;
            }
            Total();
        });
    
    //id = strsauce
    var strSauce = EL("strsauce").addEventListener("change", function () {
            switch (this.value){
                case "Hearty Tomato: +$.99":
                    sauce = .99;
                    break;
                case "BBQ Sauce: +$1.99":
                    sauce = 1.99;
                    break;
                case "Regular Tomato: no charge":
                    sauce = 0;
                break;
            }
        Total();
        });
    
    //id = boolpepperoni
     EL("boolpepperoni").addEventListener("change", function () {
        (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();
        });   
    
    //id = boolsausage
     EL("boolsausage").addEventListener("change", function () {
            (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();
        });

    //id = boolham
    EL("boolham").addEventListener("change", function () {
            (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();         
        });

    //id = boolbacon
    EL("boolbacon").addEventListener("change", function () {
           (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();         
        });   

    //id = boolsalami
    EL("boolsalami").addEventListener("change", function () {
            (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();         
        });   
    
    //id = boolpeppers
    EL("boolpeppers").addEventListener("change", function () {
           (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();         
        });

    //id = boololives
    EL("boololives").addEventListener("change", function () {
           (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();         
        });

    //id = booljalapenos
    EL("booljalapenos").addEventListener("change", function () {
            (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();        
        });

    //id = boolmushrooms
    EL("boolmushrooms").addEventListener("change", function () {
           (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();         
        });

    //id = boolpineapple
    EL("boolpineapple").addEventListener("change", function () {
            (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();
        });

    //id = boolonion
    EL("boolonion").addEventListener("change", function () {
            (this.checked)? toppings.push(this.value) : toppings.pop();
        Total();
        });

    //id = btncheckordr
    EL("btncheckordr").addEventListener("click", function () {
            if(window.confirm("Are You Done Customizing Your Pizza?")){
                EL("billing").scrollIntoView();
            }
        });

    // BILLING SECTION
    //id = strbcustname
    var strBCustName = EL("strbcustname");
    var strBCustName_Error = EL("strbcustname_error");
    strBCustName.addEventListener("change", function () {
        var bNameRegEx, message = "Please your correct name";
        bNameRegEx = /\d/g;
        FieldValidate(strBCustName_Error, this.value, message, bNameRegEx);
    });
    
    //id = strbaddrtype
    var strBAddrType = EL("strbaddrtype").addEventListener("change", function () {
        if (this.value === "Other") {
            ShowOther(this, true);
        } else {
            ShowOther(this, false);
        }
    });
    
    //id = strbotheraddr
    var strBOtherAddr = EL("strbotheraddr");
    var strBAddrType_Error = EL("strbotheraddr_error");
    strBOtherAddr = EL("strbotheraddr").addEventListener("change", function () {
        var otherRegEx, message = "Please enter a valid address type";
        otherRegEx = /\d/g;
        FieldValidate(strBAddrType_Error, this.value, message, otherRegEx);
    });
    
   //id = strbaddr1
    var strBillingAddr_Error = EL("strbaddr1_error");
    var strBillingAddr = EL("strbaddr1");
    strBillingAddr.addEventListener("change", function () {
        var message = "This is a required field";
        FieldValidate(strBillingAddr_Error, this.value, message);
    });
   
   //id = intbapt
    var intBApt = EL("intbapt");
    
   //id = strbcity
    var strBCity = EL("strbcity");
    var strBCity_Error = EL("strbcity_error");
    strBCity.addEventListener("change", function () {
        var cityRegEx = /\d/g, message = "Enter a correct city";
        FieldValidate(strBCity_Error, this.value, message, cityRegEx);
    });
   
    //id = strbstate
    var strBState = EL("strbstate");
    strBState.setAttribute("size", "2");
    strBState.setAttribute("maxlength", "2");    
    var strBState_Error = EL("strbstate_error");
    strBState.addEventListener("change", function () {
        var stateRegEx = /\d/g, message = "Enter a correct State";
        FieldValidate(strBState_Error, this.value, message, stateRegEx);
    });
        
   //id = intbzip
    var intBZip_Error = EL("intbzip_error");
    var intBZip = EL("intbzip");
    intBZip.addEventListener("change", function () {
        var zipRegEx = /\d{5}(-\d{4})?/, message = "Enter a correct zip code";
        if (!zipRegEx.test(intBZip.value)) {
            intBZip.value = "";
        }
        FieldValidate(intBZip_Error, this.value, message);
    });

    //id = intbphone
    var intBPhone_Error = EL("intbphone_error");
    var intBPhone = EL("intbphone");
    intBPhone.addEventListener("change", function () {
        var phoneRegEx = /^[2-9]\d{2}-\d{3}-\d{4}$/, message = "Enter a correct phone number in xxx-xxx-xxxx pattern";
        if (!phoneRegEx.test(intBPhone.value)) {
            intBPhone.value = "";
        }
        FieldValidate(intBPhone_Error, this.value, message);
    });

    //id = strbemail
    var strBEmail_Error = EL("strbemail_error");
    var strBEmail = EL("strbemail");
    strBEmail.addEventListener("change", function () {
        var emailRegEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, message = "Enter a correct email address";
        if (!emailRegEx.test(strBEmail.value)) {
            strBEmail.value = "";
        }
        FieldValidate(strBEmail_Error, this.value, message);
    });
       //id = strcardtype
    var strCardType = EL("strcardtype");
    
    //id = intccard
    var intCCard_Error = EL("intccard_error");
    var intCCard = EL("intccard");
    intCCard.addEventListener("change", function () {
        var Card = this.value, strResult;
            if(Card.startsWith("4") && (Card.length === 13 || Card.length === 16)){
                strCardType.innerHTML = "VISA";
            }else if(Card.startsWith("51") || Card.startsWith("52") || Card.startsWith("53") || Card.startsWith("54") ||  Card.startsWith("55") && Card.length === 16){
                strCardType.innerHTML = "MASTERCARD";
            }else if(Card.startsWith("37") && Card.length === 15){
                strCardType.innerHTML = "AMERICAN EXPRESS";
            }else{
                strCardType.innerHTML = "Sorry, we only take Mastercard, Visa or American Express";
            }
            
        strResult = Luhn(Card);
            if (strResult == 0|| strResult == false){
                intCCard_Error.innerHTML = "This is not a valid credit card number";
            } else{intCCard_Error.innerHTML = ""}
        });

    //id = intcvc
    var intCVC_Error = EL("intcvc_error");
    var intCVC = EL("intcvc");
    intCVC.addEventListener("change", function () {
            var cvcRegEx = /[^0-9]/g, message = "Enter a correct CVC Number";
        FieldValidate(intCVC_Error, this.value, message, cvcRegEx);
        });
    
    //id = datemonth
    var dateMonth_Error = EL("datemonth_error");
    var dateMonth = EL("datemonth");
    dateMonth.addEventListener("change", function () {
        month[0] = 0;    
        month[0] = this.value;
        FieldValidate(dateMonth_Error, this.value);
        }); 
    //id = dateyear
    var dateYear_Error = EL("dateyear_error");
    var dateYear = EL("dateyear");
    dateYear.addEventListener("change", function () {
        month[1] = 0;    
        month[1] = this.value;
        FieldValidate(dateYear_Error, this.value);
        CheckDate();
        });
  
    //id = placeorder
     EL("placeorder").addEventListener("click", function () {
         //Checking to see if any required field were skipped. Validation of data was done upon entry
         window.alert("Thank You For Placing Your Order! Your Pizza is on its Way!!");
        });   

    
    //id = addrissame
    EL("addrissame").addEventListener("change", function () {
            if(this.checked){               
                strBCustName.value = strCustName.value;
                strBillingAddr.value = strDelivAddr.value;
                intBApt.value = intApt.value;
                strBCity.value = strCity.value;                
                intBZip.value = intZip.value;
                strBState.value = strState.value;
                intBPhone.value = intPhone.value;
                strBEmail.value = strEmail.value;
            }
        });
});


