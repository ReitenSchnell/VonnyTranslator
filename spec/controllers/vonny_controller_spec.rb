require 'spec_helper'

describe VonnyController do

  describe "GET 'home'" do
    it "returns http success" do
      get 'home'
      response.should be_success
    end
  end

end
