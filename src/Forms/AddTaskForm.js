import React, { useState } from 'react'

const AddTaskForm = props => {
  const initialFormState = { id: null, number: '', dueDate: '' }
  const [task, setTask] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!task.number || !task.dueDate) return

        props.addTask(task)
        setTask(initialFormState)
      }}
    >
      <label>Number</label>
      <input type="text" name="number" value={task.number} onChange={handleInputChange} />
      <label>Due date</label>
      <input type="text" name="dueDate" value={task.dueDate} onChange={handleInputChange} />
      <button>Add new task</button>
    </form>
  )
}

export default AddTaskForm