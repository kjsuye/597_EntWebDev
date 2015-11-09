module RecordsHelper

  def get_task_name(task_id)
    @user = User.find(params[:user_id])
    @task = @user.tasks.find(task_id)
    @task_name = @task.name
  end
 
end
