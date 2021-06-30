require 'rack'




app = Proc.new do |env|
    #env environment 
    # [status code, {headers}, [body]]
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  port = req.port
  statement = req.url
#   res.write(statement[1])
  res.write(port)
  res.finish
end



Rack::Server.start(
  app: app,
  Port: 3000
)



