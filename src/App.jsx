import './App.css';
import ReusableForm from './components/ReusableForm/ReusableForm';

function App() {
    const handleSignUpSubmit = data => {
        console.log('sign up data', data)
    };

    const handleUpdateProfile = data => {
        console.log('update profile', data);
    };

    return (
        <>
            {/* <SimpoleForm /> */}
            {/* <StateFulForm /> */}
            {/* <RefForm /> */}
            {/* <HookForm /> */}
        <ReusableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
            </ReusableForm>

        <ReusableForm formTitle={'Profile Update'} submitBtnText="Update" handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
            </ReusableForm>
        </>
    );
}

export default App;
