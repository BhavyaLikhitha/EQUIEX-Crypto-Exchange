import React, { useState } from 'react';
import './settings.css';
import aboutImage from '../../assets/about.jpg';
import contactImage from '../../assets/contactus.jpg';
import kycImage from '../../assets/kyc.jpg';
import myProfileImage from '../../assets/myprofile.jpg';
import notificationsImage from '../../assets/noti.jpg';
import securityImage from '../../assets/security.jpg';
import logout from '../../assets/logoutu.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Switch from '@mui/material/Switch';
import { toast, ToastContainer} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Importing necessary libraries and components
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Settings: React.FC = () => {
  // State management for various settings
  const [activeTab, setActiveTab] = useState<string>('profile'); // Current active tab in settings
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resetPassword, setResetPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [dataSharingEnabled, setDataSharingEnabled] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);
  const [emailAlertsEnabled, setEmailAlertsEnabled] = useState<boolean>(false); 
  const [smsAlertsEnabled, setSmsAlertsEnabled] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); 
  
  const navigate = useNavigate();

  // Handles file input change event
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
  // Handles file sharing to the backend (e.g., for KYC verification)
  const handleFileShare = async () => {
    if (selectedFile) {
      try {
        toast.success("KYC Shared Successfully to our team!");
      } catch (error: any) {
        toast.error('Error sharing file: ' + error.message);
      }
    } else {
      toast.error('Please select a file first.'); // Error if no file selected
    }
  };
   // Handles password reset logic
  const handlePasswordReset = () => {
    if (resetPassword === confirmPassword) {
        toast.success("Password reset Successful!");
    
    } else {
        toast.error("Passwords do not match.Please try again!");
      
    }
  };

  // Toggle handler for settings (e.g., enabling or disabling notifications)
  const handleSwitchChange = (setter: React.Dispatch<React.SetStateAction<boolean>>, label: string, enabled: boolean) => { 
    setter(enabled); 
    const message = enabled ? `${label} enabled` : `${label} disabled`; 
    toast.success(message); // Show success message for switch toggle
  };
    // Handles form submission for the contact us form
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    toast.success('We will contact you shortly.');
  };

  // Handles data sharing toggle
  const handleDataSharingChange = (enabled: boolean) => {
    setDataSharingEnabled(enabled); 
    const message = enabled ? 'Data sharing enabled' : 'Data sharing disabled'; 
    toast.success(message);  // Show success message for data sharing toggle
  };

  // Renders the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return {
          content: (
            <div>
              <h2 className='my-pro'>My Profile</h2>
              {/* Display user's profile information */}
              <div className="profile-field">
                <strong className='strong'>Name:</strong>
                <input type="text" value="Akshay" readOnly />
              </div>
              <div className="profile-field">
                <strong className='strong'>Email:</strong>
                <input type="text" value="akshay@gmail.com" readOnly />
              </div>
              <div className="profile-field">
                <strong className='strong'>Country:</strong>
                <input type="text" value="USA" readOnly />
              </div>
              <div className="profile-field">
                <strong className='strong'>Pincode:</strong>
                <input type="text" value="02115" readOnly />
              </div>
              <div className="profile-field">
                <strong className='strong'>State:</strong>
                <input type="text" value="MA" readOnly />
              </div>
            </div>
          ),
         
          image: myProfileImage,
          
        };
      case 'security':
        return {
          content: (
            <div>
              <h2 className='my-pro'>Security</h2>
              <div className='datah'>
              <label className='data'>
  Data Sharing 
  <Switch 
    className='toggle' 
    {...label} 
    checked={dataSharingEnabled} 
    onChange={(e) => handleDataSharingChange(e.target.checked)} 
  />
</label>
              </div>
              {/* Security settings for password reset */}
              <div className="profile-field">
                <strong className='strong'>Current Password:</strong>
                <input type="password" value="********" readOnly />
              </div>
              <div className="profile">
                <strong className='strong'>Reset Password:</strong>
                <input className='in'
                  type="password"
                  value={resetPassword}
                  onChange={(e) => setResetPassword(e.target.value)}
                />
              </div>
              <div className="profile">
                <strong className='strong'>Confirm Password:</strong>
                <input className='in'
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button className='pro-submit' onClick={handlePasswordReset}>Submit</button>
            </div>
          ),
          image: securityImage,
        };
      case 'notifications':
        return {
          content: (
            <div> 
                <h2 className='my-pro'>Notifications</h2> 
                 {/* Notification settings with switches for toggling */}
                <div> <label className='profile-field'> Enable Notifications 
                    <Switch className='togge' {...label} checked={notificationsEnabled} onChange={(e) => handleSwitchChange(setNotificationsEnabled, 'Notifications', e.target.checked)} />
                         </label> 
                         </div>
                          <div>
                             <label className='profile-field'> Email Alerts 
                                <Switch className='toggle' {...label} checked={emailAlertsEnabled} onChange={(e) => handleSwitchChange(setEmailAlertsEnabled, 'Email Alerts', e.target.checked)} /> 
                                    </label> 
                                    </div> 
                                    <div> 
                                        <label className='profile-field'> SMS Alerts <Switch className='toggle' {...label} checked={smsAlertsEnabled} onChange={(e) => handleSwitchChange(setSmsAlertsEnabled, 'SMS Alerts', e.target.checked)} /> 
                                            </label> 
                                            </div> 
                                            </div>
          ),
          image: notificationsImage,
        };
        // Contact Us section
      case 'contact':
        return {
          content: (
            <div>
              <h2 className='my-pro'>Contact Us</h2>
               {/* Contact form */}
              <form onSubmit={handleFormSubmit}>
                <div >
                  <label className='contact-label'>
                    Name: <input className='inn' type="text" placeholder="Your Name" />
                  </label>
                </div>
                <div>
                  <label  className='contact-label'>
                    Subject: <input className='inn' type="text" placeholder="Subject" />
                  </label>
                </div>
                <div >
                  <label className='contact-label'>
                    Email: <input className='inn' type="email" placeholder="Your Email" />
                  </label>
                </div>
                <div >
                  <label className='contact-label'>
                    Phone: <input className='inn'type="tel" placeholder="Your Phone" />
                  </label>
                </div>
                <div>
                  <label className='contact-label'>
                    Description: <input className='inn' placeholder="Your Message" />
                  </label>
                </div>
                <button className='pr-submit'>Submit</button>
              </form>
            </div>
          ),
          image: contactImage, // Image associated with the Contact Us tab
        };

      // KYC Verification section
      case 'kyc':
        return {
          content: (
            <div>
              <h2 className='my-pro'>KYC Verification</h2>
              <div className='kyc'>
                <label className='contact-label'>
                  Name (as per National ID): <input className='inn' type="text" placeholder="Your Name" />
                </label>
              </div>
              <div>
                <label className='contact-label'>
                  Date of Birth: <input className='inn' type="date" />
                </label>
              </div>
              <div>
                <label className='contact-label'>
                  Gender: 
                  <select className='inn'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label >
              </div>
              <div>
                <label className='contact-label'>
                  Citizenship: <input className='inn' type="text" placeholder="Your Citizenship" />
                </label>
              </div>
              <div>
                <label className='contact-label'>
                  Upload National ID: <input  className='inn'type="file" onChange={handleFileChange} />
                </label>
               
              </div>
              <button className='pr-submit' onClick={handleFileShare}>Submit</button>
            </div>
          ),
          image: kycImage,
        };
      case 'about':
        return {
          content: (
            <div>
              <h2>About</h2>
               {/* Description and features of the platform */}
              <div className="platform-description">
  <p>
    Equiex is an innovative platform designed to provide users with an all-in-one solution for trading cryptocurrency, exploring NFTs, and managing their portfolios. The application is user-friendly and integrates multiple features for an enhanced experience in the world of digital assets. VaultX allows users to track market trends, buy and sell cryptocurrencies, maintain a portfolio, explore NFTs, and stay informed with the latest updates through notifications and blogs.
  </p>
  <h3>Features</h3>
  <ol>
        <li>Buy and Sell: Quick access to crypto trading options.</li>
        <li>Blogs: Read, add, and delete blogs related to the crypto world.</li>
        <li>Notifications: Receive real-time notifications on price changes, rewards, and milestones.</li>
        <li>NFT Gallery: View and manage your NFTs.</li>
        <li>Login/Signup: Secure user authentication.</li>
  </ol>
</div>

            </div>
          ),
          image: aboutImage, // Image associated with the About tab
        };

      // Logout confirmation section
      case 'logout':
        return { 
                content: (
                  <div style={{ textAlign: 'center' }}>
                    <h2 className='my-pro'>Are you sure you want to logout?</h2>
                    
                    <div>
                      <button
                        className="confirm-button"
                        onClick={() => {
                          localStorage.removeItem('userToken');
                          setIsLoggedIn(false); // Update logged-in state
                          navigate('/login');
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className="cancel-button"
                        onClick={() => setActiveTab('profile')} // Redirect to the default or previous tab
                      >
                        No
                      </button>
                    </div>
                  </div>
                ),
                image: logout,
            };
    }
  };
 // Destructure content and image returned by renderContent()
  const { content, image } = renderContent();

  return (
    <>
      <Header />
      <div className="settings-page">
        <div className="settings-sidebar">
          <ul>
            <li onClick={() => setActiveTab('profile')}>My Profile</li>
            <li onClick={() => setActiveTab('security')}>Security</li>
            <li onClick={() => setActiveTab('notifications')}>Notifications</li>
            <li onClick={() => setActiveTab('contact')}>Contact Us</li>
            <li onClick={() => setActiveTab('kyc')}>KYC</li>
            <li onClick={() => setActiveTab('about')}>About</li>
            <li onClick={() => setActiveTab('logout')}>Logout</li>
          </ul>
        </div>

        {/* Main content section */}
        <div className="settings-content">
          {/* Left section: Dynamic content */}
          <div className="settings-content-left">{content}</div>
          <div className="settings-content-right">
            {image && <img src={image} alt={activeTab} className="content-image" />}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
};

export default Settings;
