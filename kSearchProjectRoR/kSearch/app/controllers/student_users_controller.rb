class StudentUsersController < ApplicationController
 before_action :logged_in_student_user, only: [:show]

  def show
    if session[:user_id] != params[:id].to_i
      redirect_to current_student_user
    else
      @student_user = StudentUser.find(params[:id])
    end
  end
      
  def new
    @student_user = StudentUser.new
  end
 
  def create
    @student_user = StudentUser.new
    currentCode = Code.where(logInCode: params[:student_user][:logInCode]).take
    if currentCode
      code_params = currentCode.attributes
      code_params.except!("id")
      code_params.except!("timesUsed")
      new_params = student_user_params.merge(code_params)
      @student_user = StudentUser.create(new_params)
      if @student_user.save
        currentCode.increment!(:timesUsed)
        student_log_in @student_user
        redirect_to @student_user
      else
        render 'new'
      end
    else
      flash.now[:danger] = 'Invalid Log In Code'
      render 'new'
    end
  end
 
  private
  
    def student_user_params
      params.require(:student_user).permit(:logInCode, :grade)
    end


end
