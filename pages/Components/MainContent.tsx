import React from 'react';
import InfoCard from './InfoCard';


interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: string;
  profilePic: string;
  hobbies: string[];
  description: string;
  matchPercentage: number;
}

interface MainContentProps {
  userProfile: UserProfile;
  onInterested: (profile: UserProfile) => void;
  onNotInterested: (profile: UserProfile) => void;
}

const MainContent: React.FC<MainContentProps> = ({ userProfile, onInterested, onNotInterested }) => {
  const defaultProfile: UserProfile = {
    id: '0',
    name: "John Doe",
    age: 30,
    gender: "Male",
    profilePic: "https://via.placeholder.com/200",
    hobbies: ["Reading", "Hiking", "Photography"],
    description: "A passionate developer who loves to create and innovate.",
    matchPercentage: 10
  };

  const profile = userProfile || defaultProfile;

  const styles = {
    mainContent: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '2rem',
      paddingLeft: '2rem', // Add padding to move content right
    },
    profileSection: {
      display: 'flex',
      gap: '3rem', // Increased gap between image and info
      flexWrap: 'wrap' as const,
      justifyContent: 'center', // Center the content
      alignItems: 'flex-start', // Align items to the top
      marginTop: '1rem', // Add some top margin
    },
    profileImage: {
      width: '200px',
      height: '200px',
      flexShrink: 0, // Prevent image from shrinking
      marginLeft: '2rem', // Add left margin to move image right
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover' as const,
      border: '3px solid #eee', // Optional: adds a border around the image
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: adds subtle shadow
    },
    profileInfo: {
      flex: 1,
      minWidth: '300px',
      maxWidth: '600px', // Add maximum width to prevent stretching
    },
    additionalInfo: {
      width: '100%',
      maxWidth: '900px', // Add maximum width to prevent stretching
      margin: '0 auto', // Center the additional info section
      paddingLeft: '2rem', // Match the padding of content container
      paddingRight: '2rem', // Add right padding for balance
      headerContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      },
      button: {
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.9rem',
        backgroundColor: '#007bff',
        color: 'white',
        transition: 'background-color 0.2s'
      },
      secondaryButton: {
        backgroundColor: '#6c757d',
      }
    }
  };

  const handleEditClick = () => {
    // Add your edit logic here
    console.log('Edit clicked');
  };

  const handleViewClick = () => {
    // Add your view logic here
    console.log('View clicked');
  };

  return (
    <main style={styles.mainContent}>
      <div style={styles.contentContainer}>
        <div style={styles.profileSection}>
          <div style={styles.profileImage}>
            <img 
              src={profile.profilePic} 
              alt={profile.name} 
              style={styles.image}
            />
          </div>
          
          <div style={styles.profileInfo}>
            <InfoCard 
              title={
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span>Basic Information</span>
                  <button 
                    onClick={() => onInterested(userProfile)} 
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      backgroundColor: '#28a745',
                      color: 'white',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    Interested
                  </button>
                  <button 
                    onClick={() => onNotInterested(userProfile)} 
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    Not Interested
                  </button>
                </div>
              }
            >
              <p>Name: {profile.name}</p>
              <p>Age: {profile.age}</p>
              <p>Gender: {profile.gender}</p>
            </InfoCard>
          </div>
        </div>

        <div style={styles.additionalInfo}>
          <InfoCard title="About Me">
            <p>Hobbies: {profile.hobbies.join(', ')}</p>
            <p>Description: {profile.description}</p>
          </InfoCard>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
