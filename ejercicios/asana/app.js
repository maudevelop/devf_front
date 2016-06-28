// You have some tasks in your Asana account. For each ith of them you know itsdeadlinei - the last day by which it should be completed. As you can see in your calendar, today is the day number day. Asana labels each task in accordance with its due date:
// * If the task is due today or it's already overdue, it is labeled as Today;
// * If the task should be completed within a week (but not today), i.e. its deadline is somewhere between day + 1 and day + 7 both inclusive, it is labeled asUpcoming;
// * All other tasks are labeled as Later;
// Your goal is to find the number of tasks with each label.
// Example
// * For deadline = [1, 2, 3, 4, 5] and day = 2, the output should betasksTypes(deadline, day) = [2, 3, 0];
// * For deadline = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] and day = 1, the output should be tasksTypes(deadline, day) = [2, 8, 2].

function tasksByType(deadline, day){
    'use strict'
    var arr = [0, 0, 0];

    for (var i = 0; i<deadline.length; i++) {
        deadline[i] <= day ? 
            arr[0] += 1:
        deadline[i] >= day + 1 && deadline[i] <= day + 7 ? 
            arr[1] += 1
        :
            arr[2] += 1;
    }
    return arr;
}
console.log(tasksByType([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8, 1], 1));