class CatsController < ApplicationController

    def index
        @cats = Cats.all
        render :index
    end
    
    def show
        @cat = Cats[param[:id]]
        render :show
    end
end
