/**
 * This file contains the basic object model and functions for the todo-list.
 */

const todo_list = {
    tasks: [],
    loc_stor_key: "todos",
    populate()
    {
        this.tasks = this.get();
    },
    get()
    {
        try { return JSON.parse(localStorage.getItem(this.loc_stor_key)) || [] } //Retrieve data from local storage
        catch (e) { console.log(e); }
        return [];
    },
    save()
    {
        localStorage.setItem(this.loc_stor_key, JSON.stringify(this.tasks)); //Store items in local storage
    },
    toggle(id)
    {
        let task = this.tasks[id];
        task.isCompleted = !task.isCompleted; //invert
        this.save();
    },
    add(obj)
    {
        this.tasks.push(obj);
        this.save();
    },
    remove(id)
    {
        this.tasks.splice(id,1);
        this.save();
    },
    update(id, new_task)
    {
        let todo = this.tasks[id];
        todo.task = new_task;
        this.save();
    }
  };
  
  todo_list.populate();

 export default todo_list;