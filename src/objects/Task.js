class Task {
    taskId
    taskName
    status
    createdDate

    constructor(taskId, taskName, status, createdDate) {
        this.taskId = taskId
        this.taskName = taskName
        this.status = status
        this.createdDate = createdDate
    }
}

export default Task;