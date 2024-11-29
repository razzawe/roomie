interface UserMenuProps {
  userProfilePic: string;
  onLogout: () => void;
}

import { useRouter } from 'next/router';

export const UserMenu: React.FC<UserMenuProps> = ({ userProfilePic, onLogout }) => {
  const router = useRouter();
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      borderLeft: '1px solid #e0e0e0',
      height: '100%'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <button 
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            onClick={() => {router.push('/profile')}} //Fill in the routing info here
          >
            <img 
              src={userProfilePic} 
              alt="Profile" 
              style={{ 
                width: '100px', // Increased from 80px
                height: '100px', // Increased from 80px
                borderRadius: '50%',
                marginBottom: '0.5rem'
              }} 
            />
          </button>
          <div style={{ fontSize: '0.9rem' }}>Profile</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            onClick={() => {/* Add notifications click handler */}}
          >
            <div style={{
              width: '100px', // Increased from 80px
              height: '100px', // Increased from 80px
              borderRadius: '50%',
              backgroundColor: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '2.5rem' }}>🔔</span> {/* Increased from 2rem */}
            </div>
          </button>
          <div style={{ fontSize: '0.9rem' }}>Notifications</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            onClick={() => {/* Add settings click handler */}}
          >
            <div style={{
              width: '100px', // Increased from 80px
              height: '100px', // Increased from 80px
              borderRadius: '50%',
              backgroundColor: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: '2.5rem' }}>⚙️</span> {/* Increased from 2rem */}
            </div>
          </button>
          <div style={{ fontSize: '0.9rem' }}>Settings</div>
        </div>

        <button 
          style={{
            marginTop: 'auto',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#e0e0e0',
            cursor: 'pointer',
            width: '100%'
          }}
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
