/*
1) Get list of the student grades
2) Get the numeric value for each grade and sum them up.
3) Compute the average of all the grades
4) Convert the average to an alphabet grade
5) Print the result to the web page
*/

// 1) Get list of the student grades
function gpa_calculator(grades){

    //2) Get the numeric value for each grade and sum them up.
    let sum = 0;
    for(let grade of grades) {
        if (grade === 'A') {
            sum += 100; //sum = sum + 100;
        } else if (grade === 'B') {
           sum += 80;
        } else if (grade === 'C') {
            sum += 70;
        }
    }

    //3) Compute the average of all the grades
    let average = sum / grades.length;

    //4) Convert the average to an alphabet grade
    let result = '';
    if (average > 95) {
        result = 'A';
    } else if(average > 80) {
        result = 'B'
    } else if(average > 70) {
        result = 'C'
    }

    //5) Print the result to the web page
    document.write('Grade is ' + result);
}

gpa_calculator(['A', 'A', 'C']);
gpa_calculator(['B', 'A', 'B']);
gpa_calculator(['C', 'C', 'B', 'A']);


/*
1) Get the height and weight of a person
2) Use the BMI formula to compute the person's BMI
3) Based on the BMI value, get body type
4) Print the result (body type) to the web page

*/