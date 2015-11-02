class RecordsController < ApplicationController
 before_action :logged_in_user, only: [:new]

  def new
    @user = User.find(params[:user_id])
    @date_object = @user.date_objects.find(params[:date_object_id])
    @record = @date_object.records.build
  end

  def create
    @user = User.find(params[:user_id])
    @date_object = @user.date_objects.find(params[:date_object_id])
    @record = @date_object.records.create(record_params)
    if @record.save
      redirect_to user_date_object_path(@user, @date_object)
    else
      redirect_to new_user_date_object_record_path(@user, @date_object)
    end
  end
 
  def destroy
    @date_object = DateObject.find(params[:date_object_id])
    @record = @date_object.records.find(params[:id])
    @record.destroy
    redirect_to user_date_object_path(@user, @date_object)
  end

  private
    def record_params
      params.require(:record).permit(:hours, :minutes, :task_id)
    end

end
