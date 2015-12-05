module StudentSessionsHelper
  include SearchHelper

  # Logs in the given user.
  def student_log_in(studentUser)
    session[:user_id] = studentUser.id
  end

  # Returns the current logged-in user (if any).
  def current_student_user
    @current_student_user ||= StudentUser.find_by(id: session[:user_id])
  end

  # Returns true if the user is logged in, false otherwise.
  def student_logged_in?
    !current_student_user.nil?
  end

  # Logs out the current user.
  def student_log_out
    session.delete(:user_id)
    @current_student_user = nil
    GoogleCustomSearch.clear_results
  end

end
