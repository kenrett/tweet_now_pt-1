get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/post' do
  p params
  q = Twitter.update(params[:tweet])
  q.to_json
end
