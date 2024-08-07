A COSC260 assignment

### Overview

You are working at an animal shelter and need to determine whether people seeking to adopt an animal have suitable premises and what kind of animal is right for them. In this assignment, you will build an ideal pet test to evaluate the kind of pet that would be suitable for an owner. You will then build a registration form to allow them to sign up once they have completed the test.

You will present the user with an ideal pet test comprised of **FIVE questions**, which must **ALL** be answered. You will write a JavaScript algorithm to calculate a pet score based on the user's responses. The user will receive a score and their ideal pet, and they will be prompted to complete the adoption registration form.

You will also be required to implement **THREE image animations**, which will be presented to the user upon test completion, depending on their score.

The design of the test and registration form is entirely up to you - you will be required to submit your HTML and CSS forms along with your JavaScript code.

### Project Structure

Please use the following structure:

```
assignment3
|       a3.html
+----css
|            your_custom_1.css
|            your_custom_2.css
|            ....
+----img
|            rodent.jpg
|            cat.jpg
|            large_dog.jpg
|            ....
+----js
|            animate.js
|            pet_test.js
|            .....
|            registration_validation.js
```

### Ideal Pet Test

The purpose of this test is to verify whether a potential applicant has the required facilities to adopt a pet and then give them the option to register once they have been presented with an ideal pet. The test will present the user with **FIVE questions**.

Responses will be scored as indicated in the table below. If the user scores within a certain range, they will be matched with a pet and given the option to register.

#### Scoring

Add up the scores from each question to determine the ideal pet type based on your preferences:
- **0-10 points**: Consider low-maintenance pets like fish, reptiles, or small rodents.
- **11-25 points**: Cats or small to medium-sized dogs might be suitable.
- **26-50 points**: Larger dogs or more interactive pets like parrots or rabbits could be ideal.

Each question **MUST** be answered (use input validation for this) before their score can be calculated.

#### Pet Evaluation Test

| Question | Possible response/s | Pet score |
|----------|---------------------|-----------|
| How much space do you have for a pet? | A. Very limited space (e.g., apartment) <br> B. Moderate space (e.g., small house) <br> C. Large space (e.g., spacious house with yard) | A. 0 <br> B. 5 <br> C. 10 |
| How much time can you dedicate to exercising your pet? | A. Very little time <br> B. Some time each day <br> C. A lot of time for daily exercise | A. 0 <br> B. 5 <br> C. 10 |
| How important is ease of grooming to you? | A. Very important (prefer low-maintenance pets) <br> B. Somewhat important (willing to groom regularly) <br> C. Not important (willing to invest time in grooming) | A. 0 <br> B. 5 <br> C. 10 |
| What noise level is acceptable to you? | A. Prefer a quiet pet <br> B. Moderate noise is okay <br> C. Don’t mind loud noises | A. 0 <br> B. 5 <br> C. 10 |
| How much interaction do you want from your pet? | A. Prefer a more independent pet <br> B. Moderate interaction (some playtime and attention) <br> C. Very interactive and affectionate pet | A. 0 <br> B. 5 <br> C. 10 |

You are to implement this test in JavaScript, using client-side scripting only.

### JQuery Image Animation

You are to implement **THREE image animations** using JQuery, as follows:

- **If applicant scores between 0 - 10 points**:
  - Display an image of a fish, reptile, or rodent.
  - Display the score in a different color from the other 3.
  - Display a message indicating the ideal pet.
  - After the animation has displayed for 10 seconds, display the option to register.

- **If applicant scores between 11 - 25 points**:
  - Display an image of a cat or small to medium-sized dog.
  - Display the score in a different color from the other 3.
  - Display a message indicating the ideal pet.
  - After the animation has displayed for 10 seconds, display the option to register.

- **If applicant scores between 26 - 50 points**:
  - Display an image of a larger dog or more interactive pet like a parrot or rabbit.
  - Display the score in a different color from the other 3.
  - Display a message indicating the ideal pet.
  - After the animation has displayed for 10 seconds, display the option to register.
 
### User Registration

Once the applicant receives a score, they are to be redirected or prompted to complete a registration form (after the image animation is complete). This registration form **MUST** include the following:

#### Registration Form

| Field         | Validation requirements                                                                                                                                                                                                 |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**      | - MUST NOT be empty <br> - MUST be between 2 and 100 characters long <br> - MUST only contain characters a-z (upper and lower case), - (hyphen), whitespace or ' (apostrophe) <br> - Useful Regular Expression: `/^[a-zA-Z'-]+$/` |
| **Age**       | - MUST NOT be empty <br> - MUST be an integer value between 18 and 130                                                                                                                                                   |
| **Email**     | - MUST NOT be empty <br> - MUST be validated using an appropriate Regular Expression, e.g., `/^[a-zA-Z-]([\w-.]+)?@([\w-]+\.)+[\w]+$/`                                                                                   |
| **Phone number** | - OPTIONAL: this field may be empty <br> - If provided: <br> &nbsp;&nbsp;&nbsp;&nbsp;- MUST be exactly 10 characters long <br> &nbsp;&nbsp;&nbsp;&nbsp;- MUST contain only digits (no letters or symbols) <br> &nbsp;&nbsp;&nbsp;&nbsp;- MUST start with 04 |

If there is a problem with user input, an error message **MUST** be displayed for each problem. 
- **HINT**: Create an error class and apply it to each error message.

Once the user has provided valid input for all fields, display a success message.

