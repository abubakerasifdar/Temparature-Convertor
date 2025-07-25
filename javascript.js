
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let a = Number(document.getElementById('temp').value);
            let choice = document.getElementById("choice").value;
            let result;
            switch (choice) {
                case "C": {
                    result = (a * 9 / 5) + 32;
                    output =  `Your Entered ${a} and Conversion Form ${a}C to Farehite is ${result}F`
                    document.getElementById("output").style.background = "brown";
                    break;
                }
                case "F": {
                    result = (a - 32) * 5 / 9;
                     output =  `Your Entered ${a} and Conversion Form ${a}F to Celcius is ${result}C`
                     document.getElementById("output").style.background = "black";
                    break;
                }
                default: {
                    output = "Please Input a right feild."
                    document.getElementById("output").style.background = "red";
                }
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = output;
        }
  