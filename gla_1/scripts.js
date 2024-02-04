
    //Create an h1 element
    var h1Element = document.createElement("h1");

    //Set text content
    h1Element.textContent = "Bruno Alves Martins";
    h1Element.style.textAlign = "center";
    h1Element.style.color = "#A9A9A9";

    //Append to the document body
    document.body.appendChild(h1Element);

    // Create the first number input element
    var inputElement1 = document.createElement("input");
    inputElement1.placeholder = "Enter a number";

    // Create the second number input element
    var inputElement2 = document.createElement("input");
    inputElement2.placeholder = "Enter another number";

    // Create a button element
    var buttonElement = document.createElement("button");
    buttonElement.textContent = "Calculate Sum";

    // Create a paragraph element to display the result or error message
    var resultParagraph = document.createElement("p");

    // Add an event listener to the button for calculating the sum and validating inputs
    buttonElement.addEventListener("click", function() {
        // Validate and get values from the input elements
        var value1 = validateAndGetNumber(inputElement1);
        var value2 = validateAndGetNumber(inputElement2);

        if (!isNaN(value1) && !isNaN(value2)) {
            // Calculate the sum
            var sum = value1 + value2;

            // Display the result
            resultParagraph.textContent = "Sum: " + sum;

            // Reset border color and any previous error messages
            inputElement1.style.borderColor = "";
            inputElement2.style.borderColor = "";
        }
        else{
             // Display error message in resultParagraph
             resultParagraph.textContent = "Error: Please enter a valid number.";
        }
    });

    // Append the input elements, button, and result paragraph to the document body
    document.body.appendChild(inputElement1);
    document.body.appendChild(inputElement2);
    document.body.appendChild(buttonElement);
    document.body.appendChild(resultParagraph);

    // Arrow function to validate and get a number from an input element
    var validateAndGetNumber = (inputElement) => {
        try {
            var value = parseFloat(inputElement.value);

            if (isNaN(value)) {
                // Set border color to red
                inputElement.style.borderColor = "red";

                // Throw an error to stop further execution
                throw new Error("Invalid input");
            }

            // Reset border color and any previous error messages
            inputElement.style.borderColor = "";
            resultParagraph.textContent = "";

            return value;
        } catch (error) {
            console.error(error.message);
        }
    };

    // Append styles dynamically using JavaScript
    var styleElement = document.createElement("style");
    styleElement.textContent = `
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
        }

        input, button {
            margin-bottom: 10px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1em;
            width: 200px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }

        p {
            font-size: 1.2em;
            color: #333;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(styleElement);