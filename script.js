window.onload = () => {
          let calcbutton = document.querySelector("#calcBtn");
          calcbutton.addEventListener("click", calculateBMI);

          let conButton = document.querySelector("#conBtn");
          conButton.addEventListener("click", converter);
          conButton.addEventListener("click", calculateBMI);
};

const converter = () => {
          let feet = parseInt(document.querySelector("#heightFeet").value);
          let inch = parseInt(document.querySelector("#heightinch").value);
          let pound = parseFloat(document.querySelector("#weightpound").value);

          let resHeight = (feet * 30.48 + inch * 2.54).toFixed(2);
          let resWeight = (pound / 2.205).toFixed(2);

          document.heightForm.height.value = resHeight;
          document.weightForm.weight.value = resWeight;
};

const calculateBMI = () => {
          let height = parseFloat(document.querySelector("#height").value);
          let weight = parseFloat(document.querySelector("#weight").value);
          const hlen = height.toString().length;
          const wlen = weight.toString().length;

          let result = document.querySelector("#output2");
          let resultValue = document.querySelector("#output1");

          if (height === "" || isNaN(height) || hlen < 3) {
                    document.display2.display2.value =
                              "Provide a valid Height!";
          } else if (weight === "" || isNaN(weight) || wlen < 2) {
                    document.display2.display2.value =
                              "Provide a valid Weight!";
          } else {
                    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
                    document.Calculator.display1.value = bmi;

                    if (bmi < 18.6) {
                              document.display2.display2.value = "Under Weight";
                    } else if (bmi >= 18.6 && bmi < 24.9) {
                              document.display2.display2.value = `Normal`;
                    } else {
                              document.display2.display2.value = "Over Weight";
                    }
          }
};
