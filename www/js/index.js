function ajouterTache() {
    const task = document.getElementById("task");
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListDone = document.getElementById('taskListDone');

    if (task.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value;
        taskListInProgress.appendChild(newItem);

        $(newItem).on('swiperight', function (e) {
            $(this).css('text-decoration', 'line-through');
            setTimeout(() => {
                taskListDone.appendChild(this);
                $(this).css('text-decoration', 'none'); // Remove strikethrough after moving
                $(taskListInProgress).listview('refresh');
                $(taskListDone).listview('refresh');
            }, 2000); // 2 seconds
        });

        $(newItem).on('swipeleft', function (e) {
            $(this).hide('slow', function () {
                $(this).remove();
            });
        });

        $(taskListInProgress).listview('refresh');
        $(taskListDone).listview('refresh');
    }
    task.value = '';
    task.focus();
}

function reinitialiserListe() {
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListDone = document.getElementById('taskListDone');
    const task = document.getElementById("task");
    task.value = '';
    taskListInProgress.innerHTML = '';
    taskListDone.innerHTML = '';
    task.focus();
}
