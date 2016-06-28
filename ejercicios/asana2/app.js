// As a new engineer at Asana, you're working on a feature that helps people estimate their workload. All a user has to do is specify the number of hours they work every day, provide the time allocated for each task, and the feature automatically calculates the number of days it will take to finish all of the tasks. Since you think it's a bad habit to leave a given task unfinished at the end of a day, tasks should be distributed so that each will be completed during the working hours of a single day.
// Given the time allocations to a user's tasks and their daily workingHours, return the minimum number of days necessary to complete the given tasks. If there's no way to tackle all of them, return -1 instead.
// Example

// For workingHours = 2 and tasks = [1, 2, 1], the output should be
// tasksScheduling(workingHours, tasks) = 2.

// The first and the third tasks may be completed during the first day, and the second task - during the second day.

// For workingHours = 3 and tasks = [2, 2, 2], the output should be
// tasksScheduling(workingHours, tasks) = 3.

// Completing any two tasks in a day requires 4 hours which is more than workingHours, so it is impossible to complete more than one task during a single day.

// For workingHours = 2 and tasks = [1, 1, 3], the output should be
// tasksScheduling(workingHours, tasks) = -1.

// It is impossible to complete the third task during a single day.


function taskScheduling(workingHours, tasks){
    var missing = tasks.reduce(function (a,b){
        return a + b;
    });
    

    var result = 0;
    while (missing > 0){
        result += 1;
        missing -= workingHours;
    }
    return result;
}

console.log(taskScheduling(2, [1, 2, 1]));