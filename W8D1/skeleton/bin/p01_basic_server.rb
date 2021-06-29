require 'rack'

app = Proc.new do |env|
    #env environment 
    # [status code, {headers}, [body]]
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  port = req.port.to_s
  statement = req.url.split(port)
  res.write(statement[1])
  res.finish
end



Rack::Server.start(
  app: app,
  Port: 3000
)



