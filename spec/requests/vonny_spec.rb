require 'spec_helper'

describe "vonny" do
  describe "home page" do
    it "should have the content 'Vonny'" do
          visit '/vonny/home'
          page.should have_content('Vonny')
    end
  end
end
