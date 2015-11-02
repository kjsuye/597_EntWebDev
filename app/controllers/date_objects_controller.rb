class DateObjectsController < ApplicationController
 before_action :logged_in_user, only: [:show]

  def new
    @date_object = DateObject.new
    @date_object.records.build
  end

  def show
    @user = User.find(params[:user_id])
    if DateObject.exists?(params[:id]) 
      @date_object = DateObject.find(params[:id])
    else
      redirect_to new_user_date_object_path(@user)
    end
  end

  def create
    @user = User.find(params[:user_id])
    d = date_object_params
    date = Date.new d["day(1i)"].to_i, d["day(2i)"].to_i, d["day(3i)"].to_i
    @date_object = DateObject.where(:day => date).take
    if !@date_object
      @date_object = @user.date_objects.create(date_object_params)
      if !@date_object
        redirect_to new_user_date_object_path(@user) 
      end
    end
    redirect_to user_date_object_path(@user, @date_object)

#    @user = User.find(params[:user_id])
#    @date_object = @user.date_objects.create(date_object_params)
#    if @date_object 
#      redirect_to user_date_object_path(@user, @date_object)
#    else
#      redirect_to new_user_date_object_path(@user) 
#    end
  end
 
  private
    def date_object_params
      params.require(:date_object).permit(:day)
    end

end
