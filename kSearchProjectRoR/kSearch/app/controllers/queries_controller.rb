class QueriesController < ApplicationController
 before_action :logged_in_student_user, only: [:show, :get_search_results]

# helper_method :get_search_results

  def new
    @student_user = StudentUser.find(params[:student_user_id])
    @query = Query.new
  end

  def create
    @response = nil
    @student_user = StudentUser.find(params[:student_user_id])
    if @student_user
      @query = @student_user.queries.create(query_params)
      @response = GoogleCustomSearch.execute_query(query_params[:queryString])
    end
    redirect_to student_user_path(@student_user)
  end

#  def get_search_results
#    GoogleCustomSearch.get_response
#  end

#  def show
#    if session[:user_id] != params[:id].to_i
#      redirect_to current_student_user
#    else
#      @student_user = StudentUser.find(params[:id])
#      @query = @student_user.querys.build
#    end
#  end

  private

    def query_params
      params.require(:query).permit(:queryString)
    end


end
