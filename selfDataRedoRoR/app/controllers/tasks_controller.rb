class TasksController < ApplicationController

  def show
    @user = User.find(params[:user_id])
    @task = @user.tasks.build(task_params)
  end

  def new
    @user = User.find(params[:user_id])
    @task = @user.tasks.build(task_params)
  end

  def name
    @user = User.find(params[:user_id])
    @task = @user.tasks.find(params[:task_id])
    @name = @task.name
  end

  def create
    @user = User.find(params[:user_id])
    @task = @user.tasks.create(task_params)
    if @task.save
      redirect_to user_path(@user)
    else
      redirect_to user_path(@user) 
    end
  end
 
  def destroy
    @user = User.find(params[:user_id])
    @task = @user.tasks.find(params[:id])
    @task.destroy
    redirect_to user_path(@user)
  end
 
  private

      def task_params
        params.require(:task).permit(:name, :category)
      end
end
