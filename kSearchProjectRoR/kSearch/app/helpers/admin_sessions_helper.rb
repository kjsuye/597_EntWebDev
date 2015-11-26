module AdminSessionsHelper

  # Logs in the given user.
  def admin_log_in(adminUser)
    session[:user_id] = adminUser.id
  end

  # Returns the current logged-in user (if any).
  def current_admin_user
    @current_admin_user ||= AdminUser.find_by(id: session[:user_id])
  end

  # Returns true if the user is logged in, false otherwise.
  def admin_logged_in?
    !current_admin_user.nil?
  end

  # Logs out the current user.
  def admin_log_out
    session.delete(:user_id)
    @current_admin_user = nil
  end

end
