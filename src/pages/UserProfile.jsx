import usePersistedUserState from "../Components/UI/persistedHook";
// import { useNavigate } from "react-router-dom";
const UserProfile = () => {
    const [user] = usePersistedUserState("userInfo", null);
    // const [loading, setLoading] = useState(false);
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full">
                    <div className="flex items-center justify-center mb-6">
                        <img
                            className="w-24 h-24 rounded-full border-4 border-indigo-500"
                            src={user.image}
                            alt="User Avatar"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">{user.firstName} {user.lastName}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-800">About</h3>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                        </p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-medium text-gray-800">Details</h3>
                        <ul className="text-gray-600 mt-2">
                            <li><strong>First Name:</strong> {user.firstName}</li>
                            <li><strong>Last Name:</strong> {user.lastName}</li>
                            <li><strong>Email:</strong> {user.email}</li>
                            <li><strong>Gender:</strong> {user.gender}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;