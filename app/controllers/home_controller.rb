class HomeController < ApplicationController
  def index
    render inertia: 'Home/Index', props: {}
  end
end
