import React, { useState, useEffect } from 'react'

const EditTaskForm = props => {
  const [task, setTask] = useState(props.currentTask)

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }
  useEffect(() => {
    setTask(props.currentTask)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateTask(task.id, task)
      }}
    >
      <label>Number</label>
      <input type="text" name="number" value={task.number} onChange={handleInputChange} />
      <label>Due date</label>
      <input type="text" name="dueDate" value={task.dueDate} onChange={handleInputChange} />
      <button>Update task</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditTaskForm