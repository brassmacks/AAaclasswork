require 'rails_helper'

RSpec.describe User, type: :model do
    stoken = '666'
    context "validates username: presence, uniqueness" do
    it { should validate_presence_of(:username) }
    
    it { should validate_uniqueness_of(:username) }
    end
    
    context "validates password_digest presence" do
        it { should validate_presence_of(:password_digest) }
    
    end
    
    context "validates password length" do
            it { should validate_length_of(:password).is_at_least(6) }
    end
    
    context "has many goals" do
        it { should have_many(:goals) }
    end



 
    describe 'user: auth, password protocol' do
        #should not save password
        it 'should not save a users password' do
            User.create!(username: 'gretta', password: 'forgetta',session_token: stoken)
            forgretta = User.find_by(username: 'gretta')
            expect(forgretta.password).to be_nil
        end
        # saves input password as a hash
        it 'creates a hash from the input password' do
            corn = User.create!(username: "beef", password: 'redflannelplease', session_token: stoken)
            pass_to_hash = BCrypt::Password.new(corn.password_digest).is_password?('redflannelplease')
            expect(pass_to_hash).to be(true) 
        end
        # # allows access to the password
        # it '' do
        # end
    end

    subject { User.create!(username: 'Tom-blee Bobson', password: "@unt3st3rs3lbows", session_token: stoken)}

    describe 'session tokens' do
        it 'assigns a session token when one is not present' do
            expect(subject.session_token).not_to be_nil
        end
        
        it 'resets a session token on a user' do
            old_session_token = subject.session_token
            new_session_token = subject.reset_session_token!
            expect(old_session_token).not_to eq(new_session_token)
        end


    end

    describe 'finds users with matching credentials' do

        it 'should return the right user' do
            nu_loo = User.create(username: "lou dabbs", password: 'annie12', session_token: stoken)
            you_loo = User.find_by_credentials("lou dabbs", 'annie12')
            expect(you_loo.username).to eq(nu_loo.username)
            expect(you_loo.password_digest).to eq(nu_loo.password_digest)
        end

        it 'should not return a user if the credentials are incorrect' do
            crappy_carl = User.find_by_credentials("carl", "whats_thisdo")
            expect(crappy_carl).to be_nil
        end
    end

end

