import React from 'react';
import { UserProfile } from '../index';

interface ConnectionsListProps {
    connections: UserProfile[];
    onSelectConnection: (connection: UserProfile) => void;
}

export const ConnectionsList: React.FC<ConnectionsListProps> = ({ connections, onSelectConnection }) => {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      height: '100vh', // Set to full viewport height
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed', // Fix the position
      width: '300px', // Or whatever width you prefer
    }}>
      {/* Title Card - Fixed */}
      <div style={{
        padding: '1rem',
        paddingBottom: '0'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#333'
          }}>
            Connections
          </h2>
        </div>
      </div>

      {/* Scrollable Container Card */}
      <div style={{
        padding: '1rem',
        paddingTop: '0',
        flex: 1,
        minHeight: 0, // Important for Firefox
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          height: '100%',
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 120px)', // Adjust based on your header height
        }}>
          {connections.map(connection => (
            <div 
              key={connection.id} 
              onClick={() => onSelectConnection(connection)}
              style={{ 
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <img 
                  src={connection.profilePic} 
                  alt={connection.name} 
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} 
                />
                <div>
                  <div style={{
                    fontWeight: '500',
                    fontSize: '1.1rem'
                  }}>
                    {connection.name}
                  </div>
                  <div style={{
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    {connection.matchPercentage}% Match
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Remove margin from last connection card */}
          <style>
            {`
              div:last-child {
                margin-bottom: 0;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};
