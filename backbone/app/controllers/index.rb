get '/' do
    erb :index
end

get '/items' do
  itemshit = Item.all
    content_type :json

    itemshit.to_json
end
